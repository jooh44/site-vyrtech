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
        },
        // Duplicating for sufficient length in the ticker
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

    // Duplicate testimonials for seamless infinite scroll
    const scrollingTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-white border-t-2 border-black relative overflow-hidden">
            {/* Custom CSS Animation for the Ticker */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll-x {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-50% - 1rem)); }
                }
                .animate-scroll-x {
                    animation: scroll-x 40s linear infinite;
                }
                .animate-scroll-x:hover {
                    animation-play-state: paused;
                }
                `
            }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#6D2749] mb-4">O Impacto Final</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight uppercase">
                        Quem já está <span className="text-[#6D2749]">colhendo os frutos</span>
                    </h3>
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
                <div className="flex w-max gap-8 px-4 animate-scroll-x">
                    {scrollingTestimonials.map((testimonial, idx) => (
                        <div key={idx} className="w-[350px] md:w-[450px] shrink-0 bg-[#F9F9F9] border border-black hover:border-vyr-wine transition-all duration-500 rounded-3xl p-8 flex flex-col relative group">

                            <span className="absolute -top-8 left-6 text-8xl text-[#FFC5E1]/30 font-serif leading-none group-hover:text-[#FFC5E1] transition-colors duration-500">"</span>

                            <div className="flex gap-1 mb-6 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#6D2749] fill-[#6D2749]" />
                                ))}
                            </div>

                            <p className="text-black font-light italic mb-8 relative z-10 leading-snug flex-1">
                                {testimonial.content}
                            </p>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFEBF4] border border-[#FFC5E1] flex items-center justify-center text-[#6D2749] font-bold text-lg group-hover:bg-[#6D2749] group-hover:text-white transition-all duration-500">
                                    {testimonial.avatar}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-black font-bold truncate uppercase text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-[#6D2749] uppercase tracking-wider mt-1 truncate">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
