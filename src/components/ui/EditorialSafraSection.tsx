"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Search, Target, Sprout, Activity, TrendingUp } from "lucide-react";
import { BenefitCard } from "@/components/ui/BenefitCard";

gsap.registerPlugin(ScrollTrigger);

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
            desc: "Definição de objetivos claros e alinhados com a realidade atual da empresa"
        },
        {
            letter: "F",
            title: "Fertilização",
            icon: Sprout,
            desc: "Execução estratégica com foco em alcançar os objetivos financeiros da empresa"
        },
        {
            letter: "R",
            title: "Rastreamento",
            icon: Activity,
            desc: "Monitoramento analítico e acompanhamento constante das métricas que movem o ponteiro"
        },
        {
            letter: "A",
            title: "Aprimoramento",
            icon: TrendingUp,
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
                    { scale: 0, backgroundColor: "#FFF" },
                    {
                        scale: 1,
                        backgroundColor: "#FFC5E1", // Pink active state
                        duration: 0.5,
                        ease: "back.out(2)"
                    },
                    "<0.2" // Start slightly after the card begins revealing
                );
            }

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
                            <div className="absolute left-[12px] md:left-[33px] top-[56px] -translate-y-1/2 w-8 h-8 border-4 border-[#6D2749] bg-white z-20 timeline-node flex items-center justify-center">
                                <div className="w-2 h-2 bg-[#6D2749]" />
                            </div>

                            {/* Timeline Item - Using BenefitCard */}
                            <div className="timeline-card flex-1 relative transition-transform duration-500 hover:-translate-y-1">
                                <BenefitCard
                                    theme="editorial"
                                    letter={step.letter}
                                    title={step.title}
                                    description={step.desc}
                                    icon={<step.icon className="w-6 h-6 text-[#6D2749]" strokeWidth={1.5} />}
                                />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
