"use client";

import { useState } from "react";
import { User, Mail, Briefcase, ArrowRight } from "lucide-react";
import { cn } from "@/components/ui/TechTypography";

interface LeadFormProps {
    formId: string;
    theme?: "tech" | "editorial";
}

export function LeadForm({ formId, theme = "tech" }: LeadFormProps) {
    const isTech = theme === "tech";

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        niche: "",
        _honeypot: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Anti-spam honeypot check
        if (formData._honeypot) {
            console.warn("Spam detected");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call / Webhook
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form Submitted:", {
            formId,
            ...formData,
            source_url: window.location.href,
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                <div
                    className={cn(
                        "w-20 h-20 rounded-full flex items-center justify-center mb-2",
                        isTech ? "bg-[#D5E8B3]/10" : "bg-[#6D2749]/10"
                    )}
                >
                    <svg className={cn("w-10 h-10", isTech ? "text-[#D5E8B3]" : "text-[#6D2749]")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className={cn("text-2xl font-bold", isTech ? "text-white" : "text-black")}>
                    Solicitação Recebida!
                </h3>
                <p className={cn("text-balance", isTech ? "text-white/60" : "text-gray-600")}>
                    Nossos especialistas estão analisando seu perfil. Você receberá um contato em breve.
                </p>
            </div>
        );
    }

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

    const options = isTech ? techOptions : editorialOptions;

    return (
        <form onSubmit={handleSubmit} className="space-y-5" id={formId}>
            {/* Honeypot field - Hidden from users */}
            <input
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
            />

            <div>
                <label className={cn("block text-sm font-medium mb-1.5", isTech ? "text-white/70" : "text-gray-700")}>
                    Seu Nome
                </label>
                <div className="relative">
                    <User className={cn("absolute left-3 top-3 w-5 h-5 z-10", isTech ? "text-white/40" : "text-gray-400")} />
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="João Silva"
                        className={cn(
                            "w-full rounded-lg pl-10 pr-4 py-3 focus:outline-none transition-all duration-300 relative z-20",
                            isTech
                                ? "bg-transparent border border-[#4A1731]/40 text-white focus:border-[#6D2749]"
                                : "autofill-light bg-white border border-black/20 text-black focus:border-[#6D2749] focus:ring-1 focus:ring-[#6D2749]"
                        )}
                    />
                </div>
            </div>

            <div>
                <label className={cn("block text-sm font-medium mb-1.5", isTech ? "text-white/70" : "text-gray-700")}>
                    E-mail Profissional
                </label>
                <div className="relative">
                    <Mail className={cn("absolute left-3 top-3 w-5 h-5 z-10", isTech ? "text-white/40" : "text-gray-400")} />
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nome@empresa.com.br"
                        className={cn(
                            "w-full rounded-lg pl-10 pr-4 py-3 focus:outline-none transition-all duration-300 relative z-20",
                            isTech
                                ? "bg-transparent border border-[#4A1731]/40 text-white focus:border-[#6D2749]"
                                : "autofill-light bg-white border border-black/20 text-black focus:border-[#6D2749] focus:ring-1 focus:ring-[#6D2749]"
                        )}
                    />
                </div>
            </div>

            <div>
                <label className={cn("block text-sm font-medium mb-1.5", isTech ? "text-white/70" : "text-gray-700")}>
                    Seu Segmento
                </label>
                <div className="relative">
                    <Briefcase className={cn("absolute left-3 top-3 w-5 h-5 z-10", isTech ? "text-white/40" : "text-gray-400")} />
                    <select
                        required
                        name="niche"
                        value={formData.niche}
                        onChange={handleChange}
                        className={cn(
                            "w-full rounded-lg pl-10 pr-4 py-3 focus:outline-none transition-all duration-300 appearance-none relative z-20",
                            isTech
                                ? "bg-[#0C0C0E] border border-[#4A1731]/40 text-white focus:border-[#6D2749]"
                                : "autofill-light bg-white border border-black/20 text-black focus:border-[#6D2749] focus:ring-1 focus:ring-[#6D2749]"
                        )}
                    >
                        <option value="" disabled>Selecione seu segmento...</option>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="pt-2 mt-4 border-t border-transparent">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                        "w-full py-3.5 rounded-lg font-bold transition-all flex items-center justify-center disabled:opacity-50",
                        isTech
                            ? "bg-[#D5E8B3] hover:bg-[#C4DB9B] text-[#050506] shadow-[0_0_15px_rgba(213,232,179,0.2)]"
                            : "bg-[#6D2749] hover:bg-[#4A1731] text-white shadow-md hover:shadow-lg"
                    )}
                >
                    {isSubmitting ? "Enviando..." : "Solicitar Diagnóstico Gratuito"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
            </div>
        </form>
    );
}
