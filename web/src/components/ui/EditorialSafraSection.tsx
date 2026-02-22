"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Target, Sprout, Activity, TrendingUp } from "lucide-react";

export function EditorialSafraSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    const steps = [
        {
            letter: "S",
            title: "Solo",
            icon: Search,
            desc: "Diagnóstico profundo e análise de mercado corporativo. Entendemos o seu terreno de negócios antes de plantar qualquer investimento."
        },
        {
            letter: "A",
            title: "Alvo",
            icon: Target,
            desc: "Definição de metas SMART. KPIs claros e alinhados com a receita estrutural."
        },
        {
            letter: "F",
            title: "Fertilização",
            icon: Sprout,
            desc: "Execução estratégica e arquitetura de dados via automações precisas."
        },
        {
            letter: "R",
            title: "Rastreamento",
            icon: Activity,
            desc: "Monitoramento analítico em tempo real. Visibilidade total ponta a ponta."
        },
        {
            letter: "A",
            title: "Aprimoramento",
            icon: TrendingUp,
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
                        { scale: 0, backgroundColor: "#FFF" },
                        {
                            scale: 1,
                            backgroundColor: "#FFC5E1", // Pink active state
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

                // Animate the step icon pop-in
                const stepIcon = card.querySelector('.step-icon');
                if (stepIcon) {
                    gsap.fromTo(stepIcon,
                        { scale: 0, opacity: 0, rotate: -15 },
                        {
                            scale: 1,
                            opacity: 1,
                            rotate: 0,
                            duration: 0.7,
                            delay: 0.2,
                            ease: "back.out(2)",
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
        <section id="metodologia" ref={sectionRef} className="py-24 bg-white relative z-10 overflow-hidden border-t-2 border-black">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">

                <div className="text-center mt-8 mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4 uppercase">
                        A Metodologia{" "}
                        <span className="inline-flex gap-1 text-[#6D2749]">
                            <span>S.</span>
                            <span>A.</span>
                            <span>F.</span>
                            <span>R.</span>
                            <span>A.</span>
                        </span>
                    </h2>
                    <p className="text-gray-600 mt-2 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Engenharia de conversão documentada em 5 etapas cíclicas, focada na construção de ecossistemas previsíveis.
                    </p>
                </div>

                {/* Creative Timeline Layout */}
                <div ref={containerRef} className="relative flex flex-col gap-12 md:gap-16">

                    {/* Background faint line */}
                    <div className="absolute left-[27px] md:left-12 top-0 bottom-0 w-[2px] bg-[#6D2749]/10" />

                    {/* Glowing active line */}
                    <div
                        ref={lineRef}
                        className="absolute left-[27px] md:left-12 top-0 w-[2px] bg-gradient-to-b from-[#6D2749] to-[#FFC5E1] origin-top z-10"
                    />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-8 md:gap-16 pl-14 md:pl-32 group">

                            {/* Timeline Node - Adjusted exactly perfectly to the 2px line */}
                            <div className="absolute left-[12px] md:left-[33px] top-6 w-8 h-8 border-4 border-[#6D2749] bg-white z-20 timeline-node flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#6D2749]" />
                            </div>

                            {/* Timeline Item - Pure Typography Layout */}
                            <div className="timeline-card flex-1 relative py-6 md:py-8 transition-transform duration-500 hover:-translate-y-1">
                                <div className="relative z-10 bg-[#F9F9F9] p-8 border border-black group-hover:bg-[#FFEBF4] transition-colors">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight flex flex-wrap items-baseline gap-3 md:gap-4 uppercase">
                                        <span className="type-letter inline-block text-4xl sm:text-5xl md:text-6xl font-black text-[#6D2749]">
                                            {step.letter}
                                        </span>
                                        <span className="step-icon text-[#FFC5E1] p-1.5 flex items-center justify-center">
                                            <step.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                                        </span>
                                        <span className="break-words">{step.title}</span>
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light mt-4">
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
