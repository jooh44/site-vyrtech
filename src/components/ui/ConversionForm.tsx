"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Building, User, Mail, Phone, BarChart3, Briefcase } from "lucide-react";

export function ConversionForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        revenue: "",
        segment: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate webhook delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Mock Webhook Payload:", {
            ...formData,
            source_url: window.location.href,
            utm_source: "direct"
        });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <section className="py-24 md:py-32 bg-vyr-darker relative border-t border-white/5" id="diagnostico">

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 relative z-10">

                {/* Text Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="inline-block py-1 px-4 w-fit rounded-full border border-vyr-olive/30 bg-vyr-olive/10 backdrop-blur-sm text-sm font-medium text-vyr-olive-light mb-6">
                        Auditoria Estratégica
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-vyr-text mb-6 tracking-tight text-balance">
                        Pronto para transformar <span className="text-vyr-wine-light">dados em receita?</span>
                    </h2>
                    <p className="text-lg text-vyr-text-muted mb-8 leading-relaxed text-balance">
                        Não somos uma agência comum. Operamos como seu braço direito de Growth.
                        Preencha o formulário para solicitarmos um Diagnóstico Gratuito da sua operação e indicarmos onde você está perdendo dinheiro.
                    </p>

                    <ul className="space-y-4 mb-4">
                        {[
                            "Auditoria de campanhas e arquitetura de dados",
                            "Mapeamento do Funil Comercial",
                            "Projeção de Melhorias de CRO"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-vyr-text-muted">
                                <CheckCircle2 className="w-5 h-5 text-vyr-olive-light mr-3 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form Container */}
                <div className="lg:w-1/2 bg-vyr-surface border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
                    {/* Progress Bar */}
                    {!isSuccess && (
                        <div className="w-full bg-vyr-darker h-2 rounded-full mb-8 overflow-hidden">
                            <div
                                className="bg-vyr-wine h-full transition-all duration-500 rounded-full"
                                style={{ width: `${(step / 3) * 100}%` }}
                            />
                        </div>
                    )}

                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                            <div className="w-20 h-20 rounded-full bg-vyr-olive/10 flex items-center justify-center mb-4">
                                <CheckCircle2 className="w-10 h-10 text-vyr-olive-light" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Solicitação Recebida!</h3>
                            <p className="text-vyr-text-muted text-balance">
                                Nossos arquitetos de receita estão analisando seus dados. Você receberá um contato no WhatsApp em breve.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="space-y-6">

                            {/* Step 1: Low Friction */}
                            <div className={`space-y-6 transition-all duration-300 ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                <h3 className="text-xl font-semibold text-white mb-2">1. Dados Básicos</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-vyr-text-muted mb-1">Seu Nome</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 w-5 h-5 text-vyr-text-muted/50" />
                                            <input
                                                required={step === 1}
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-vyr-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-vyr-wine-light transition-colors"
                                                placeholder="João Silva"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-vyr-text-muted mb-1">Empresa</label>
                                        <div className="relative">
                                            <Building className="absolute left-3 top-3 w-5 h-5 text-vyr-text-muted/50" />
                                            <input
                                                required={step === 1}
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-vyr-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-vyr-wine-light transition-colors"
                                                placeholder="Sua Empresa Ltda"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Medium Friction */}
                            <div className={`space-y-6 transition-all duration-300 ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                <h3 className="text-xl font-semibold text-white mb-2">2. Contato Profissional</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-vyr-text-muted mb-1">E-mail Corporativo</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 w-5 h-5 text-vyr-text-muted/50" />
                                            <input
                                                required={step === 2}
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-vyr-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-vyr-wine-light transition-colors"
                                                placeholder="nome@empresa.com.br"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-vyr-text-muted mb-1">WhatsApp (com DDD)</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 w-5 h-5 text-vyr-text-muted/50" />
                                            <input
                                                required={step === 2}
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-vyr-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-vyr-wine-light transition-colors"
                                                placeholder="(11) 99999-9999"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: High Friction */}
                            <div className={`space-y-6 transition-all duration-300 ${step === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                <h3 className="text-xl font-semibold text-white mb-2">3. Qualificação</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-vyr-text-muted mb-1">Faturamento Mensal</label>
                                        <div className="relative">
                                            <BarChart3 className="absolute left-3 top-3 w-5 h-5 text-vyr-text-muted/50" />
                                            <select
                                                required={step === 3}
                                                name="revenue"
                                                value={formData.revenue}
                                                onChange={handleChange}
                                                className="w-full bg-vyr-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-vyr-wine-light transition-colors appearance-none"
                                            >
                                                <option value="" disabled>Selecione uma faixa...</option>
                                                <option value="Até 30k">Até R$ 30.000</option>
                                                <option value="30k a 100k">R$ 30.000 a R$ 100.000</option>
                                                <option value="100k a 400k">R$ 100.000 a R$ 400.000</option>
                                                <option value="Mais de 400k">Mais de R$ 400.000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-vyr-text-muted mb-1">Segmento</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-3 w-5 h-5 text-vyr-text-muted/50" />
                                            <select
                                                required={step === 3}
                                                name="segment"
                                                value={formData.segment}
                                                onChange={handleChange}
                                                className="w-full bg-vyr-dark border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-vyr-wine-light transition-colors appearance-none"
                                            >
                                                <option value="" disabled>Selecione seu segmento...</option>
                                                <option value="Tecnologia">Tecnologia & SaaS</option>
                                                <option value="Industria">Indústria Corporativa</option>
                                                <option value="Servicos">Serviços B2B</option>
                                                <option value="Locacao">Locação & Varejo Premium</option>
                                                <option value="Outros">Outros</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between pt-4 mt-8 border-t border-white/5">
                                {step > 1 ? (
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="px-6 py-3 rounded-lg text-vyr-text-muted hover:text-white transition-colors"
                                    >
                                        Voltar
                                    </button>
                                ) : <div />}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-3 rounded-lg bg-vyr-wine hover:bg-vyr-wine-light text-white font-medium transition-all shadow-[0_0_15px_rgba(93,36,60,0.4)] flex items-center disabled:opacity-50"
                                >
                                    {isSubmitting ? "Enviando..." : step === 3 ? "Finalizar" : "Continuar"}
                                    {!isSubmitting && step < 3 && <ArrowRight className="w-4 h-4 ml-2" />}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
