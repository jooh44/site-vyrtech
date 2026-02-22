"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    CheckCircle2,
    Droplets,
    TrendingDown,
    Users,
    MessageCircle,
    MapPin,
    ChevronRight,
    Star,
    Sparkles
} from "lucide-react";
import Link from "next/link";
import { EditorialNavbar } from "@/components/ui/EditorialNavbar";
import { EditorialSafraSection } from "@/components/ui/EditorialSafraSection";
import { EditorialConversionForm } from "@/components/ui/EditorialConversionForm";
import { EditorialFooter } from "@/components/ui/EditorialFooter";

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

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-white overflow-hidden text-vyr-wine-dark">
            <EditorialNavbar />

            {/* 1. Hero Section with Dynamic Background Slider */}
            <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-12 bg-[#FFEBF4] overflow-hidden">
                {/* Dynamic Image Background Slider (Ken Burns Effect) */}
                {backgrounds.map((bg, index) => (
                    <div
                        key={bg}
                        className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out pointer-events-none ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
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
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#FFEBF4]/95 via-[#FFEBF4]/85 to-[#FFEBF4]/40 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12">
                    <div className="max-w-4xl space-y-8">
                        <div className="hero-elem inline-flex items-center py-1 px-4 rounded-full border border-vyr-wine/20 bg-white/50 backdrop-blur-sm text-sm font-medium text-vyr-wine shadow-sm">
                            <Sparkles className="w-4 h-4 mr-2" /> Estratégia B2B & Varejo High-Ticket
                        </div>

                        <h1 className="hero-elem text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-vyr-wine-dark leading-[1.1] text-balance">
                            Transforme dias de chuva em <span className="text-transparent bg-clip-text bg-gradient-to-r from-vyr-wine to-vyr-wine-light">agenda lotada.</span>
                        </h1>

                        <p className="hero-elem text-xl md:text-2xl text-vyr-wine-dark/70 max-w-2xl text-balance leading-relaxed font-medium">
                            Deixe de depender do tráfego orgânico de pedestres. Garantimos uma demanda ativa e previsível para a sua loja de locação com <strong>tráfego hiperdirecionado</strong> e <strong>qualificação via IA</strong>.
                        </p>

                        <div className="hero-elem pt-6 flex flex-col sm:flex-row gap-4">
                            <a href="#solicitar" className="px-8 py-5 rounded-full bg-vyr-wine hover:bg-[#521c35] text-white font-medium transition-all shadow-lg flex items-center justify-center text-lg">
                                Agendar Diagnóstico Especializado <ChevronRight className="w-5 h-5 ml-2" />
                            </a>
                            <a href="#como-funciona" className="px-8 py-5 rounded-full border border-vyr-wine/20 bg-white hover:border-vyr-wine text-vyr-wine-dark transition-all font-medium flex items-center justify-center text-lg shadow-sm">
                                Entender o Sistema
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Dores / Agitation Section */}
            <section className="agitation-section py-24 relative border-t border-vyr-wine/10 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-vyr-wine-dark text-balance">
                            O fluxo da sua loja não pode depender da <span className="text-vyr-wine">previsão do tempo.</span>
                        </h2>
                        <p className="text-lg text-vyr-wine-dark/70 text-balance">
                            Ficar esperando a cliente entrar na sua loja é o modelo mais caro e ineficiente de vendas em pleno {new Date().getFullYear()}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="agitation-card bg-white border border-vyr-wine/10 p-10 rounded-3xl hover:border-vyr-wine/30 hover:shadow-xl transition-all shadow-sm group">
                            <div className="w-16 h-16 rounded-2xl bg-vyr-wine-light/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Droplets className="w-8 h-8 text-vyr-wine" />
                            </div>
                            <h3 className="text-2xl font-bold text-vyr-wine-dark mb-4">Dependência Física</h3>
                            <p className="text-vyr-wine-dark/70 leading-relaxed font-medium">
                                Fins de semana chuvosos ou calmarias sazonais esvaziam seu showroom. Sua receita fica completamente à mercê de variáveis incontroláveis.
                            </p>
                        </div>

                        <div className="agitation-card bg-white border border-vyr-wine/10 p-10 rounded-3xl hover:border-vyr-wine/30 hover:shadow-xl transition-all shadow-sm group">
                            <div className="w-16 h-16 rounded-2xl bg-vyr-wine-light/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8 text-vyr-wine" />
                            </div>
                            <h3 className="text-2xl font-bold text-vyr-wine-dark mb-4">Caos de Atendimento</h3>
                            <p className="text-vyr-wine-dark/70 leading-relaxed font-medium">
                                Sua equipe se divide entre ajudar as clientes na loja e responder centenas de &quot;qual o valor?&quot; no WhatsApp, perdendo vendas reais.
                            </p>
                        </div>

                        <div className="agitation-card bg-white border border-vyr-wine/10 p-10 rounded-3xl hover:border-vyr-wine/30 hover:shadow-xl transition-all shadow-sm group">
                            <div className="w-16 h-16 rounded-2xl bg-vyr-wine-light/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <TrendingDown className="w-8 h-8 text-vyr-wine" />
                            </div>
                            <h3 className="text-2xl font-bold text-vyr-wine-dark mb-4">Agências Ineficazes</h3>
                            <p className="text-vyr-wine-dark/70 leading-relaxed font-medium">
                                &quot;Gurus&quot; que prometem alcance, entregam curtidas, mas não entendem o complexo processo de agendamento de provadores e logística.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Injected S.A.F.R.A. Section */}
            <EditorialSafraSection />

            {/* 3. The Methodology (Solution) */}
            <section id="como-funciona" className="py-24 md:py-32 bg-[#FFEBF4] relative border-y border-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black text-vyr-wine-dark text-balance">
                            A Ponte Direta entre a Busca Online e o <span className="text-vyr-wine">Provador Físico.</span>
                        </h2>
                        <p className="text-xl text-vyr-wine-dark/70 font-medium">
                            Implementamos uma máquina de O2O (Online-to-Offline) que capta a noiva ou formanda e a leva qualificada até sua loja.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="system-step flex flex-col md:flex-row items-center gap-12 bg-white border border-vyr-wine/10 shadow-sm p-8 md:p-12 rounded-3xl">
                            <div className="md:w-1/2 space-y-6">
                                <div className="w-12 h-12 rounded-full bg-vyr-wine text-white font-bold text-xl flex items-center justify-center shadow-md">1</div>
                                <h3 className="text-3xl font-bold text-vyr-wine-dark">Tráfego Hiperlocalizado</h3>
                                <p className="text-lg text-vyr-wine-dark/70 leading-relaxed font-medium">
                                    Mostramos os seus melhores vestidos apenas para mulheres que pesquisam ativamente por locação na sua região (raio exato de atuação) usando Google Search e Meta Ads com segmentação premium.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full h-64 rounded-xl bg-[#FFEBF4]/50 border border-vyr-wine/10 flex items-center justify-center relative overflow-hidden">
                                <MapPin className="w-20 h-20 text-vyr-wine opacity-50" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="system-step flex flex-col md:flex-row-reverse items-center gap-12 bg-white border border-vyr-wine/10 shadow-sm p-8 md:p-12 rounded-3xl">
                            <div className="md:w-1/2 space-y-6">
                                <div className="w-12 h-12 rounded-full bg-vyr-wine text-white font-bold text-xl flex items-center justify-center shadow-md">2</div>
                                <h3 className="text-3xl font-bold text-vyr-wine-dark">IA e Qualificação Instantânea</h3>
                                <p className="text-lg text-vyr-wine-dark/70 leading-relaxed font-medium">
                                    No segundo em que a cliente clica, nossa automação assume. Ela extrai a data do evento, tamanho e estilo sem envolver sua equipe, agendando o provador apenas para clientes reais e com orçamento.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full h-64 rounded-xl bg-[#FFEBF4]/50 border border-vyr-wine/10 flex flex-col justify-center p-8 space-y-4 shadow-inner">
                                <div className="bg-white p-4 rounded-xl rounded-bl-none max-w-[80%] border border-vyr-wine/10 shadow-sm">
                                    <p className="text-sm text-vyr-wine-dark font-medium">Olá! Vi esse vestido no Instagram. Está disponível?</p>
                                </div>
                                <div className="bg-vyr-wine p-4 rounded-xl rounded-br-none max-w-[80%] self-end shadow-md">
                                    <p className="text-sm text-white font-medium">Sim, maravilhosa! Qual a data do seu evento e o seu manequim para eu checar na arara? ✨</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="system-step flex flex-col md:flex-row items-center gap-12 bg-white border border-vyr-wine/10 shadow-sm p-8 md:p-12 rounded-3xl">
                            <div className="md:w-1/2 space-y-6">
                                <div className="w-12 h-12 rounded-full bg-vyr-wine text-white font-bold text-xl flex items-center justify-center shadow-md">3</div>
                                <h3 className="text-3xl font-bold text-vyr-wine-dark">Fechamento Escalável</h3>
                                <p className="text-lg text-vyr-wine-dark/70 leading-relaxed font-medium">
                                    Sua vendedora recebe a cliente no provador já sabendo o que ela quer, com a ficha preenchida e alto nível de intenção térmica. Conversão garantida e tempo otimizado.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full h-64 rounded-xl bg-[#FFEBF4]/50 border border-vyr-wine/10 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <CheckCircle2 className="w-16 h-16 text-vyr-olive mb-4 mx-auto" />
                                    <h4 className="text-2xl font-bold text-vyr-wine-dark mb-2">Visita Confirmada</h4>
                                    <p className="text-vyr-wine-dark/70 font-medium">Impacto direto no Fluxo de Caixa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Social Proof / Authority */}
            <section className="py-24 bg-white border-b border-vyr-wine/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-vyr-wine-dark mb-8">
                        O que as lojas de locação sentem quando a esteira liga?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                        <div className="bg-[#FFEBF4]/30 p-8 rounded-2xl border border-vyr-wine/5 relative shadow-sm">
                            <MessageCircle className="w-8 h-8 text-vyr-wine/20 absolute top-8 right-8" />
                            <p className="text-lg text-vyr-wine-dark/80 italic mb-6 font-medium">
                                &quot;Antes perdíamos horas tentando responder mensagens no insta, e muitas vezes elas viam na loja e não fechavam. Hoje a equipe de loja só atende quem a IA e a Vyrtech já filtrou. O faturamento de sábado dobrou.&quot;
                            </p>
                            <div>
                                <h4 className="font-bold text-vyr-wine-dark">Mariana C.</h4>
                                <p className="text-sm text-vyr-wine font-semibold">Owner, Boutique Festa Premium</p>
                            </div>
                        </div>
                        <div className="bg-[#FFEBF4]/30 p-8 rounded-2xl border border-vyr-wine/5 relative shadow-sm">
                            <MessageCircle className="w-8 h-8 text-vyr-wine/20 absolute top-8 right-8" />
                            <p className="text-lg text-vyr-wine-dark/80 italic mb-6 font-medium">
                                &quot;Deixar de depender apenas da fachada para atrair clientes foi libertador. A Vyrtech entendeu exatamente como é o nicho de aluguel e estruturou os anúncios pra quem realmente quer alugar vestidos caros.&quot;
                            </p>
                            <div>
                                <h4 className="font-bold text-vyr-wine-dark">Juliana M.</h4>
                                <p className="text-sm text-vyr-wine font-semibold">CEO, Maison Locações</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Injected Conversion Form */}
            <EditorialConversionForm />

            {/* 5. Final CTA specific to this vertical */}
            <section id="solicitar" className="py-32 bg-[#FFEBF4] text-center px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white blur-[200px] opacity-80 pointer-events-none" />

                <div className="max-w-3xl mx-auto space-y-10 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-vyr-wine-dark tracking-tight text-balance">
                        Pare de perder locações para a concorrência.
                    </h2>
                    <p className="text-xl text-vyr-wine-dark/70 text-balance px-4 font-medium">
                        Se a sua loja possui vestidos premium e equipe de provas prontas, aplique para nossa Assessoria de Crescimento Exclusiva. Selecionamos rigorosamente nossos parceiros por região.
                    </p>
                    <div className="pt-8">
                        <Link
                            href="/#diagnostico"
                            className="px-12 py-6 rounded-full bg-vyr-wine hover:bg-[#521c35] text-white font-bold transition-all shadow-[0_0_20px_rgba(109,39,73,0.4)] text-xl inline-flex items-center"
                        >
                            Solicitar Diagnóstico Agora <ChevronRight className="w-6 h-6 ml-3" />
                        </Link>
                    </div>
                    <p className="text-sm text-vyr-wine-dark/60 font-medium pt-4 flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" /> Vagas limitadas por raio de atuação para evitar concorrência interna.
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
