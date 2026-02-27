"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";

export function AtelierHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentBg, setCurrentBg] = useState(0);
    const backgrounds = [
        '/bg-fashion-3.jpg',
        '/bg-fashion-4.jpg',
        '/bg-fashion-6.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".editorial-reveal", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex items-center pt-16 pb-12 bg-white overflow-hidden rounded-b-vyr-fluid"
        >
            {/* Background Image Slider (Ken Burns) */}
            {backgrounds.map((bg, index) => (
                <div
                    key={bg}
                    className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out grayscale pointer-events-none ${index === currentBg ? 'opacity-40' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: index === currentBg ? 'scale(1.05)' : 'scale(1)',
                        transition: 'opacity 2000ms ease-in-out, transform 8000ms ease-out'
                    }}
                />
            ))}

            {/* Overlay gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
                <div className="max-w-6xl w-full space-y-8 text-left">

                    {/* Badge / Logo Area */}
                    <div className="editorial-reveal flex flex-col items-start pb-6 border-b border-vyr-wine/20">
                        <img src="/logo.png" alt="Vyrtech" className="h-12 md:h-14 object-contain mb-4" />
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-black">
                            Método Validado para Locação de Trajes
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="editorial-reveal text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-[#050506] leading-none uppercase">
                        Coloque 8 Noivas por dia no seu provador <br />
                        <span className="font-light italic text-vyr-wine block mt-2">e dobre o fechamento de Padrinhos.</span>
                    </h1>

                    <p className="editorial-reveal text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed font-light">
                        O sistema de tração que gera agendamentos qualificados diariamente e
                        escalou ateliês de 40 para 80 locações semanais.
                        <strong> Foco implacável em conversão & fechamento de padrinhos.</strong>
                    </p>

                    {/* Actions */}
                    <div className="editorial-reveal pt-6 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#diagnostico"
                            className="px-10 py-5 bg-vyr-wine text-white font-bold uppercase tracking-widest text-sm rounded-vyr-fluid hover:bg-vyr-wine-dark transition-all duration-300 shadow-xl shadow-vyr-wine/20 flex items-center justify-center group"
                        >
                            Agendar Diagnóstico
                            <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                        </a>
                        <a
                            href="#como-funciona"
                            className="px-10 py-5 border-2 border-vyr-wine/30 text-vyr-wine font-bold uppercase tracking-widest text-sm rounded-vyr-fluid hover:bg-vyr-wine/5 transition-all duration-300 flex items-center justify-center"
                        >
                            O Sistema
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
