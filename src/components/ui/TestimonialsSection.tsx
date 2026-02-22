import { Star } from "lucide-react";

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
        }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-vyr-wine-dark blur-[150px] rounded-full opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Quem já construiu <span className="text-vyr-olive-light">receita conosco</span>
                    </h2>
                    <p className="text-vyr-text-muted text-lg max-w-2xl mx-auto">
                        O que líderes de mercado dizem sobre nossa engenharia de aquisição e Growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-transparent backdrop-blur-md border border-[#4A1731]/40 hover:border-vyr-olive-light transition-all duration-500 rounded-3xl p-8 flex flex-col relative group">

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-vyr-olive-light fill-vyr-olive-light" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed flex-1">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1C050F] border border-[#6D2749]/50 flex items-center justify-center text-vyr-olive-light font-bold text-lg group-hover:border-vyr-olive-light transition-all duration-500">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-xs text-vyr-text-muted uppercase tracking-wider mt-1">{testimonial.role}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
