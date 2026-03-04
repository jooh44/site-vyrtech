"use client";

import { useState, useCallback, useMemo } from "react";
import { User, Mail, Briefcase, ArrowRight, Phone, Building2, UserCircle, DollarSign, Calendar, ChevronLeft } from "lucide-react";
import { cn } from "@/components/ui/TechTypography";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@/lib/gtm-utils";
import { TrackingEvents } from "@/lib/tracking-events";
import { motion, AnimatePresence } from "framer-motion";

interface LeadFormProps {
    formId: string;
    trackingId?: string;
    theme?: "tech" | "editorial";
}

const STEPS_COUNT = 9;

export function LeadForm({ formId, trackingId, theme = "tech" }: LeadFormProps) {
    const isTech = theme === "tech";
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        niche: "",
        revenue: "",
        investment: "",
        startDate: "",
        _honeypot: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const nextStep = useCallback(() => {
        if (currentStep < STEPS_COUNT) {
            setCurrentStep(prev => prev + 1);
        }
    }, [currentStep]);

    const prevStep = useCallback(() => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    }, [currentStep]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentStep < STEPS_COUNT) {
            nextStep();
            return;
        }

        if (formData._honeypot) {
            console.warn("Spam detected");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formId,
                    theme,
                    ...formData,
                    source_url: window.location.href,
                }),
            });

            if (response.ok) {
                sendGTMEvent(TrackingEvents.LEAD_SUBMISSION, {
                    validation_status: "success",
                    form_id: trackingId || formId,
                    theme: theme,
                    niche: formData.niche,
                });
                router.push(`/obrigado?theme=${theme}`);
            } else {
                console.error("Failed to submit form to webhook");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setIsSubmitting(false);
        }
    };

    const techOptions = [
        { value: "Tecnologia", label: "Tecnologia & SaaS" },
        { value: "Industria", label: "Indústria Corporativa" },
        { value: "Servicos", label: "Serviços B2B" },
        { value: "Locacao", label: "Locação & Varejo Premium" },
        { value: "Outros", label: "Outros" }
    ];

    const editorialOptions = [
        { value: "Noivas", label: "Ateliê de Noivas" },
        { value: "Masculino", label: "Trajes Masculinos & Gala" },
        { value: "Festa", label: "Locação de Festa / 15 Anos" },
        { value: "Varejo", label: "Varejo de Moda Premium" },
        { value: "Outros", label: "Outros" }
    ];

    const nicheOptions = isTech ? techOptions : editorialOptions;

    const revenueOptions = [
        { value: "Até 30 mil", label: "Até R$ 30.000,00" },
        { value: "30 mil a 100 mil", label: "R$ 30.000,00 a R$ 100.000,00" },
        { value: "100 mil a 500 mil", label: "R$ 100.000,00 a R$ 500.000,00" },
        { value: "Mais de 500 mil", label: "Mais de R$ 500.000,00" }
    ];

    const investmentOptions = [
        { value: "Sim! É o que eu preciso e estou disposto!", label: "Sim! Estou disposto!" },
        { value: "Não sei ainda, preciso entender melhor", label: "Não sei ainda" },
        { value: "Não tenho esse orçamento agora", label: "Não tenho orçamento" }
    ];

    const startDateOptions = [
        { value: "Imediatamente", label: "Imediatamente" },
        { value: "Em 15 dias", label: "Em até 15 dias" },
        { value: "Em 30 dias", label: "Em até 30 dias" },
        { value: "Apenas pesquisando", label: "Apenas pesquisando" }
    ];

    const isStepValid = useMemo(() => {
        switch (currentStep) {
            case 1: return formData.name.length > 2;
            case 2: return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
            case 3: return formData.phone.length >= 10;
            case 4: return formData.company.length > 1;
            case 5: return formData.role.length > 1;
            case 6: return formData.niche !== "";
            case 7: return formData.revenue !== "";
            case 8: return formData.investment !== "";
            case 9: return formData.startDate !== "";
            default: return false;
        }
    }, [currentStep, formData]);

    const stepVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <div className="relative">
            {/* Progress Bar */}
            <div className="absolute -top-12 left-0 w-full h-1.5 bg-vyr-wine/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-vyr-wine"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep / STEPS_COUNT) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 min-h-[320px] flex flex-col justify-between" id={formId}>
                <input type="text" name="_honeypot" value={formData._honeypot} onChange={handleChange} className="hidden" tabIndex={-1} />

                <div className="flex-grow">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            variants={stepVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            {currentStep === 1 && (
                                <StepField label="Como devemos te chamar?" icon={User} isTech={isTech}>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} autoFocus placeholder="Seu nome completo" className={inputClasses(isTech)} />
                                </StepField>
                            )}

                            {currentStep === 2 && (
                                <StepField label="Qual é o seu e-mail profissional?" icon={Mail} isTech={isTech}>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} autoFocus placeholder="Ex: nome@empresa.com" className={inputClasses(isTech)} />
                                </StepField>
                            )}

                            {currentStep === 3 && (
                                <StepField label="Seu número de WhatsApp?" icon={Phone} isTech={isTech}>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} autoFocus placeholder="(00) 00000-0000" className={inputClasses(isTech)} />
                                </StepField>
                            )}

                            {currentStep === 4 && (
                                <StepField label="Qual o nome da sua empresa?" icon={Building2} isTech={isTech}>
                                    <input required type="text" name="company" value={formData.company} onChange={handleChange} autoFocus placeholder="Nome da empresa" className={inputClasses(isTech)} />
                                </StepField>
                            )}

                            {currentStep === 5 && (
                                <StepField label="Qual é o seu cargo?" icon={UserCircle} isTech={isTech}>
                                    <input required type="text" name="role" value={formData.role} onChange={handleChange} autoFocus placeholder="Ex: Proprietário, Gestor, etc" className={inputClasses(isTech)} />
                                </StepField>
                            )}

                            {currentStep === 6 && (
                                <StepField label="Qual seu segmento de mercado?" icon={Briefcase} isTech={isTech}>
                                    <select required name="niche" value={formData.niche} onChange={handleChange} className={inputClasses(isTech)}>
                                        <option value="" disabled className={isTech ? "bg-[#121214] text-white" : "bg-white text-black"}>Selecione seu segmento...</option>
                                        {nicheOptions.map(opt => <option key={opt.value} value={opt.value} className={isTech ? "bg-[#121214] text-white" : "bg-white text-black"}>{opt.label}</option>)}
                                    </select>
                                </StepField>
                            )}

                            {currentStep === 7 && (
                                <StepField label="Qual o faturamento médio mensal?" icon={DollarSign} isTech={isTech}>
                                    <select required name="revenue" value={formData.revenue} onChange={handleChange} className={inputClasses(isTech)}>
                                        <option value="" disabled className={isTech ? "bg-[#121214] text-white" : "bg-white text-black"}>Selecione uma faixa...</option>
                                        {revenueOptions.map(opt => <option key={opt.value} value={opt.value} className={isTech ? "bg-[#121214] text-white" : "bg-white text-black"}>{opt.label}</option>)}
                                    </select>
                                </StepField>
                            )}

                            {currentStep === 8 && (
                                <StepField label="Disposto a investir R$ 1.500/mês (+ ads)?" icon={DollarSign} isTech={isTech}>
                                    <select required name="investment" value={formData.investment} onChange={handleChange} className={inputClasses(isTech)}>
                                        <option value="" disabled className={isTech ? "bg-[#121214] text-white" : "bg-white text-black"}>Selecione uma opção...</option>
                                        {investmentOptions.map(opt => <option key={opt.value} value={opt.value} className={isTech ? "bg-[#121214] text-white" : "bg-white text-black"}>{opt.label}</option>)}
                                    </select>
                                </StepField>
                            )}

                            {currentStep === 9 && (
                                <StepField label="Para quando deseja iniciar?" icon={Calendar} isTech={isTech}>
                                    <select required name="startDate" value={formData.startDate} onChange={handleChange} className={inputClasses(isTech)}>
                                        <option value="" disabled className={isTech ? "bg-[#121214] text-white" : "bg-white text-black"}>Selecione um prazo...</option>
                                        {startDateOptions.map(opt => <option key={opt.value} value={opt.value} className={isTech ? "bg-[#121214] text-white" : "bg-white text-black"}>{opt.label}</option>)}
                                    </select>
                                </StepField>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex flex-col space-y-4 pt-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className={cn(
                                    "py-4 px-6 rounded-xl font-bold transition-all flex items-center justify-center border",
                                    isTech
                                        ? "border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                                        : "border-black/10 text-gray-600 hover:bg-gray-50"
                                )}
                            >
                                <ChevronLeft className="w-5 h-5 mr-1" /> Voltar
                            </button>
                        )}

                        <button
                            type="submit"
                            disabled={!isStepValid || isSubmitting}
                            className={cn(
                                "py-4 px-8 rounded-xl font-black transition-all flex items-center justify-center disabled:opacity-30 disabled:grayscale flex-1 uppercase tracking-wider",
                                isTech
                                    ? "bg-[#D5E8B3] hover:bg-white text-[#050506] shadow-[0_0_20px_rgba(213,232,179,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-[1.02] active:scale-[0.98]"
                                    : "bg-[#6D2749] hover:bg-[#8B315D] text-white shadow-lg hover:shadow-xl active:scale-[0.98]"
                            )}
                        >
                            {isSubmitting ? "Enviando..." : currentStep === STEPS_COUNT ? "Enviar Diagnóstico" : "Próximo Passo"}
                            {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                        </button>
                    </div>

                    <p className={cn(
                        "text-[10px] text-center opacity-40 uppercase tracking-[0.2em] font-bold mt-2",
                        isTech ? "text-white" : "text-black"
                    )}>
                        🔒 Seus dados estão protegidos de acordo com a LGPD.
                    </p>
                </div>
            </form>
        </div>
    );
}

