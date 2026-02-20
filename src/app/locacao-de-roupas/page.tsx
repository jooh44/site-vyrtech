"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    CheckCircle2,
    Droplets,
    TrendingDown,
    Users,
    CalendarClock,
    MessageCircle,
    MapPin,
    ChevronRight,
    Star,
    Sparkles
} from "lucide-react";
import Link from "next/link";

export default function FashionRetailLandingPage() {
    const containerRef = useRef<HTMLDivElement>(null);

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
        <main ref={containerRef} className="min-h-screen bg-[#08080A] overflow-hidden">

            {/* 1. Hero Section: High Impact, Problem-Agitation-Solution Focus */}
            <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-12">
                <div className="absolute inset-0 z-0">
                    {/* We use a high quality dark fashion image with a heavy blend */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566958769312-82cef41d73b8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/80 to-transparent" />
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-vyr-gradient blur-[150px] opacity-20 pointer-events-none" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12">
                    <div className="max-w-4xl space-y-8">
                        <div className="hero-elem inline-flex items-center py-1 px-4 rounded-full border border-vyr-wine/30 bg-vyr-wine/10 backdrop-blur-sm text-sm font-medium text-vyr-wine-light shadow-sm">
                            <Sparkles className="w-4 h-4 mr-2" /> Estratégia B2B & Varejo High-Ticket
                        </div>

                        <h1 className="hero-elem text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] text-balance">
                            Transforme dias de chuva em <span className="text-transparent bg-clip-text bg-gradient-to-r from-vyr-wine-light to-white">agenda lotada.</span>
                        </h1>

                        <p className="hero-elem text-xl md:text-2xl text-vyr-text-muted max-w-2xl text-balance leading-relaxed">
                            Deixe de depender do tráfego orgânico de pedestres. Garantimos uma demanda ativa e previsível para a sua loja de locação com <strong>tráfego hiperdirecionado</strong> e <strong>qualificação via IA</strong>.
                        </p>

                        <div className="hero-elem pt-6 flex flex-col sm:flex-row gap-4">
                            <a href="#solicitar" className="px-8 py-5 rounded-md bg-vyr-wine hover:bg-vyr-wine-light text-white font-medium transition-all shadow-[0_0_20px_rgba(93,36,60,0.5)] flex items-center justify-center text-lg">
                                Agendar Diagnóstico Especializado <ChevronRight className="w-5 h-5 ml-2" />
                            </a>
                            <a href="#como-funciona" className="px-8 py-5 rounded-md border border-white/10 hover:bg-white/5 text-vyr-text transition-all font-medium flex items-center justify-center text-lg">
                                Entender o Sistema
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Dores / Agitation Section: Why they are losing money */}
            <section className="agitation-section py-24 relative border-t border-white/5 bg-[#050506]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
                            O fluxo da sua loja não pode depender da <span className="text-vyr-wine-light">previsão do tempo.</span>
                        </h2>
                        <p className="text-lg text-vyr-text-muted text-balance">
                            Ficar esperando a cliente entrar na sua loja é o modelo mais caro e ineficiente de vendas em pleno {new Date().getFullYear()}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="agitation-card bg-[#121214] border border-white/5 p-10 rounded-3xl hover:border-vyr-wine/30 hover:bg-[#1A1A1E] transition-all shadow-xl group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Droplets className="w-8 h-8 text-vyr-wine-light" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Dependência Física</h3>
                            <p className="text-vyr-text-muted leading-relaxed">
                                Fins de semana chuvosos ou calmarias sazonais esvaziam seu showroom. Sua receita fica completamente à mercê de variáveis incontroláveis.
                            </p>
                        </div>

                        <div className="agitation-card bg-[#121214] border border-white/5 p-10 rounded-3xl hover:border-vyr-wine/30 hover:bg-[#1A1A1E] transition-all shadow-xl group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8 text-vyr-wine-light" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Caos de Atendimento</h3>
                            <p className="text-vyr-text-muted leading-relaxed">
                                Sua equipe se divide entre ajudar as clientes na loja e responder centenas de "qual o valor?" no WhatsApp, perdendo vendas reais.
                            </p>
                        </div>

                        <div className="agitation-card bg-[#121214] border border-white/5 p-10 rounded-3xl hover:border-vyr-wine/30 hover:bg-[#1A1A1E] transition-all shadow-xl group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <TrendingDown className="w-8 h-8 text-vyr-wine-light" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Agências Ineficazes</h3>
                            <p className="text-vyr-text-muted leading-relaxed">
                                "Gurus" que prometem alcance, entregam curtidas, mas não entendem o complexo processo de agendamento de provadores e logística.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Methodology (Solution) */}
            <section id="como-funciona" className="py-24 md:py-32 bg-vyr-dark relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
                            A Ponte Direta entre a Busca Online e o <span className="text-vyr-wine-light">Provador Físico.</span>
                        </h2>
                        <p className="text-xl text-vyr-text-muted">
                            Implementamos uma máquina de O2O (Online-to-Offline) que capta a noiva ou formanda e a leva qualificada até sua loja.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Step 1 */}
                        <div className="system-step flex flex-col md:flex-row items-center gap-12 bg-vyr-surface border border-white/5 p-8 md:p-12 rounded-3xl">
                            <div className="md:w-1/2 space-y-6">
                                <div className="w-12 h-12 rounded-full bg-vyr-wine/20 flex items-center justify-center text-vyr-wine-light font-bold text-xl">1</div>
                                <h3 className="text-3xl font-bold text-white">Tráfego Hiperlocalizado</h3>
                                <p className="text-lg text-vyr-text-muted leading-relaxed">
                                    Mostramos os seus melhores vestidos apenas para mulheres que pesquisam ativamente por locação na sua região (raio exato de atuação) usando Google Search e Meta Ads com segmentação premium.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full h-64 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-center relative overflow-hidden">
                                <MapPin className="w-20 h-20 text-vyr-wine-light opacity-50" />
                                <div className="absolute inset-0 bg-vyr-gradient opacity-20 pointer-events-none" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="system-step flex flex-col md:flex-row-reverse items-center gap-12 bg-vyr-surface border border-white/5 p-8 md:p-12 rounded-3xl">
                            <div className="md:w-1/2 space-y-6">
                                <div className="w-12 h-12 rounded-full bg-vyr-wine/20 flex items-center justify-center text-vyr-wine-light font-bold text-xl">2</div>
                                <h3 className="text-3xl font-bold text-white">IA e Qualificação Instantânea</h3>
                                <p className="text-lg text-vyr-text-muted leading-relaxed">
                                    No segundo em que a cliente clica, nossa automação no WhatsApp assume. Ela extrai a data do evento, tamanho e estilo sem envolver sua equipe, agendando o provador apenas para clientes reais.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full h-64 rounded-xl bg-[#08080A] border border-white/10 flex flex-col justify-center p-8 space-y-4">
                                <div className="bg-[#1A1A1E] p-4 rounded-xl rounded-bl-none max-w-[80%] border border-white/5 shadow-md">
                                    <p className="text-sm text-white">Olá! Vi esse vestido no Instagram. Está disponível?</p>
                                </div>
                                <div className="bg-vyr-wine-dark/40 p-4 rounded-xl rounded-br-none max-w-[80%] self-end border border-vyr-wine/20 shadow-md">
                                    <p className="text-sm text-vyr-text">Sim, maravilhosa! Qual a data do seu evento e o seu manequim para eu checar na arara? ✨</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="system-step flex flex-col md:flex-row items-center gap-12 bg-vyr-surface border border-white/5 p-8 md:p-12 rounded-3xl">
                            <div className="md:w-1/2 space-y-6">
                                <div className="w-12 h-12 rounded-full bg-vyr-wine/20 flex items-center justify-center text-vyr-wine-light font-bold text-xl">3</div>
                                <h3 className="text-3xl font-bold text-white">Fechamento Escalável</h3>
                                <p className="text-lg text-vyr-text-muted leading-relaxed">
                                    Sua vendedora recebe a cliente no provador já sabendo o que ela quer, com a ficha preenchida e alto nível de intenção térmica. Conversão garantida e tempo otimizado.
                                </p>
                            </div>
                            <div className="md:w-1/2 w-full h-64 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <CheckCircle2 className="w-16 h-16 text-vyr-olive-light mb-4 mx-auto" />
                                    <h4 className="text-2xl font-bold text-white mb-2">Visita Confirmada</h4>
                                    <p className="text-vyr-text-muted">Impacto direto no Fluxo de Caixa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Social Proof / Authority */}
            <section className="py-24 bg-[#050506]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        O que as lojas de locação sentem quando a esteira liga?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                        <div className="bg-vyr-surface p-8 rounded-2xl border border-white/5 relative">
                            <MessageCircle className="w-8 h-8 text-vyr-wine/40 absolute top-8 right-8" />
                            <p className="text-lg text-vyr-text-muted italic mb-6">
                                "Antes perdíamos horas tentando responder mensagens no insta, e muitas vezes elas viam na loja e não fechavam. Hoje a equipe de loja só atende quem a IA e a Vyrtech já filtrou. O faturamento de sábado dobrou."
                            </p>
                            <div>
                                <h4 className="font-bold text-white">Mariana C.</h4>
                                <p className="text-sm text-vyr-wine-light">Owner, Boutique Festa Premium</p>
                            </div>
                        </div>
                        <div className="bg-vyr-surface p-8 rounded-2xl border border-white/5 relative">
                            <MessageCircle className="w-8 h-8 text-vyr-wine/40 absolute top-8 right-8" />
                            <p className="text-lg text-vyr-text-muted italic mb-6">
                                "Deixar de depender apenas da fachada para atrair clientes foi libertador. A Vyrtech entendeu exatamente como é o nicho de aluguel e estruturou os anúncios pra quem realmente quer alugar vestidos caros."
                            </p>
                            <div>
                                <h4 className="font-bold text-white">Juliana M.</h4>
                                <p className="text-sm text-vyr-wine-light">CEO, Maison Locações</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA specific to this vertical */}
            <section id="solicitar" className="py-32 bg-[#08080A] text-center px-6 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-vyr-gradient blur-[200px] opacity-30 pointer-events-none" />

                <div className="max-w-3xl mx-auto space-y-10 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight text-balance">
                        Pare de perder locações para a concorrência.
                    </h2>
                    <p className="text-xl text-vyr-text-muted text-balance px-4">
                        Se a sua loja possui vestidos premium e equipe de provas prontas, aplique para nossa Assessoria de Crescimento Exclusiva. Selecionamos rigorosamente nossos parceiros por região.
                    </p>
                    <div className="pt-8">
                        <Link
                            href="/#diagnostico"
                            className="px-12 py-6 rounded-xl bg-vyr-wine hover:bg-vyr-wine-light text-white font-bold transition-all shadow-[0_0_30px_rgba(93,36,60,0.6)] text-xl inline-flex items-center"
                        >
                            Solicitar Diagnóstico Agora <ChevronRight className="w-6 h-6 ml-3" />
                        </Link>
                    </div>
                    <p className="text-sm text-vyr-text-muted opacity-80 pt-4 flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" /> Vagas limitadas por raio de atuação para evitar concorrência interna.
                    </p>
                </div>
            </section>
        </main>
    );
}

// Simple Lock icon mock since I didn't import it above
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
