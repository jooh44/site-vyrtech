"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sprout, Target, Droplets, Radar, Leaf } from "lucide-react";

export function SafraSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    const steps = [
        {
            letter: "S",
            title: "Solo",
            desc: "Diagnóstico profundo e análise de mercado corporativo. Entendemos o seu terreno de negócios antes de plantar qualquer investimento.",
            icon: <Sprout className="safra-icon w-10 h-10 text-vyr-wine-light mb-4" />
        },
        {
            letter: "A",
            title: "Alvo",
            desc: "Definição de metas SMART. KPIs claros e alinhados com a receita estrutural.",
            icon: <Target className="safra-icon w-10 h-10 text-vyr-wine-light mb-4" />
        },
        {
            letter: "F",
            title: "Fertilização",
            desc: "Execução estratégica e arquitetura de dados via automações precisas.",
            icon: <Droplets className="safra-icon w-10 h-10 text-vyr-wine-light mb-4" />
        },
        {
            letter: "R",
            title: "Rastreamento",
            desc: "Monitoramento analítico em tempo real. Visibilidade total ponta a ponta.",
            icon: <Radar className="safra-icon w-10 h-10 text-vyr-wine-light mb-4" />
        },
        {
            letter: "A",
            title: "Aprimoramento",
            desc: "Testes iterativos e evolução usando metodologias CRO avançadas. Escalamos através de dados.",
            icon: <Leaf className="safra-icon w-10 h-10 text-vyr-wine-light mb-4" />
        }
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Animate the vertical line drawing down
            gsap.fromTo(lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1, // Smooth scrubbing
                    }
                }
            );

            // Animate each timeline text entry as it comes into view
            const cards = gsap.utils.toArray<HTMLElement>('.timeline-card');
            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    { x: 30, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Animate the node ping (less pink, more wine/cerise)
                const node = card.parentElement?.querySelector('.timeline-node');
                if (node) {
                    gsap.fromTo(node,
                        { scale: 0, backgroundColor: "#3F1728" },
                        {
                            scale: 1,
                            backgroundColor: "#9E2A4A", // Darker wine red instead of #ff1744 neon pink
                            duration: 0.5,
                            ease: "back.out(2)",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 60%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }

                // Animate the agricultural icon scale/fade
                const icon = card.querySelector('.safra-icon');
                if (icon) {
                    gsap.fromTo(icon,
                        { scale: 0, opacity: 0, rotation: -30 },
                        {
                            scale: 1,
                            opacity: 1,
                            rotation: 0,
                            duration: 0.7,
                            ease: "back.out(1.5)",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 60%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="metodologia" ref={sectionRef} className="py-24 bg-transparent relative z-10 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">

                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-vyr-text tracking-tight mb-4">
                        A Metodologia{" "}
                        <span className="inline-flex gap-1">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-vyr-wine-light">S.</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-vyr-wine-light">A.</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-vyr-wine-light">F.</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-vyr-wine-light">R.</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-vyr-wine-light">A.</span>
                        </span>
                    </h2>
                    <p className="text-vyr-text-muted mt-2 text-lg md:text-xl max-w-2xl mx-auto">
                        Engenharia de conversão documentada em 5 etapas cíclicas, focada na construção de ecossistemas previsíveis.
                    </p>
                </div>

                {/* Creative Timeline Layout */}
                <div ref={containerRef} className="relative flex flex-col gap-12 md:gap-16">

                    {/* Background faint line */}
                    <div className="absolute left-[27px] md:left-12 top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />

                    {/* Glowing active line */}
                    <div
                        ref={lineRef}
                        className="absolute left-[27px] md:left-12 top-0 w-[2px] bg-gradient-to-b from-vyr-wine-light to-[#ff1744] rounded-full shadow-[0_0_15px_rgba(255,23,68,0.5)] origin-top z-10"
                    />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-8 md:gap-16 pl-14 md:pl-32 group">

                            {/* Timeline Node - Adjusted exactly perfectly to the 2px line */}
                            <div className="absolute left-[12px] md:left-[33px] top-6 w-8 h-8 rounded-full border-4 border-[#050506] bg-vyr-wine-dark z-20 timeline-node flex items-center justify-center shadow-[0_0_15px_rgba(122,51,81,0.5)]">
                                <div className="w-2 h-2 rounded-full bg-white/80" />
                            </div>

                            {/* Timeline Card - Using lighter dark-wine background as requested */}
                            <div className="timeline-card flex-1 relative py-8 px-8 md:py-10 md:px-10 rounded-3xl bg-vyr-wine-dark/40 border border-vyr-wine-light/10 group-hover:-translate-y-1 transition-transform duration-500 overflow-hidden">
                                {/* Giant faded background letter */}
                                <div className="absolute -left-4 -top-8 text-[12rem] md:text-[15rem] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-vyr-wine/[0.06] transition-colors duration-500 leading-none">
                                    {step.letter}
                                </div>

                                <div className="relative z-10">
                                    {step.icon}
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight flex items-center gap-4">
                                        <span className="text-vyr-wine-light">{`0${idx + 1}.`}</span> {step.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium max-w-2xl">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
