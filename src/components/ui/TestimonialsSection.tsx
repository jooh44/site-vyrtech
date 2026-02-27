import { Star } from "lucide-react";
import { TechH2, TechBody } from "@/components/ui/TechTypography";

export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Lucas Resende",
            role: "CEO - TechSolutions B2B",
            content: "A arquitetura de aquisição da VYRTECH mudou o jogo para nós. Saímos de leads desqualificados para reuniões agendadas com tomadores de decisão quase que instantaneamente. O ROI no primeiro trimestre superou 300%.",
            avatar: "L"
        },
        {
            name: "Amanda Costa",
            role: "CMO - Indústria Global",
            content: "O principal diferencial é a previsibilidade. Com o dashboard que montaram, eu sei exatamente quanto cada centavo em mídia está retornando em pipeline gerado. É engenharia de receita na prática.",
            avatar: "A"
        },
        {
            name: "Gabriel Martins",
            role: "Founder - SaaS Enterprise",
            content: "Eles não fazem apenas 'tráfego'. Eles estruturaram toda a jornada do nosso lead, desde o primeiro clique até o CRM. Nossa taxa de conversão dobrou em menos de 60 dias.",
            avatar: "G"
        },
        // Duplicating for variety if needed, or simply let the CSS animation handle the infinite loop
        {
            name: "Roberto Almeida",
            role: "Diretor Comercial - FinTech",
            content: "A VYRTECH nos ajudou a destravar nosso funil de vendas complexas. A abordagem baseada em dados aliada a uma execução impecável reduziu nosso CAC em 40% no primeiro semestre.",
            avatar: "R"
        }
    ];

    // Duplicate testimonials for seamless infinite scroll
    const scrollingTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Custom CSS Animation for the Ticker */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll-x {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-50% - 1rem)); } /* -50% shifts by exactly half the width of the train (one copy of items). The 1rem compensates for the gap */
                }
                .animate-scroll-x {
                    animation: scroll-x 40s linear infinite;
                }
                .animate-scroll-x:hover {
                    animation-play-state: paused;
                }
                `
            }} />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-vyr-wine-dark blur-[150px] rounded-full opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
                <div className="text-left md:text-center">
                    <TechH2 className="mb-4 text-left md:text-center">
                        Quem já está <span className="text-vyr-olive-light">colhendo os frutos</span>
                    </TechH2>
                    <TechBody className="max-w-2xl mx-auto text-lg text-left md:text-center">
                        O que líderes de mercado dizem sobre nossa engenharia de aquisição e crescimento.
                    </TechBody>
                </div>
            </div>

            {/* Scrolling Ticker Container with Lateral Fades */}
            <div
                className="relative flex w-full overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                {/* 
                  The track is flex, and we use w-max so it expands based on content.
                  It contains exactly two identical sets of testimonials.
                  hover pause is implemented via the CSS above.
                */}
                <div className="flex w-max gap-8 px-4 animate-scroll-x">
                    {scrollingTestimonials.map((testimonial, idx) => (
                        <div key={idx} className="w-[350px] md:w-[450px] shrink-0 bg-[#0C0C0E]/60 backdrop-blur-md border border-[#4A1731]/40 hover:border-vyr-olive-light transition-all duration-500 rounded-3xl p-8 flex flex-col relative group">

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-vyr-olive-light fill-vyr-olive-light" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed flex-1">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-[#1C050F] border border-[#6D2749]/50 flex items-center justify-center text-vyr-olive-light font-bold text-lg group-hover:border-vyr-olive-light transition-all duration-500">
                                    {testimonial.avatar}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-white font-bold truncate">{testimonial.name}</h4>
                                    <p className="text-xs text-vyr-text-muted uppercase tracking-wider mt-1 truncate">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
