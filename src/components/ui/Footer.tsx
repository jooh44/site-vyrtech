import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#050506] pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <h3 className="text-3xl font-bold text-white tracking-tight">Vyrtech</h3>
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
