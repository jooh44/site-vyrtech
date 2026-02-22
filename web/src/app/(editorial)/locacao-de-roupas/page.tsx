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
import Link from "next/link";
import Image from "next/image";
import { EditorialSafraSection } from "@/components/ui/EditorialSafraSection";
import { EditorialConversionForm } from "@/components/ui/EditorialConversionForm";
import { EditorialFooter } from "@/components/ui/EditorialFooter";
import { EditorialNavbar } from "@/components/ui/EditorialNavbar";

export default function FashionRetailLandingPage() {
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

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo(".hero-elem",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
            );

            // Agitation Cards Animation
            gsap.fromTo(".agitation-card",
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".agitation-section",
                        start: "top 75%",
                    }
                }
            );

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

            {/* 1. Hero Section: Editorial & Minimalist */}
            <section className="relative w-full min-h-screen flex items-start md:items-center pt-6 md:pt-16 pb-12 bg-white overflow-hidden">
                {/* Dynamic Image Background Slider (Ken Burns Effect) */}
                {backgrounds.map((bg, index) => (
                    <div
                        key={bg}
                        className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out pointer-events-none grayscale ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: index === currentBg ? 'scale(1.05)' : 'scale(1)',
                            transition: 'opacity 2000ms ease-in-out, transform 8000ms ease-out'
                        }}
                    />
                ))}

                {/* Overlay gradient to ensure text remains perfectly readable */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 md:to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-0 md:pt-10">
                    <div className="max-w-4xl space-y-6">
                        {/* Logo / Tag */}
                        <div className="hero-elem flex flex-col items-start pb-4 border-b-2 border-[#6D2749]/20 space-y-3">
                            <img src="/logo.png" alt="Vyrtech" className="h-14 md:h-12 object-contain" />
                            <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-black leading-relaxed mt-2">
                                Estratégia B2B & Varejo High-Ticket
                            </p>
                        </div>

                        {/* Huge Editorial Typography */}
                        <h1 className="hero-elem text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#050506] leading-[0.9] text-balance uppercase mt-2">
                            DIAS DE CHUVA EM <br />
                            <span className="italic font-light text-[#6D2749]">AGENDA LOTADA.</span>
                        </h1>

                        <p className="hero-elem text-[17px] sm:text-lg md:text-xl text-gray-800 max-w-2xl text-balance leading-relaxed font-normal md:font-light mt-4">
                            Deixe de depender do tráfego orgânico de pedestres. Garantimos uma demanda ativa e previsível para negócios de moda de alto padrão com <strong>tráfego hiperdirecionado</strong> e foco implacável em conversão.
                        </p>

                        {/* Calls to Action: Sharp corners, solid colors */}
                        <div className="hero-elem pt-4 flex flex-col sm:flex-row gap-0 border-t border-gray-200 mt-6 md:mt-8 py-4">
                            <a href="#solicitar" className="px-6 md:px-10 py-5 sm:py-6 bg-[#6D2749] hover:bg-[#FFC5E1] hover:text-[#6D2749] text-white font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center transition-colors group">
                                Agendar Diagnóstico <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-4 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a href="#como-funciona" className="px-6 md:px-10 py-5 sm:py-6 border border-[#6D2749] bg-transparent hover:bg-[#FFEBF4] hover:text-[#6D2749] text-[#6D2749] font-bold uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center justify-center">
                                O Sistema
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Dores / Agitation Section */}
            <section className="agitation-section py-24 relative border-t-2 border-black bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-[#050506] uppercase tracking-tight">
                            A CHUVA NÃO PODE DITAR <br className="hidden md:block" /> O SEU <span className="italic font-light text-[#6D2749]">FATURAMENTO.</span>
                        </h2>
                        <p className="text-lg text-gray-500 font-light mt-4">
                            Ficar esperando a cliente entrar na sua loja é o modelo mais amador de vendas em pleno {new Date().getFullYear()}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#6D2749]/20">
                        {[
                            {
                                icon: Droplets,
                                title: "DEPENDÊNCIA FÍSICA",
                                desc: "Fins de semana chuvosos ou calmarias sazonais esvaziam seu showroom. Sua receita fica completamente à mercê do acaso."
                            },
                            {
                                icon: Users,
                                title: "CAOS DE ATENDIMENTO",
                                desc: "Sua equipe se divide entre ajudar quem já está na loja e responder centenas de \"qual o valor?\" no Instagram, torrando leads reais."
                            },
                            {
                                icon: TrendingDown,
                                title: "AGÊNCIAS INEFICAZES",
                                desc: "Agências que prometem alcance, entregam curtidas, mas fogem quando o assunto é o complexo CAC de agendamentos reais."
                            }
                        ].map((pain, idx) => (
                            <div key={idx} className="agitation-card bg-white border-r border-b border-[#6D2749]/20 p-10 hover:bg-[#FFEBF4] transition-colors group">
                                <pain.icon className="w-10 h-10 text-[#6D2749] mb-8 group-hover:-translate-y-2 transition-transform" strokeWidth={1.5} />
                                <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-widest">{pain.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    {pain.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Injected Global Component (Editorial Themed) */}
            <EditorialSafraSection />

            {/* 3. The Methodology Application (Solution) */}
            <section id="como-funciona" className="py-24 md:py-32 bg-[#F9F9F9] relative border-t-2 border-black">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
                        <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#6D2749]">A Aplicação Prática</p>
                        <h2 className="text-5xl sm:text-6xl font-black text-black tracking-tight uppercase">
                            COMO O <span className="text-[#6D2749]" style={{ fontFamily: '"Space Grotesk", "Clash Display", "Inter", "Helvetica Neue", Arial, sans-serif' }}>S.A.F.R.A.</span> LOTA <br />O SEU <span className="italic font-light text-[#6D2749]">PROVADOR.</span>
                        </h2>
                    </div>

                    <div className="space-y-0 border border-black">
                        {/* Step 1 */}
                        <div className="system-step flex flex-col md:flex-row items-stretch bg-white border-b border-black">
                            <div className="md:w-1/2 p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center">
                                <div className="step-symbol mb-6">
                                    <MapPin className="w-16 h-16 text-[#FFC5E1]" strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 uppercase tracking-wider">Tráfego Hiperlocalizado</h3>
                                <p className="text-lg text-gray-600 font-light leading-relaxed">
                                    Mostramos seus melhores vestidos apenas para mulheres que pesquisam ativamente por locação num raio exato de atuação, cruzando intenção térmica do Google com a estética do Meta Ads.
                                </p>
                            </div>
                            <div className="md:w-1/2 p-12 bg-[#F9F9F9] flex items-center justify-center min-h-[300px]">
                                <img src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=2069&auto=format&fit=crop" alt="Maps" className="w-full h-full object-cover grayscale opacity-20" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="system-step flex flex-col md:flex-row-reverse items-stretch bg-white border-b border-black">
                            <div className="md:w-1/2 p-12 lg:p-16 border-b md:border-b-0 md:border-l border-black flex flex-col justify-center">
                                <div className="step-symbol mb-6">
                                    <Bot className="w-16 h-16 text-[#FFC5E1]" strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 uppercase tracking-wider">Filtro de Inteligência</h3>
                                <p className="text-lg text-gray-600 font-light leading-relaxed">
                                    No instante do clique, nossa I.A. assume. Extrai a data do evento, numeração e estilo antes de envolver humanos, travando curiosas e blindando o tempo da sua equipe de loja.
                                </p>
                            </div>
                            <div className="md:w-1/2 p-12 bg-[#F9F9F9] flex items-center justify-center min-h-[300px]">
                                <div className="space-y-4 w-full max-w-sm">
                                    <div className="bg-[#FFEBF4] border border-[#FFC5E1] p-4 text-sm font-medium text-[#6D2749] tracking-wide">
                                        &gt; "Tem esse rosa pro dia 15?"
                                    </div>
                                    <div className="bg-[#6D2749] text-white p-4 text-sm font-light tracking-wide text-right">
                                        Perfeito. Qual sua numeração? Confirmando disponibilidade na arara agora.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="system-step flex flex-col md:flex-row items-stretch bg-white">
                            <div className="md:w-1/2 p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center">
                                <div className="step-symbol mb-6">
                                    <DollarSign className="w-16 h-16 text-[#FFC5E1]" strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4 uppercase tracking-wider">Caixa Previsível</h3>
                                <p className="text-lg text-gray-600 font-light leading-relaxed">
                                    A consultora recebe a noiva ou formanda sabendo o modelo, tamanho e budget. Tempo de prova cai pela metade. A taxa de conversão dispara. O faturamento escala sistematicamente.
                                </p>
                            </div>
                            <div className="md:w-1/2 p-12 bg-[#F9F9F9] flex items-center justify-center min-h-[300px]">
                                <div className="text-center space-y-2">
                                    <div className="text-4xl font-black text-[#6D2749]">R$ 1.800,00</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-400">Locação Confirmada</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Social Proof / Authority (No borders, pure typography) */}
            <section className="py-32 bg-white border-t-2 border-black">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#6D2749] mb-16">O Impacto Final</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto text-left relative before:absolute before:inset-0 before:left-1/2 before:-ml-px before:w-px before:bg-[#6D2749]/20 before:hidden md:before:block">
                        <div className="pt-8 md:pt-0 md:pr-16 relative">
                            <span className="absolute -top-12 left-0 text-9xl text-[#FFEBF4] font-serif leading-none">"</span>
                            <p className="text-2xl text-black font-light italic mb-8 relative z-10 leading-snug text-balance">
                                Hoje a equipe só atende quem a IA já qualificou. Reduzimos o custo por provador e o faturamento de sábado simplesmente dobrou.
                            </p>
                            <div>
                                <h4 className="font-bold text-black uppercase tracking-widest text-sm">Mariana C.</h4>
                                <p className="text-xs text-[#6D2749] uppercase tracking-widest mt-1">Boutique Premium</p>
                            </div>
                        </div>
                        <div className="pt-16 border-t border-[#6D2749]/20 md:border-t-0 md:pt-0 md:pl-16 relative">
                            <span className="absolute md:-top-12 top-4 left-0 md:left-16 text-9xl text-[#FFEBF4] font-serif leading-none">"</span>
                            <p className="text-2xl text-black font-light italic mb-8 relative z-10 leading-snug text-balance">
                                Deixar de depender da fachada foi libertador. A Vyrtech estruturou os funis de locação com precisão cirúrgica de dados de luxo.
                            </p>
                            <div>
                                <h4 className="font-bold text-black uppercase tracking-widest text-sm">Juliana M.</h4>
                                <p className="text-xs text-[#6D2749] uppercase tracking-widest mt-1">Maison Bridal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Injected Global Conversion Form */}
            <EditorialConversionForm />

            {/* 5. Final CTA specific to this vertical */}
            <section id="solicitar" className="py-40 bg-black text-white text-center px-6 border-t-8 border-[#6D2749]">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-balance">
                        ESCALAR SUA LOJA <br className="hidden md:block" /> EXIGE AÇÃO.
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto text-balance">
                        Se a sua loja possui tickets premium e time tático preparado para agendamentos, aplique para nossa Assessoria de Crescimento Exclusiva.
                    </p>
                    <div className="pt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link
                            href="/#diagnostico"
                            className="px-12 py-6 bg-[#6D2749] hover:bg-[#FFC5E1] hover:text-[#6D2749] text-white font-bold uppercase tracking-widest text-sm transition-colors flex items-center group"
                        >
                            Solicitar Diagnóstico <ChevronRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                    <p className="text-xs text-[#FFC5E1]/70 font-bold uppercase tracking-widest pt-8 flex items-center justify-center gap-3">
                        <Lock className="w-3 h-3" /> VAGAS LIMITADAS POR RAIO DE ATUAÇÃO (EVITAMOS CANIBALIZAÇÃO)
                    </p>
                </div>
            </section>

            <EditorialFooter />
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
