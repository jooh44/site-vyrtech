"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function EditorialNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        // Run once on mount to check initial position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed w-full z-50 top-0 left-0 transition-all duration-300 pointer-events-none md:pointer-events-auto bg-transparent border-transparent md:bg-white/95 md:backdrop-blur-xl md:border-b-2 md:border-black">
            <nav className="max-w-7xl mx-auto w-full flex items-center justify-end md:justify-between px-6 md:px-12 py-4 pointer-events-auto">
                <Link href="/" className="hidden md:flex items-center gap-3 group hover:opacity-80 transition-opacity">
                    <img src="/logo.png" alt="Vyrtech" className="h-6 md:h-8 object-contain" />
                </Link>

                <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-gray-500">
                    <Link href="#como-funciona" className="hover:text-black transition-colors">O Sistema</Link>
                    <Link href="#metodologia" className="hover:text-black transition-colors">A Metodologia</Link>
                    <a href="#solicitar" className="px-6 py-2.5 bg-[#6D2749] hover:bg-[#FFC5E1] hover:text-[#6D2749] text-white transition-colors border border-transparent font-bold">
                        Diagnóstico Gratuito
                    </a>
                </div>

                <div className="md:hidden flex items-center mt-1">
                    <button
                        className={`transition-colors p-1 ${isScrolled
                            ? "text-[#6D2749]"
                            : "text-white drop-shadow-md"
                            }`}
                        aria-label="Menu"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu className="w-8 h-8 md:w-7 md:h-7" strokeWidth={2.5} />
                    </button>
                </div>
            </nav>

            {/* Mobile Slide-Over Menu */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 pointer-events-auto md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            >
                {/* Panel Sliding from Right */}
                <div
                    className={`absolute top-0 right-0 bottom-0 w-64 bg-white border-l-2 border-black p-6 flex flex-col gap-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()} // Prevent clicks inside panel from closing
                >
                    <div className="flex justify-between items-center pb-4 border-b border-[#6D2749]/20">
                        <img src="/logo.png" alt="Vyrtech" className="h-6 object-contain" />
                        <button
                            className="text-black hover:text-[#6D2749] transition-colors p-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X className="w-6 h-6" strokeWidth={2} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-sm font-bold tracking-widest uppercase text-gray-500">
                        <Link href="#como-funciona" className="hover:text-[#6D2749] transition-colors" onClick={() => setIsMenuOpen(false)}>O Sistema</Link>
                        <Link href="#metodologia" className="hover:text-[#6D2749] transition-colors" onClick={() => setIsMenuOpen(false)}>A Metodologia</Link>

                        <a
                            href="#solicitar"
                            className="px-6 py-3 bg-[#6D2749] hover:bg-[#FFC5E1] hover:text-[#6D2749] text-white transition-colors text-center border border-transparent mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Diagnóstico Gratuito
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
