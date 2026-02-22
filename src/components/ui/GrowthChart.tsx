"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const bars = [
    { height: 25 },
    { height: 40 },
    { height: 33 },
    { height: 55 },
    { height: 48 },
    { height: 70 },
    { height: 62 },
    { height: 85 },
    { height: 78 },
    { height: 100 },
];

export function GrowthChart() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Bars grow from scaleY(0) to scaleY(1) staggered
            gsap.fromTo(
                ".growth-bar",
                { scaleY: 0, opacity: 0, transformOrigin: "bottom" },
                {
                    scaleY: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: "back.out(1.4)",
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reset",
                    },
                }
            );

            // Counter label fades in after bars
            gsap.fromTo(
                ".growth-label",
                { opacity: 0, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: 0.9,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reset",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full flex flex-col items-center justify-center p-8 gap-6 select-none">
            {/* Label */}
            <div className="growth-label text-center space-y-1 opacity-0">
                <div className="text-3xl font-black text-[#6D2749]">+127%</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-light">Faturamento</div>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-2 h-28 w-full max-w-xs">
                {bars.map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end h-full">
                        <div
                            className="growth-bar w-full origin-bottom opacity-0"
                            style={{
                                height: `${bar.height}%`,
                                backgroundColor: i === bars.length - 1 ? "#6D2749" : "#FFC5E1",
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* X-axis line */}
            <div className="w-full max-w-xs border-t border-black/10" />

            <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
                <span className="w-6 border-t-2 border-[#6D2749]" />
                Locações confirmadas / mês
            </div>
        </div>
    );
}
