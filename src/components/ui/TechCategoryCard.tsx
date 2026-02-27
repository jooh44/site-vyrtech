"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { LucideIcon } from "lucide-react";
import { TechH2, TechBody } from "@/components/ui/TechTypography";

export interface TechCategoryCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    delay?: number;
}

export function TechCategoryCard({ title, description, Icon, delay = 0 }: TechCategoryCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hover animation setup
        const card = cardRef.current;
        if (!card) return;

        // Hover listeners
        card.addEventListener("mouseenter", () => {
            gsap.to(glowRef.current, {
                opacity: 1,
                scale: 1.2,
                duration: 0.6,
                ease: "power2.out"
            });
            gsap.to(card, {
                y: -5,
                duration: 0.4,
                ease: "back.out(1.5)"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(glowRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                ease: "power2.in"
            });
            gsap.to(card, {
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    }, { scope: cardRef });

    return (
        <div
            ref={cardRef}
            className="glass-panel rounded-3xl p-8 group flex flex-col h-full cursor-pointer"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* GSAP controlled interactive glow */}
            <div
                ref={glowRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(109,39,73,0.15)_0%,_transparent_60%)] opacity-0 pointer-events-none z-0"
            />

            {/* Icon Area */}
            <div className="relative z-10 mb-6 w-14 h-14 rounded-2xl bg-black/40 border border-[#6D2749]/30 flex items-center justify-center group-hover:border-[#6D2749] group-hover:bg-[#6D2749]/10 transition-all duration-500">
                <Icon className="w-6 h-6 text-vyr-text group-hover:text-vyr-text-muted transition-colors duration-500" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-[#FFC5E1] transition-colors duration-500">
                    {title}
                </h3>
                <TechBody className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                    {description}
                </TechBody>
            </div>

            {/* Decorative Line border */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#6D2749] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
}
