"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Building, User, Mail, Phone, BarChart3, Briefcase } from "lucide-react";

export function EditorialConversionForm() {
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
        <section className="py-24 md:py-32 bg-[#F9F9F9] relative border-t-2 border-black" id="diagnostico">

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 relative z-10">

                {/* Text Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight text-balance uppercase">
                        Pronto para transformar <span className="text-[#6D2749] italic font-serif">dados em receita?</span>
                    </h2>
                    <p className="text-lg text-gray-700 font-light mb-8 leading-relaxed text-balance">
                        Não somos uma agência comum. Operamos como seu braço direito de Growth.
                        Preencha o formulário para solicitarmos um Diagnóstico Gratuito da sua operação e indicarmos onde você está perdendo dinheiro.
                    </p>

                    <ul className="space-y-4 mb-4 font-light">
                        {[
                            "Auditoria de campanhas e arquitetura de dados",
                            "Mapeamento do Funil Comercial",
                            "Projeção de Melhorias de CRO"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[#6D2749] mr-3 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form Container - Editorial Style */}
                <div className="lg:w-1/2 bg-white border border-black p-8 md:p-12 relative overflow-hidden group transition-all duration-500 hover:border-[#6D2749] shadow-sm">
                    {/* Progress Bar */}
                    {!isSuccess && (
                        <div className="w-full bg-gray-100 border border-gray-300 h-1 mb-8 overflow-hidden relative">
                            <div
                                className="bg-[#6D2749] h-full transition-all duration-500"
                                style={{ width: `${(step / 3) * 100}%` }}
                            />
                        </div>
                    )}

                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                            <div className="w-20 h-20 bg-[#FFEBF4] flex items-center justify-center mb-4">
                                <CheckCircle2 className="w-10 h-10 text-[#6D2749]" />
                            </div>
                            <h3 className="text-2xl font-bold text-black uppercase tracking-widest">Solicitação Recebida!</h3>
                            <p className="text-gray-600 font-light text-balance mt-4">
                                Nossos arquitetos de receita estão analisando seus dados. Você receberá um contato no WhatsApp em breve.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }} className="space-y-6">

                            {/* Step 1: Low Friction */}
                            <div className={`space-y-6 transition-all duration-300 ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                <h3 className="text-xl font-bold text-black mb-2 uppercase tracking-widest text-sm">1. Dados Básicos</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Seu Nome</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 z-10" />
                                            <input
                                                required={step === 1}
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-gray-300 rounded-none pl-10 pr-4 py-3 text-black focus:outline-none focus:border-[#6D2749] transition-colors relative z-20 placeholder-gray-400 font-light"
                                                placeholder="João Silva"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Empresa</label>
                                        <div className="relative">
                                            <Building className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 z-10" />
                                            <input
                                                required={step === 1}
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-gray-300 rounded-none pl-10 pr-4 py-3 text-black focus:outline-none focus:border-[#6D2749] transition-colors relative z-20 placeholder-gray-400 font-light"
                                                placeholder="Sua Empresa Ltda"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Medium Friction */}
                            <div className={`space-y-6 transition-all duration-300 ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                <h3 className="text-xl font-bold text-black mb-2 uppercase tracking-widest text-sm">2. Contato Profissional</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">E-mail Corporativo</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 z-10" />
                                            <input
                                                required={step === 2}
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-gray-300 rounded-none pl-10 pr-4 py-3 text-black focus:outline-none focus:border-[#6D2749] transition-colors relative z-20 placeholder-gray-400 font-light"
                                                placeholder="nome@empresa.com.br"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">WhatsApp (com DDD)</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 z-10" />
                                            <input
                                                required={step === 2}
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-gray-300 rounded-none pl-10 pr-4 py-3 text-black focus:outline-none focus:border-[#6D2749] transition-colors relative z-20 placeholder-gray-400 font-light"
                                                placeholder="(11) 99999-9999"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: High Friction */}
                            <div className={`space-y-6 transition-all duration-300 ${step === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                                <h3 className="text-xl font-bold text-black mb-2 uppercase tracking-widest text-sm">3. Qualificação</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Faturamento Mensal</label>
                                        <div className="relative">
                                            <BarChart3 className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 z-10" />
                                            <select
                                                required={step === 3}
                                                name="revenue"
                                                value={formData.revenue}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-gray-300 rounded-none pl-10 pr-4 py-3 text-black focus:outline-none focus:border-[#6D2749] transition-colors appearance-none relative z-20 font-light"
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
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Segmento</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 z-10" />
                                            <select
                                                required={step === 3}
                                                name="segment"
                                                value={formData.segment}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border border-gray-300 rounded-none pl-10 pr-4 py-3 text-black focus:outline-none focus:border-[#6D2749] transition-colors appearance-none relative z-20 font-light"
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
                            <div className="flex justify-between pt-4 mt-8 border-t border-gray-200">
                                {step > 1 ? (
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="px-6 py-3 rounded-none text-gray-500 hover:text-black hover:bg-gray-100 transition-colors uppercase tracking-widest text-xs font-bold"
                                    >
                                        Voltar
                                    </button>
                                ) : <div />}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-3 rounded-none bg-[#6D2749] hover:bg-[#FFC5E1] hover:text-[#6D2749] text-white uppercase tracking-widest text-xs font-bold transition-all flex items-center disabled:opacity-50 group"
                                >
                                    {isSubmitting ? "Enviando..." : step === 3 ? "Finalizar" : "Continuar"}
                                    {!isSubmitting && step < 3 && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
