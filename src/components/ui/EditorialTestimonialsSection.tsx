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
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#6D2749] mb-16">O Impacto Final</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto text-left relative before:absolute before:inset-0 before:left-1/2 before:-ml-px before:w-px before:bg-[#6D2749]/20 before:hidden md:before:block">
                    {/* Testimonial 1 */}
                    <div className="pt-8 md:pt-0 md:pr-16 relative">
                        <div className="flex gap-1 mb-6 relative z-10">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[#6D2749] fill-[#6D2749]" />
                            ))}
                        </div>
                        <p className="text-2xl text-black font-light italic mb-8 relative z-10 leading-snug text-balance">
                            {testimonials[0].content}
                        </p>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFEBF4] border border-[#FFC5E1] flex items-center justify-center text-[#6D2749] font-bold text-lg">
                                {testimonials[0].avatar}
                            </div>
                            <div>
                                <h4 className="font-bold text-black uppercase tracking-widest text-sm">{testimonials[0].name}</h4>
                                <p className="text-xs text-[#6D2749] uppercase tracking-widest mt-1">{testimonials[0].role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="pt-16 border-t border-[#6D2749]/20 md:border-t-0 md:pt-0 md:pl-16 relative">
                        <div className="flex gap-1 mb-6 relative z-10">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[#6D2749] fill-[#6D2749]" />
                            ))}
                        </div>
                        <p className="text-2xl text-black font-light italic mb-8 relative z-10 leading-snug text-balance">
                            {testimonials[1].content}
                        </p>
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFEBF4] border border-[#FFC5E1] flex items-center justify-center text-[#6D2749] font-bold text-lg">
                                {testimonials[1].avatar}
                            </div>
                            <div>
                                <h4 className="font-bold text-black uppercase tracking-widest text-sm">{testimonials[1].name}</h4>
                                <p className="text-xs text-[#6D2749] uppercase tracking-widest mt-1">{testimonials[1].role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
