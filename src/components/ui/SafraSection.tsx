"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TechH2, TechBody } from "@/components/ui/TechTypography";
import { BenefitCard } from "@/components/ui/BenefitCard";

gsap.registerPlugin(ScrollTrigger);

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
            desc: "Definição de objetivos claros e alinhados com a realidade atual da empresa"
        },
        {
            letter: "F",
            title: "Fertilização",
            desc: "Execução estratégica com foco em alcançar os objetivos financeiros da empresa"
        },
        {
            letter: "R",
            title: "Rastreamento",
            desc: "Monitoramento analítico e acompanhamento constante das métricas que movem o ponteiro"
        },
        {
            letter: "A",
            title: "Aprimoramento",
            desc: "Análise dos resultados e melhoria contínua visando maximizar resultados e escalando através de ações guiadas"
        }
    ];

    useGSAP(() => {
        // Animate the vertical line drawing down
        gsap.fromTo(lineRef.current,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                lazy: true,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1, // Smooth scrubbing
                }
            }
        );

        // Animate each timeline text entry with staggered children
        const cards = gsap.utils.toArray<HTMLElement>('.timeline-card');

        cards.forEach((card) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                defaults: { lazy: true }
            });

            // 1. Reveal the card container itself
            tl.fromTo(card,
                { x: 30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );

            // 2. Animate the node ping simultaneously
            const node = card.parentElement?.querySelector('.timeline-node');
            if (node) {
                tl.fromTo(node,
                    { scale: 0 },
                    {
                        scale: 1,
                        duration: 0.5,
                        ease: "back.out(2)"
                    },
                    "<0.2" // Start slightly after the card begins revealing
                );
            }

            // ScrollTrigger for "Active" glowing state based on center position
            const targets: Element[] = [];
            const groupEl = card.querySelector('.group');
            if (groupEl) targets.push(groupEl);
            if (node) targets.push(node);

            ScrollTrigger.create({
                trigger: card,
                start: "top 60%",      // triggers when card top enters 60% of screen height
                end: "bottom 40%",     // ends when card bottom leaves 40% of screen height
                toggleClass: {
                    targets: targets,
                    className: "is-active"
                }
            });

            // 3. Stagger reveal the internal content elements (High-Fidelity organic reveal)
            const internalElements = card.querySelectorAll('.benefit-letter, .benefit-icon, .benefit-title, .benefit-desc');
            if (internalElements.length > 0) {
                tl.fromTo(internalElements,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out"
                    },
                    "<0.1" // Overlap with previous animations
                );
            }
        });

    }, { scope: sectionRef });

    return (
        <section id="metodologia" ref={sectionRef} className="py-24 bg-transparent relative z-10 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">

                <div className="text-left md:text-center mb-16 md:mb-24">
                    <TechH2 className="mb-4 text-left md:text-center">
                        A Metodologia{" "}
                        <span className="inline-flex gap-1 text-[#D5E8B3]">
                            <span>S.</span>
                            <span>A.</span>
                            <span>F.</span>
                            <span>R.</span>
                            <span>A.</span>
                        </span>
                    </TechH2>
                    <TechBody className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-left md:text-center">
                        Engenharia de conversão documentada em 5 etapas cíclicas, focada na construção de ecossistemas previsíveis.
                    </TechBody>
                </div>

                {/* Creative Timeline Layout */}
                <div ref={containerRef} className="relative flex flex-col gap-12 md:gap-16">

                    {/* Background faint line */}
                    <div className="absolute left-[27px] md:left-12 top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />

                    {/* Glowing active line */}
                    <div
                        ref={lineRef}
                        className="absolute left-[27px] md:left-12 top-0 w-[2px] bg-gradient-to-b from-[#9DB479] to-[#D5E8B3] rounded-full shadow-[0_0_15px_rgba(213,232,179,0.5)] origin-top z-10"
                    />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-start gap-8 md:gap-16 pl-14 md:pl-32 group">

                            {/* Timeline Node - Adjusted exactly perfectly to the 2px line */}
                            <div className="absolute left-[12px] md:left-[33px] top-[56px] -translate-y-1/2 w-8 h-8 rounded-full border-4 border-[#050506] bg-[#0C0C0E] z-20 timeline-node flex items-center justify-center shadow-[0_0_15px_rgba(213,232,179,0.3)] transition-all duration-500 [&.is-active]:bg-[#9DB479] [&.is-active]:shadow-[0_0_20px_rgba(213,232,179,0.5)]">
                                <div className="w-2 h-2 rounded-full bg-white/80" />
                            </div>

                            {/* Timeline Item - Using BenefitCard */}
                            <div className="timeline-card flex-1 relative transition-transform duration-500 hover:-translate-y-1">
                                <BenefitCard
                                    theme="tech"
                                    letter={step.letter}
                                    title={step.title}
                                    description={step.desc}
                                />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
