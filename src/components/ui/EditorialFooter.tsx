import Link from "next/link";
import Image from "next/image";

export function EditorialFooter() {
    return (
        <footer className="border-t-2 border-black bg-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity w-fit">
                        <img src="/logo.png" alt="Vyrtech" className="h-10 md:h-12 object-contain" />
                    </Link>
                    <p className="text-gray-600 max-w-sm leading-relaxed font-light text-sm">
                        Nós não fazemos postagens bonitinhas. Nós construímos arquiteturas de aquisição robustas, automatizadas e previsíveis para esteiras B2B e nichos High-Ticket.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                        <span className="w-2 h-2 rounded-none bg-[#6D2749] block"></span>
                        Soluções
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-500 font-light">
                        <li><Link href="/#diagnostico" className="hover:text-[#6D2749] transition-colors">Tráfego B2B Qualificado</Link></li>
                        <li><Link href="/#diagnostico" className="hover:text-[#6D2749] transition-colors">Automação Make/Zapier</Link></li>
                        <li><Link href="/#diagnostico" className="hover:text-[#6D2749] transition-colors">Metodologia S.A.F.R.A.</Link></li>
                        <li><Link href="/#diagnostico" className="hover:text-[#6D2749] transition-colors">Consultoria de CRO</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                        <span className="w-2 h-2 rounded-none bg-[#FFC5E1] block"></span>
                        Verticais
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-500 font-light">
                        <li><Link href="/locacao-de-roupas" className="text-[#6D2749] font-medium hover:opacity-80 transition-colors">Moda & Locação Premium</Link></li>
                        <li className="text-gray-300 cursor-not-allowed">Indústria Corporativa (Em breve)</li>
                        <li className="text-gray-300 cursor-not-allowed">SaaS & Tecnologia (Em breve)</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-light uppercase tracking-wider">
                <p>© 2026 Vyrtech Growth. Todos os direitos reservados.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/termos-de-servico" className="hover:text-[#6D2749] transition-colors">Termos de Uso</Link>
                    <Link href="/politica-de-privacidade" className="hover:text-[#6D2749] transition-colors">Política de Privacidade</Link>
                </div>
            </div>
        </footer>
    );
}
