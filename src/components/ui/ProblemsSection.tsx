"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingDown, Database, Clock, LineChart, FileBarChart, EyeOff } from "lucide-react";
import { TechH2, TechBody } from "@/components/ui/TechTypography";

export function ProblemsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const problems = [
        {
            id: "ERR_01_MID",
            title: "Desperdício em Mídia",
            desc: "Investimentos mal direcionados que não geram o retorno esperado em pipeline.",
            icon: <TrendingDown className="w-6 h-6 text-vyr-olive-light" />
        },
        {
            id: "ERR_02_DAT",
            title: "Dados Desorganizados",
            desc: "Gestão ineficiente de leads corporativos, resultando em oportunidades perdidas.",
            icon: <Database className="w-6 h-6 text-vyr-olive-light" />
        },
        {
            id: "ERR_03_OPR",
            title: "Tempo em Retrabalho",
            desc: "Informações fragmentadas e tarefas que poderiam ser 100% automatizadas.",
            icon: <Clock className="w-6 h-6 text-vyr-olive-light" />
        },
        {
            id: "ERR_04_PRV",
            title: "Falta de Previsibilidade",
            desc: "Dificuldade em prever resultados estruturais e planejar ações com dados reais.",
            icon: <LineChart className="w-6 h-6 text-vyr-olive-light" />
        },
        {
            id: "ERR_05_REP",
            title: "Ausência de Relatórios",
            desc: "Falta de métricas exatas que demonstrem o real impacto no seu ROI final.",
            icon: <FileBarChart className="w-6 h-6 text-vyr-olive-light" />
        },
        {
            id: "ERR_06_VIS",
            title: "Invisibilidade Digital",
            desc: "Baixa autoridade online que dificulta severamente a conversão de clientes atuantes.",
            icon: <EyeOff className="w-6 h-6 text-vyr-olive-light" />
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".problem-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            gsap.fromTo(".section-header",
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-vyr-dark relative overflow-hidden">

            {/* Neon section divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vyr-wine to-transparent opacity-50 shadow-[0_0_10px_rgba(109,39,73,0.8)] z-20" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6D2749] to-transparent opacity-30 shadow-[0_0_20px_rgba(109,39,73,1)] z-20" />

            {/* Area/Line Graph SVG Background for Entrepreneurial Growth */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <svg className="w-full h-full opacity-40 mix-blend-screen" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="graph-gradient-1" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#2D111E" stopOpacity="0" />
                            <stop offset="30%" stopColor="#4A1731" stopOpacity="0.8" />
                            <stop offset="70%" stopColor="#6D2749" stopOpacity="1" />
                            <stop offset="100%" stopColor="#6D2749" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="graph-gradient-2" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#6D2749" stopOpacity="0" />
                            <stop offset="40%" stopColor="#6D2749" stopOpacity="0.5" />
                            <stop offset="80%" stopColor="#4A1731" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#2D111E" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="fill-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6D2749" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="#0C0C0E" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* X and Y Axis lines faint */}
                    <line x1="100" y1="0" x2="100" y2="800" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <line x1="0" y1="700" x2="1440" y2="700" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="4 4" />

                    {/* Primary Growth Area & Line */}
                    <path d="M 0 800 L 0 650 C 300 650, 400 450, 700 400 C 1000 350, 1100 150, 1440 100 L 1440 800 Z" fill="url(#fill-gradient)" />
                    <path d="M 0 650 C 300 650, 400 450, 700 400 C 1000 350, 1100 150, 1440 100" fill="none" stroke="url(#graph-gradient-1)" strokeWidth="3" />

                    {/* Secondary Growth Line */}
                    <path d="M 0 750 C 400 700, 500 550, 800 450 C 1100 350, 1200 250, 1440 200" fill="none" stroke="url(#graph-gradient-2)" strokeWidth="1.5" strokeDasharray="6 6" />

                    {/* Data Points / Nodes */}
                    <circle cx="700" cy="400" r="4" fill="#0C0C0E" stroke="#6D2749" strokeWidth="2" />
                    <circle cx="1100" cy="150" r="5" fill="#0C0C0E" stroke="#6D2749" strokeWidth="2" />
                </svg>

                {/* Subtle Glows */}
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#6D2749]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-vyr-dark to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="section-header text-left md:text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <TechH2 className="text-balance text-left md:text-center">
                        Você não tem um problema de tráfego. Você tem um problema de <span className="text-vyr-wine-light">Arquitetura</span>.
                    </TechH2>
                    <TechBody className="text-lg text-balance text-left md:text-center">
                        O primeiro passo para o crescimento escalável é eliminar pontos de perda de receita ao longo do funil comercial. E operar como seu braço direito de crescimento.
                    </TechBody>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((prob, idx) => (
                        <div
                            key={idx}
                            className="problem-card relative bg-transparent backdrop-blur-md border border-[#4A1731]/40 p-8 rounded-vyr-fluid hover:bg-transparent hover:border-vyr-wine transition-all duration-500 group overflow-hidden"
                        >
                            {/* Abstract Tech Grid inside Card */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Glowing Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-vyr-wine to-[#6D2749] group-hover:w-full transition-all duration-700 ease-out" />

                            <div className="flex justify-between items-start mb-6 relative z-10 w-full">
                                <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center border border-[#4A1731]/50 group-hover:border-[#6D2749] transition-all duration-500">
                                    {prob.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-vyr-text mb-3 group-hover:text-white transition-colors relative z-10">
                                {prob.title}
                            </h3>
                            <p className="text-vyr-text-muted text-sm leading-relaxed relative z-10">
                                {prob.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
