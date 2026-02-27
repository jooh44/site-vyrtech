"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export function SmoothScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (!anchor) return;

            const href = anchor.getAttribute('href');

            // Only handle internal anchor links starting with #
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    // Narrative drop transition
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: { y: targetElement, offsetY: 0 },
                        ease: "power3.inOut",
                        onComplete: () => {
                            // Story 4.2 AC #3: Focus on first input if available
                            const firstInput = targetElement.querySelector('input') as HTMLInputElement;
                            if (firstInput) {
                                firstInput.focus();
                            }
                        }
                    });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return null;
}
