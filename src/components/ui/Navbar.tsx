import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <div className="fixed w-full z-50 top-6 flex justify-center px-4">
            <nav className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full border border-white/10 bg-[#0C0C0E]/80 backdrop-blur-xl shadow-2xl transition-all duration-300">
                <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                    {/* Animated Grape Icon */}
                    <div className="relative w-7 h-9 drop-shadow-[0_0_8px_rgba(93,36,60,0.4)] flex-shrink-0">
                        <Image
                            src="/vyrtech-uva.png"
                            alt="Vyrtech Icon"
                            fill
                            className="object-contain"
                            priority
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-vyr-wine-light via-[#ff1744] to-vyr-wine-light bg-[length:200%_auto] animate-[gradient-x_6s_ease_infinite] mix-blend-overlay opacity-80"
                            style={{
                                WebkitMaskImage: `url(/vyrtech-uva.png)`,
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                maskImage: `url(/vyrtech-uva.png)`,
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
                    <Link href="/#metodologia" className="hover:text-white transition-colors">A Metodologia</Link>
                    <Link href="/locacao-de-roupas" className="hover:text-white transition-colors">Moda & Locação</Link>
                    <a href="/#diagnostico" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7A3351] to-[#D4477A] hover:opacity-90 text-white transition-all shadow-lg font-semibold hover:scale-[1.05] active:scale-[0.98]">
                        Diagnóstico Gratuito
                    </a>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <a href="/#diagnostico" className="px-4 py-2 text-xs rounded-full bg-gradient-to-r from-[#7A3351] to-[#D4477A] text-white font-bold shadow-md">
                        Diagnóstico
                    </a>
                    <button className="text-vyr-text-muted hover:text-white transition-colors" aria-label="Menu">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </div>
    );
}
