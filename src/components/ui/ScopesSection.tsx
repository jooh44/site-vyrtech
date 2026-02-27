"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MonitorSmartphone, Rocket, Bot, Database, Palette, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ScopesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".scope-card",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                lazy: true,
                scrollTrigger: {
                    trigger: ".scopes-container",
                    start: "top 75%",
                }
            }
        );
    }, { scope: containerRef });

    const scopes = [
        {
            icon: MonitorSmartphone,
            title: "AMBIENTES DIGITAIS",
            desc: "Desenvolvemos infraestruturas de alta conversão: Sites institucionais, Lojas Virtuais escaláveis e Landing Pages otimizadas."
        },
        {
            icon: Rocket,
            title: "TRÁFEGO DE PERFORMANCE",
            desc: "Gestão avançada de anúncios no Google Ads e Meta Ads cruzando intenção térmica com inteligência de dados."
        },
        {
            icon: Bot,
            title: "INTELIGÊNCIA ARTIFICIAL",
            desc: "Implementação de Agentes de IA e automações que operam como SDRs qualificados, escalando seu atendimento 24/7."
        },
        {
            icon: Database,
            title: "CRM E DADOS",
            desc: "Estruturação de funis no CRM e criação de Dashboards executivos para você ter o controle absoluto da sua operação."
        },
        {
            icon: Palette,
            title: "IDENTIDADE VISUAL",
            desc: "Branding focado em posicionamento premium. Elevamos a percepção de valor da sua marca aos olhos do mercado."
        },
        {
            icon: Briefcase,
            title: "CONSULTORIA ESTRATÉGICA",
            desc: "Mapeamento completo do seu funil comercial, identificação de gargalos e plano de ação tático para crescimento."
        }
    ];

    return (
        <section id="servicos" ref={containerRef} className="scopes-container pt-32 pb-24 md:pt-40 md:pb-32 relative border-t-[1px] border-zinc-900 overflow-hidden bg-[#050506]">
            {/* Custom CSS Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes tech-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes tech-spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .group:hover .animate-tech-spin { animation: tech-spin 20s linear infinite; }
                .group:hover .animate-tech-spin-reverse { animation: tech-spin-reverse 15s linear infinite; }
                `
            }} />

            {/* Background Image - Fixed Parallax Effect */}
            <div
                className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat bg-fixed grayscale-[0.6] opacity-30"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')",
                }}
            />

            {/* Wine Overlay */}
            <div className="absolute inset-0 z-0 bg-vyr-wine/40 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050506] via-[#050506]/80 to-[#050506]/50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-left md:text-center max-w-4xl mx-auto mb-16 md:mb-24 space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase drop-shadow-lg">
                        OS 6 PILARES DA <br className="hidden md:block" /> ASSESSORIA <span className="italic font-light text-[#FFC5E1]">VYRTECH.</span>
                    </h2>
                    <p className="text-lg text-gray-300 font-light mt-4 max-w-2xl mx-auto drop-shadow-md text-left md:text-center">
                        Cobertura completa e multidisciplinar para destravar o teto de crescimento da sua empresa, ponta a ponta.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl relative z-10">
                    {scopes.map((scope, idx) => (
                        <div key={idx} className="scope-card bg-[#050506]/90 hover:bg-[#050506]/60 p-10 transition-all duration-500 group relative overflow-hidden">
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1C050F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* CSS Animated Tech Shapes (Visible and glowing on hover) */}
                            <div className="absolute top-4 right-4 w-28 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,197,225,0.4)]">
                                    <circle cx="50" cy="50" r="40" stroke="#FFC5E1" strokeWidth="0.5" strokeDasharray="4 4" fill="none" className="animate-tech-spin origin-center" />
                                    <circle cx="50" cy="50" r="25" stroke="#6D2749" strokeWidth="1" strokeDasharray="2 6" fill="none" className="animate-tech-spin-reverse origin-center" />
                                    <circle cx="50" cy="50" r="4" fill="#FFC5E1" className="animate-pulse origin-center" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <scope.icon className="w-10 h-10 text-[#FFC5E1] mb-8 group-hover:-translate-y-2 transition-transform duration-300" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{scope.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {scope.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
