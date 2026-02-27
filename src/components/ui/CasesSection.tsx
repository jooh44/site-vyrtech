"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { TechH2 } from "@/components/ui/TechTypography";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const placeholders = [
    {
        id: 1,
        client: "Indústria Global",
        metric: "+215%",
        label: "ROAS em 90 dias",
        icon: <TrendingUp className="w-6 h-6 text-vyr-olive-light" />,
        desc: "Máquina de vendas automatizada substituindo a velha captação orgânica."
    },
    {
        id: 2,
        client: "SaaS Enterprise",
        metric: "12k",
        label: "Leads Qualificados M/M",
        icon: <Users className="w-6 h-6 text-vyr-olive-light" />,
        desc: "Expansão internacional acelerada com base em análise de dados em tempo real."
    },
    {
        id: 3,
        client: "Moda Premium",
        metric: "R$ 4M",
        label: "Faturamento Incremental",
        icon: <BarChart3 className="w-6 h-6 text-vyr-olive-light" />,
        desc: "Ecossistema de alta precisão desenhado para multiplicar o lucro das campanhas."
    }
];

export function CasesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.case-card');

        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-[#050506] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-vyr-wine-dark blur-[150px] rounded-full opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <TechH2>
                            Arquiteturas que geram <span className="text-[#D5E8B3]">Resultados.</span>
                        </TechH2>
                    </div>
                </div>

                {/* Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {placeholders.map((item) => (
                        <div key={item.id} className="case-card group relative p-px rounded-vyr-fluid bg-transparent overflow-hidden transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1C050F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative h-full glass-panel rounded-vyr-fluid p-8 md:p-10 flex flex-col justify-between group-hover:bg-[#6D2749]/10 group-hover:border-[#6D2749] overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center border border-[#4A1731]/50 group-hover:border-[#6D2749] transition-all duration-500">
                                            {item.icon}
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-transparent text-xs text-vyr-text-muted font-medium border border-[#4A1731]/50 group-hover:border-[#6D2749] group-hover:text-white transition-colors duration-500">
                                            {item.client}
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="text-5xl font-bold tracking-tighter text-white mb-2">{item.metric}</div>
                                        <div className="text-sm text-white font-bold uppercase tracking-wider transition-all duration-500">{item.label}</div>
                                    </div>

                                    <p className="text-vyr-text-muted mt-6 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-white/50 group-hover:text-white transition-colors cursor-not-allowed">
                                    <span className="text-sm font-medium">Quero construir meu case</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
