"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, Users, TrendingDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AtelierSection2() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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
    }, { scope: containerRef });

    const pains = [
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
            title: "RECEITA IMPREVISÍVEL",
            desc: "Depender de clientes da rua e indicação torna a sua receita cada vez mais imprevisível..."
        }
    ];

    return (
        <section ref={containerRef} className="agitation-section py-16 md:py-24 relative bg-[#0C0C0E] rounded-vyr-fluid mx-4 md:mx-8 mb-8 md:mb-12 mt-12 md:mt-24 shadow-sm border border-[#4A1731]/40">
            <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
                <div className="text-left md:text-center max-w-4xl mr-auto md:mx-auto mb-12 md:mb-20 space-y-3 md:space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                        O TRÁFEGO DA RUA NÃO PODE DITAR <br className="hidden md:block" /> O SEU <span className="italic font-light text-vyr-olive-light">FATURAMENTO.</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 font-light mt-2 md:mt-4">
                        A rua está cada vez menos movimentada. Ficar esperando a cliente entrar na sua loja é o modelo mais amador de vendas em pleno {new Date().getFullYear()}.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {pains.map((pain, idx) => (
                        <div key={idx} className="agitation-card bg-white rounded-[1.5rem] shadow-sm border border-[#6D2749]/10 p-6 md:p-10 hover:bg-[#FFEBF4] transition-colors group">
                            <pain.icon className="w-8 h-8 md:w-10 md:h-10 text-[#6D2749] mb-4 md:mb-8 group-hover:-translate-y-2 transition-transform" strokeWidth={1.5} />
                            <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-4 uppercase tracking-widest leading-tight">{pain.title}</h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                                {pain.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
