"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PcbLinesBackground } from "@/components/ui/PcbLinesBackground";

export function Hero() {
    const textRef = useRef<HTMLDivElement>(null);
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["Responsabilidade.", "Sustentabilidade.", "Escalabilidade.", "Inovação Contínua."];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".hero-element",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2 }
            );
        }, textRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full min-h-[100svh] md:min-h-[90vh] flex items-center justify-center pt-10 md:pt-24 pb-10 md:pb-16 overflow-hidden bg-transparent">
            {/* Background strictly confined to Hero solving the global parallax issue */}
            <PcbLinesBackground />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                <div ref={textRef} className="w-full max-w-6xl flex flex-col items-center gap-6 sm:gap-8">

                    {/* User's Vyrtech Grape Logo with Animated Gradient Overlay */}
                    <div className="hero-element flex flex-col items-center justify-center hover:scale-105 transition-transform duration-500">
                        <div className="relative w-24 h-28 sm:w-28 sm:h-32 md:w-32 md:h-36 drop-shadow-[0_0_15px_rgba(93,36,60,0.4)]">
                            {/* Base Image */}
                            <Image
                                src="/vyrtech-uva.png"
                                alt="Vyrtech Icon"
                                fill
                                className="object-contain"
                                priority
                            />
                            {/* Animated Gradient Mask Overlay */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-[#4A1731] via-vyr-wine to-[#4A1731] bg-[length:200%_auto] animate-[gradient-x_6s_ease_infinite] mix-blend-overlay opacity-90"
                                style={{
                                    WebkitMaskImage: `url(/vyrtech-uva.png)`,
                                    WebkitMaskSize: "contain",
                                    WebkitMaskRepeat: "no-repeat",
                                    WebkitMaskPosition: "center",
                                    maskImage: `url(/vyrtech-uva.png)`,
                                    maskSize: "contain",
                                    maskRepeat: "no-repeat",
                                    maskPosition: "center"
                                }}
                            />
                        </div>
                        {/* Grotesk Font Text */}
                        <span className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-vyr-text-muted transition-colors uppercase mt-4 hover:text-white" style={{ fontFamily: '"Space Grotesk", "Clash Display", "Inter", "Helvetica Neue", Arial, sans-serif' }}>
                            Vyrtech
                        </span>
                    </div>

                    {/* Playground Concept: Glowing Gradient Headline */}
                    <h1 className="hero-element text-4xl sm:text-5xl md:text-5xl lg:text-[4.2rem] xl:text-[4.8rem] font-bold tracking-tight text-vyr-text leading-[1.2] md:leading-[1.1] relative w-full mb-2 sm:mb-0">
                        <div className="absolute inset-0 blur-3xl bg-vyr-wine/10 rounded-full -z-10 transform scale-150 opacity-40" />

                        {/* Mobile Layout: 3 Lines */}
                        <span className="block sm:hidden">Crescimento</span>
                        <span className="block sm:hidden">Empresarial com</span>

                        {/* Desktop Layout: 2 Lines */}
                        <span className="hidden sm:inline-block whitespace-nowrap">Crescimento Empresarial</span>
                        <br className="hidden sm:block" />
                        <span className="hidden sm:inline-block">com&nbsp;</span>

                        {/* Dynamic Element (Shares same line as 'com' on Desktop, new line on Mobile) */}
                        <span className="bg-gradient-to-r from-[#8E2648] via-[#E25A84] to-[#8E2648] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-x_4s_ease_infinite] block sm:inline-block relative mt-2 sm:mt-0 drop-shadow-[0_0_15px_rgba(226,90,132,0.4)]">
                            {/* Animated Typewriter Word */}
                            <motion.span
                                key={wordIndex}
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } },
                                    hidden: {}
                                }}
                            >
                                {words[wordIndex].split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, display: "none" },
                                            visible: { opacity: 1, display: "inline" }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                            {/* Blinking Cursor */}
                            <span className="inline-block w-[3px] md:w-[4px] h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] bg-vyr-wine animate-pulse ml-1 align-middle opacity-80" />
                        </span>
                    </h1>

                    <p className="hero-element text-lg md:text-xl text-vyr-text-muted max-w-2xl text-balance leading-relaxed">
                        Abandone métricas de vaidade. Somos arquitetos do seu pipeline através de tráfego ultra qualiﬁcado, automação hiper-direcionada e um ecossistema cíclico de crescimento.
                    </p>

                    <div className="hero-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center z-20">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#3d4f1c] hover:bg-[#4a5d23] text-white font-medium transition-all shadow-[0_0_20px_rgba(61,79,28,0.5)] hover:shadow-[0_0_30px_rgba(74,93,35,0.8)] hover:scale-[1.02] group flex items-center justify-center border border-[#526a25]/50">
                            Solicitar Diagnóstico
                            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-vyr-text transition-all font-medium hover:scale-[1.02] group flex items-center justify-center" onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}>
                            A Metodologia SAFRA
                            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-70 group-hover:opacity-100" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Small subtle watermark in the bottom right */}
            <div className="absolute bottom-6 right-6 text-xs md:text-sm font-black text-white/[0.04] tracking-[0.3em] pointer-events-none select-none z-0">
                VYRTECH
            </div>
        </section>
    );
}
