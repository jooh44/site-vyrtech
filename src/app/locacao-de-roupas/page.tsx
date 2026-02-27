"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    CheckCircle2, // This will be removed if not used elsewhere, but for now, keep it as the instruction only mentions replacing in step 3.
    Droplets,
    TrendingDown,
    Users,
    MessageCircle,
    MapPin,
    ChevronRight,
    Star,
    Sparkles,
    DollarSign,
    Bot
} from "lucide-react";
import { AtelierSection2 } from "@/components/ui/AtelierSection2";
import { AtelierHero } from "@/components/ui/AtelierHero";
import Link from "next/link";
import { EditorialSafraSection } from "@/components/ui/EditorialSafraSection";
import { EditorialConversionForm } from "@/components/ui/EditorialConversionForm";
import { EditorialFooter } from "@/components/ui/EditorialFooter";
import { EditorialNavbar } from "@/components/ui/EditorialNavbar";
import { EditorialTestimonialsSection } from "@/components/ui/EditorialTestimonialsSection";
import { AnimatedChat } from "@/components/ui/AnimatedChat";
import { GrowthChart } from "@/components/ui/GrowthChart";
import { WhatsAppButtonEditorial } from "@/components/ui/WhatsAppButtonEditorial";

export default function FashionRetailLandingPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {


            // System Steps Animation
            const steps = gsap.utils.toArray(".system-step");
            steps.forEach((step: any, i) => {
                gsap.fromTo(step,
                    { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 1, ease: "power3.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 80%",
                        }
                    }
                );
            });

            // Subtle entry for Solution Steps (Practical Application)
            const systemSteps = gsap.utils.toArray<HTMLElement>('.system-step');
            systemSteps.forEach((step) => {
                gsap.fromTo(step,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-black selection:text-white">
            <EditorialNavbar />
            <AtelierHero />

            <AtelierSection2 />

            {/* Injected Global Component (Editorial Themed) */}
            <EditorialSafraSection />

            {/* 4. The Methodology Application (Solution) - NOW COMBINED WITH SUITS SHOWCASE BG */}
            <section id="como-funciona" className="pt-32 pb-24 md:pt-40 md:pb-32 relative border-t-2 border-black overflow-hidden bg-[#050506]">
                {/* Background Image - Fixed Parallax Effect */}
                <div
                    className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat bg-fixed grayscale-[0.2] opacity-70"
                    style={{
                        backgroundImage: "url('/suit-tuxedo.png')",
                    }}
                />

                {/* Wine Overlay */}
                <div className="absolute inset-0 z-0 bg-vyr-wine/60 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050506] via-transparent to-[#050506]/50 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-6 md:mb-12 space-y-3 md:space-y-6">
                        <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 drop-shadow-sm">A Aplicação Prática</p>
                        <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight uppercase drop-shadow-lg">
                            COMO O <span className="text-[#FFC5E1]" style={{ fontFamily: '"Space Grotesk", "Clash Display", "Inter", "Helvetica Neue", Arial, sans-serif' }}>S.A.F.R.A.</span> LOTA <br />O SEU <span className="italic font-light text-[#FFC5E1]">PROVADOR.</span>
                        </h2>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/20 bg-[#050506]/60 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl">

                        {/* Step 1 */}
                        <div className="system-step flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 relative group hover:bg-white/5 transition-colors duration-500">
                            <div className="p-8 lg:p-10 border-b border-white/10 flex flex-col justify-start flex-1 relative z-10">
                                <div className="step-symbol mb-6">
                                    <MapPin className="w-10 h-10 text-[#FFC5E1]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Tráfego Hiperlocalizado</h3>
                                <p className="text-sm text-gray-300 font-light leading-relaxed">
                                    Mostramos seus melhores vestidos apenas para mulheres que pesquisam ativamente por locação num raio exato de atuação, cruzando intenção térmica do Google com a estética do Meta Ads.
                                </p>
                            </div>
                            <div className="bg-transparent h-[300px] flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-500">
                                {/* Animated SVG Map */}
                                <svg className="w-full h-full max-h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="map-glow" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#6D2749" stopOpacity="0" />
                                            <stop offset="50%" stopColor="#6D2749" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#6D2749" stopOpacity="0" />
                                        </linearGradient>
                                        <radialGradient id="pin-glow" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#6D2749" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#6D2749" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>

                                    {/* Street Grid - Horizontal */}
                                    <path d="M 0 80 L 500 80" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />
                                    <path d="M 0 160 L 500 160" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />
                                    <path d="M 0 240 L 500 240" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />
                                    <path d="M 0 320 L 500 320" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />

                                    {/* Street Grid - Vertical */}
                                    <path d="M 100 0 L 100 400" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />
                                    <path d="M 200 0 L 200 400" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />
                                    <path d="M 300 0 L 300 400" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />
                                    <path d="M 400 0 L 400 400" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1" />

                                    {/* Animated Route Trail 1 */}
                                    <path d="M 50 320 L 100 320 L 100 240 L 200 240 L 200 160 L 300 160 L 300 80 L 400 80" stroke="#D4D4D4" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M 50 320 L 100 320 L 100 240 L 200 240 L 200 160 L 300 160 L 300 80 L 400 80" stroke="url(#map-glow)" strokeWidth="3" strokeLinecap="round" className="map-pulse" style={{ animationDelay: '0s' }} />

                                    {/* Animated Route Trail 2 */}
                                    <path d="M 450 350 L 400 350 L 400 240 L 300 240 L 300 160 L 200 160" stroke="#D4D4D4" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M 450 350 L 400 350 L 400 240 L 300 240 L 300 160 L 200 160" stroke="url(#map-glow)" strokeWidth="3" strokeLinecap="round" className="map-pulse" style={{ animationDelay: '2.5s' }} />

                                    {/* Radius Circle (animated) */}
                                    <circle cx="250" cy="200" r="90" fill="url(#pin-glow)" className="map-radius" />
                                    <circle cx="250" cy="200" r="90" stroke="#FFC5E1" strokeWidth="1.5" fill="none" strokeDasharray="6 6" className="map-radius" />

                                    {/* Location Pins */}
                                    <g className="map-pin" style={{ animationDelay: '0s' }}>
                                        <circle cx="200" cy="160" r="8" fill="#6D2749" />
                                        <circle cx="200" cy="160" r="4" fill="#FFC5E1" />
                                    </g>
                                    <g className="map-pin" style={{ animationDelay: '0.5s' }}>
                                        <circle cx="300" cy="240" r="8" fill="#6D2749" />
                                        <circle cx="300" cy="240" r="4" fill="#FFC5E1" />
                                    </g>
                                    <g className="map-pin" style={{ animationDelay: '1s' }}>
                                        <circle cx="250" cy="200" r="10" fill="#6D2749" />
                                        <circle cx="250" cy="200" r="5" fill="white" />
                                    </g>

                                    {/* Intersection Dots */}
                                    <circle cx="100" cy="80" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="200" cy="80" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="300" cy="80" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="400" cy="80" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="100" cy="160" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="400" cy="160" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="100" cy="240" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="400" cy="240" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="100" cy="320" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="200" cy="320" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="300" cy="320" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                    <circle cx="400" cy="320" r="2.5" fill="#FFFFFF" fillOpacity="0.2" />
                                </svg>

                                <style dangerouslySetInnerHTML={{
                                    __html: `
                                    .map-pulse {
                                        stroke-dasharray: 80 600;
                                        stroke-dashoffset: 600;
                                        animation: map-flow 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                                    }
                                    @keyframes map-flow {
                                        0% { stroke-dashoffset: 600; opacity: 0; }
                                        10% { opacity: 1; }
                                        90% { opacity: 1; }
                                        100% { stroke-dashoffset: -80; opacity: 0; }
                                    }
                                    .map-radius {
                                        animation: radius-breathe 4s ease-in-out infinite;
                                    }
                                    @keyframes radius-breathe {
                                        0%, 100% { opacity: 0.4; transform-origin: center; }
                                        50% { opacity: 0.8; }
                                    }
                                    .map-pin {
                                        animation: pin-pulse 2s ease-in-out infinite;
                                    }
                                    @keyframes pin-pulse {
                                        0%, 100% { opacity: 0.7; }
                                        50% { opacity: 1; }
                                    }
                                `}} />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="system-step flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 relative group hover:bg-white/5 transition-colors duration-500">
                            <div className="p-8 lg:p-10 border-b border-white/10 flex flex-col justify-start flex-1 relative z-10">
                                <div className="step-symbol mb-6">
                                    <Bot className="w-10 h-10 text-[#FFC5E1]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Filtro de Inteligência</h3>
                                <p className="text-sm text-gray-300 font-light leading-relaxed">
                                    No instante do clique, nossa I.A. assume. Extrai a data do evento, numeração e estilo antes de envolver humanos, travando curiosas e blindando o tempo da sua equipe de loja.
                                </p>
                            </div>
                            <div className="bg-transparent h-[300px] flex items-center justify-center overflow-hidden transition-colors duration-500">
                                <div className="scale-75 origin-center w-full max-w-sm pl-4">
                                    <AnimatedChat />
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="system-step flex flex-col relative group hover:bg-white/5 transition-colors duration-500">
                            <div className="p-8 lg:p-10 border-b border-white/10 flex flex-col justify-start flex-1 relative z-10">
                                <div className="step-symbol mb-6">
                                    <DollarSign className="w-10 h-10 text-[#FFC5E1]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">Caixa Previsível</h3>
                                <p className="text-sm text-gray-300 font-light leading-relaxed">
                                    A consultora recebe a noiva ou formanda sabendo o modelo, tamanho e budget. Tempo de prova cai pela metade. A taxa de conversão dispara. O faturamento escala sistematicamente.
                                </p>
                            </div>
                            <div className="bg-transparent h-[300px] flex items-center justify-center overflow-hidden transition-colors duration-500 p-6 pt-12">
                                <div className="scale-[0.85] origin-center w-full">
                                    <GrowthChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scrolling Testimonials Ticker */}
            <EditorialTestimonialsSection />

            {/* Injected Global Conversion Form */}
            <EditorialConversionForm />

            {/* 5. Final CTA specific to this vertical */}
            <section id="solicitar" className="py-40 bg-black text-white text-center px-6 border-t-8 border-[#6D2749]">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-balance">
                        ESCALAR SUA LOJA <br className="hidden md:block" /> EXIGE <span className="text-[#6D2749]">AÇÃO.</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto text-balance">
                        Se a sua loja possui tickets premium e time tático preparado para agendamentos, aplique para nossa Assessoria de Crescimento Exclusiva.
                    </p>
                    <div className="pt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link
                            href="#diagnostico"
                            className="px-12 py-6 bg-[#6D2749] hover:bg-[#FFC5E1] hover:text-[#6D2749] text-white font-bold uppercase tracking-widest text-sm transition-colors flex items-center group rounded-3xl"
                        >
                            Solicitar Diagnóstico <ChevronRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                    <p className="text-xs text-[#FFC5E1]/70 font-bold uppercase tracking-widest pt-8 flex items-center justify-center gap-3">
                        <Lock className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mb-1 md:mb-0" strokeWidth={2.5} /> VAGAS LIMITADAS POR RAIO DE ATUAÇÃO (EVITAMOS CANIBALIZAÇÃO)
                    </p>
                </div>
            </section>

            <EditorialFooter />
            <WhatsAppButtonEditorial />
        </main>
    );
}

// Simple Lock icon
function Lock(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}
