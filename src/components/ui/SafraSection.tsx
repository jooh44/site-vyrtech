"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SafraSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    const steps = [
        {
            letter: "S",
            title: "Solo",
            desc: "Diagnóstico profundo e análise de mercado corporativo. Entendemos o seu terreno de negócios antes de plantar qualquer investimento."
        },
        {
            letter: "A",
            title: "Alvo",
            desc: "Definição de metas SMART. KPIs claros e alinhados com a receita estrutural."
        },
        {
            letter: "F",
            title: "Fertilização",
            desc: "Execução estratégica e arquitetura de dados via automações precisas."
        },
        {
            letter: "R",
            title: "Rastreamento",
            desc: "Monitoramento analítico em tempo real. Visibilidade total ponta a ponta."
        },
        {
            letter: "A",
            title: "Aprimoramento",
            desc: "Testes iterativos e evolução usando metodologias CRO avançadas. Escalamos através de dados."
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
                        { scale: 0, backgroundColor: "#0C0C0E" },
                        {
                            scale: 1,
                            backgroundColor: "#D5E8B3", // Olive green instead of wine
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

                // Animate the large typographic letter
                const typeLetter = card.querySelector('.type-letter');
                if (typeLetter) {
                    gsap.fromTo(typeLetter,
                        { y: 20, opacity: 0, scale: 0.8 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "elastic.out(1, 0.5)",
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-[#6D2749]">S.</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-[#6D2749]">A.</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-[#6D2749]">F.</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-[#6D2749]">R.</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-[#6D2749]">A.</span>
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
                        className="absolute left-[27px] md:left-12 top-0 w-[2px] bg-gradient-to-b from-[#4A1731] to-[#6D2749] rounded-full shadow-[0_0_15px_rgba(109,39,73,0.5)] origin-top z-10"
                    />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-8 md:gap-16 pl-14 md:pl-32 group">

                            {/* Timeline Node - Adjusted exactly perfectly to the 2px line */}
                            <div className="absolute left-[12px] md:left-[33px] top-6 w-8 h-8 rounded-full border-4 border-[#050506] bg-[#0C0C0E] z-20 timeline-node flex items-center justify-center shadow-[0_0_15px_rgba(213,232,179,0.15)]">
                                <div className="w-2 h-2 rounded-full bg-white/80" />
                            </div>

                            {/* Timeline Item - Pure Typography Layout */}
                            <div className="timeline-card flex-1 relative py-6 md:py-8 transition-transform duration-500 hover:-translate-y-1">
                                <div className="relative z-10">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight flex flex-wrap items-baseline gap-3 md:gap-4">
                                        <span className="type-letter inline-block text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6D2749] drop-shadow-[0_0_15px_rgba(109,39,73,0.3)]">
                                            {step.letter}
                                        </span>
                                        <span className="text-[#6D2749] text-xl sm:text-2xl md:text-3xl">{`0${idx + 1}.`}</span>
                                        <span className="break-words">{step.title}</span>
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium max-w-2xl md:pl-[5.5rem]">
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
