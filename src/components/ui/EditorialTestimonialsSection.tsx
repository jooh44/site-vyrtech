import { Star } from "lucide-react";

export function EditorialTestimonialsSection() {
    const testimonials = [
        {
            name: "Thiago G. Almeida Silva",
            role: "Stillu's locações",
            content: "100% de aumento nas locações semanais! De 40 locações para 80 semanais!",
            avatar: "T"
        },
        {
            name: "Michele M. Lehn",
            role: "Universo das Noivas",
            content: <>De 2 noivas agendadas através da internet por semana para 8 <strong className="font-bold">todo dia!</strong></>,
            avatar: "M"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-white border-t-2 border-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#6D2749] mb-4">O Impacto Final</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight uppercase">
                        Quem já está <span className="text-[#6D2749]">colhendo os frutos</span>
                    </h3>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-[#F9F9F9] border border-black hover:border-vyr-wine transition-all duration-500 rounded-3xl p-8 md:p-10 flex flex-col relative group">

                            {/* Decorative Quote Mark */}
                            <span className="absolute -top-10 left-6 text-9xl text-[#FFC5E1]/30 font-editorial leading-none group-hover:text-[#FFC5E1]/80 transition-colors duration-500">
                                &ldquo;
                            </span>

                            <div className="flex gap-1 mb-8 relative z-10 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-[#6D2749] fill-[#6D2749]" />
                                ))}
                            </div>

                            <p className="text-black font-light italic mb-10 relative z-10 text-lg md:text-xl leading-relaxed flex-1">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-14 h-14 shrink-0 rounded-full bg-[#FFEBF4] border border-[#FFC5E1] flex items-center justify-center text-[#6D2749] font-bold text-xl group-hover:bg-[#6D2749] group-hover:text-white transition-all duration-500">
                                    {testimonial.avatar}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-black font-black uppercase text-sm tracking-wider">{testimonial.name}</h4>
                                    <p className="text-xs text-[#6D2749] uppercase tracking-widest mt-1 opacity-80">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
