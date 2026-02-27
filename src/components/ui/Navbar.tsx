"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed w-full z-50 top-2 md:top-6 flex justify-center px-2 md:px-4 pointer-events-none">
            <nav className="w-full max-w-5xl flex items-center justify-end md:justify-between md:px-6 md:py-3 md:rounded-full md:border md:border-white/10 md:bg-[#0C0C0E]/90 md:backdrop-blur-xl md:shadow-2xl transition-all duration-300 md:pointer-events-auto">
                <Link href="/" className="hidden md:flex items-center gap-3 group hover:opacity-80 transition-opacity">
                    {/* Animated Grape Icon */}
                    <div className="relative w-7 h-9 drop-shadow-[0_0_8px_rgba(93,36,60,0.4)] flex-shrink-0">
                        <Image
                            src="/vyrtech-uva.svg"
                            alt="Vyrtech Icon"
                            fill
                            className="object-contain"
                            priority
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#4A1731] via-vyr-wine to-[#4A1731] bg-[length:200%_auto] animate-[gradient-x_6s_ease_infinite] mix-blend-overlay opacity-90"
                            style={{
                                WebkitMaskImage: `url(/vyrtech-uva.svg)`,
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                maskImage: `url(/vyrtech-uva.svg)`,
                                maskSize: "contain",
                                maskRepeat: "no-repeat",
                                maskPosition: "center"
                            }}
                        />
                    </div>
                    {/* Grotesk Font Text */}
                    <span className="text-base font-bold tracking-[0.15em] text-vyr-text-muted group-hover:text-white transition-colors uppercase mt-0.5" style={{ fontFamily: '"Space Grotesk", "Clash Display", "Inter", "Helvetica Neue", Arial, sans-serif' }}>
                        Vyrtech
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-vyr-text-muted">
                    <Link href="/#servicos" className="hover:text-white transition-colors">Serviços</Link>
                    <Link href="/#metodologia" className="hover:text-white transition-colors">A Metodologia</Link>
                    <Link href="/locacao-de-roupas" className="hover:text-white transition-colors">Moda & Locação</Link>
                    <a href="/#diagnostico" className="px-6 py-2.5 rounded-full bg-[#D5E8B3] hover:bg-[#C4DB9B] text-[#050506] transition-all shadow-[0_0_15px_rgba(213,232,179,0.3)] font-bold hover:scale-[1.05] active:scale-[0.98]">
                        Diagnóstico Gratuito
                    </a>
                </div>

                <div className="md:hidden flex items-center pointer-events-auto">
                    <button
                        className="text-white hover:text-white transition-colors p-2 bg-[#0C0C0E]/50 backdrop-blur-md rounded-full border border-white/10 mt-2 mr-2"
                        aria-label="Menu"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu className="w-7 h-7" />
                    </button>
                </div>
            </nav>

            {/* Mobile Slide-Over Menu */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-md z-50 transition-opacity duration-300 pointer-events-auto md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100vh', margin: 0 }}
            >
                {/* Panel Sliding from Right */}
                <div
                    className={`absolute top-0 right-0 bottom-0 w-64 bg-[#0C0C0E] border-l border-white/10 p-6 flex flex-col gap-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()} // Prevent clicks inside panel from closing
                >
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                            <div className="relative w-5 h-7">
                                <Image src="/vyrtech-uva.svg" alt="Vyrtech Icon" fill className="object-contain" />
                            </div>
                            <span className="text-sm font-bold tracking-[0.1em] text-white uppercase" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                                Vyrtech
                            </span>
                        </Link>
                        <button
                            className="text-vyr-text-muted hover:text-white transition-colors p-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-sm font-medium tracking-widest uppercase text-vyr-text-muted">
                        <Link href="/#servicos" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
                        <Link href="/#metodologia" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>A Metodologia</Link>
                        <Link href="/locacao-de-roupas" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Moda & Locação</Link>

                        <a
                            href="/#diagnostico"
                            className="px-6 py-3 mt-4 rounded-full bg-[#D5E8B3] text-[#050506] transition-colors text-center font-bold"
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
