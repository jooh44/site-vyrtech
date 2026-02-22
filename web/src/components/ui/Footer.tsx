import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#050506] pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity w-fit">
                        {/* Animated Grape Icon */}
                        <div className="relative w-8 h-10 drop-shadow-[0_0_8px_rgba(93,36,60,0.4)] flex-shrink-0">
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
                        <span className="text-xl font-bold tracking-[0.15em] text-white uppercase mt-1" style={{ fontFamily: '"Space Grotesk", "Clash Display", "Inter", "Helvetica Neue", Arial, sans-serif' }}>
                            Vyrtech
                        </span>
                    </Link>
                    <p className="text-vyr-text-muted max-w-sm leading-relaxed">
                        Nós não fazemos postagens bonitinhas. Nós construímos arquiteturas de aquisição robustas, automatizadas e previsíveis para esteiras B2B e nichos High-Ticket.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-vyr-wine-light block"></span>
                        Soluções
                    </h4>
                    <ul className="space-y-3 text-sm text-vyr-text-muted">
                        <li><Link href="/#diagnostico" className="hover:text-white transition-colors">Tráfego B2B Qualificado</Link></li>
                        <li><Link href="/#diagnostico" className="hover:text-white transition-colors">Automação Make/Zapier</Link></li>
                        <li><Link href="/#diagnostico" className="hover:text-white transition-colors">Metodologia S.A.F.R.A.</Link></li>
                        <li><Link href="/#diagnostico" className="hover:text-white transition-colors">Consultoria de CRO</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-vyr-olive-light block"></span>
                        Verticais
                    </h4>
                    <ul className="space-y-3 text-sm text-vyr-text-muted">
                        <li><Link href="/locacao-de-roupas" className="hover:text-white transition-colors">Moda & Locação Premium</Link></li>
                        <li className="text-white/30 cursor-not-allowed">Indústria Corporativa (Em breve)</li>
                        <li className="text-white/30 cursor-not-allowed">SaaS & Tecnologia (Em breve)</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-vyr-text-muted">
                <p>© 2026 Vyrtech Growth. Todos os direitos reservados. Projeto de Arquitetura UI/UX.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
}
