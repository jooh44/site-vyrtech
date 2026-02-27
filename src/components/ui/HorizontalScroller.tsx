"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/components/ui/TechTypography";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface HorizontalScrollerProps {
    children: React.ReactNode;
    className?: string;
    /**
     * Defines the total height of the scroll area to dictate the scrub duration.
     * Defaults to "300vh".
     */
    scrollHeight?: string;
}

export function HorizontalScroller({ children, className, scrollHeight = "300vh" }: HorizontalScrollerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const track = trackRef.current;
        if (!track) return;

        // Calculate how much to specifically scroll the track so the last item aligns with the right.
        const getScrollAmount = () => {
            const trackWidth = track.scrollWidth;
            const viewportWidth = window.innerWidth;

            // If the content is smaller than viewport, don't scroll
            if (trackWidth <= viewportWidth) return 0;

            // Add a tiny bit of padding to the end
            return -(trackWidth - viewportWidth + 64);
        };

        const ctx = gsap.context(() => {
            // Create the animation timeline
            const tween = gsap.to(track, {
                x: getScrollAmount,
                ease: "none",
                willChange: "transform",
            });

            // Hook it to ScrollTrigger
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${getScrollAmount() * -1}`, // The length of the scroll dictates the timing
                pin: true,
                animation: tween,
                scrub: 1.2, // Smooth scrubbing (1.2s delay for organic feel)
                invalidateOnRefresh: true, // Recalculate values on resize
            });
        }, containerRef);

        return () => ctx.revert();
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className={cn("relative overflow-hidden bg-vyr-darker w-full", className)}
            style={{ height: "100vh" }}
        >
            {/* Sticky boundary handled automatically by GSAP pin */}
            <div className="flex h-full items-center">
                {/* The overflowing track */}
                <div
                    ref={trackRef}
                    className="flex gap-6 px-6 md:px-12 w-fit flex-nowrap items-center will-change-transform"
                >
                    {children}
                </div>
            </div>
        </section>
    );
}