function StepField({ label, icon: Icon, isTech, children }: { label: string, icon: any, isTech: boolean, children: React.ReactNode }) {
    return (
        <div className="space-y-6">
            <label className={cn("block text-2xl md:text-3xl font-black tracking-tighter leading-tight", isTech ? "text-white" : "text-black")}>
                {label}
            </label>
            <div className="relative group">
                <div className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-lg transition-colors z-30",
                    isTech ? "bg-white/5 group-focus-within:bg-[#D5E8B3]/20" : "bg-gray-100 group-focus-within:bg-[#6D2749]/10"
                )}>
                    <Icon className={cn("w-5 h-5 transition-colors", isTech ? "text-white/40 group-focus-within:text-[#D5E8B3]" : "text-gray-400 group-focus-within:text-[#6D2749]")} />
                </div>
                {children}
            </div>
        </div>
    );
}

const inputClasses = (isTech: boolean) => cn(
    "w-full rounded-xl pl-16 pr-4 py-5 text-lg font-medium focus:outline-none transition-all duration-300 relative z-20 border-2",
    isTech
        ? "bg-[#0A0A0B]/80 hover:bg-[#121214] border-white/5 text-white focus:border-[#D5E8B3] focus:shadow-[0_0_15px_rgba(213,232,179,0.1)]"
        : "autofill-light bg-gray-50/50 hover:bg-white border-black/5 text-black focus:border-[#6D2749] focus:ring-1 focus:ring-[#6D2749]"
);
