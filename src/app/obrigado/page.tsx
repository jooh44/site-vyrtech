import Link from "next/link";
import { CheckCircle2, MessageCircle, Mail, Instagram, Linkedin, Youtube, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { EditorialNavbar } from "@/components/ui/EditorialNavbar";
import { EditorialFooter } from "@/components/ui/EditorialFooter";
import { WhatsAppButtonDark } from "@/components/ui/WhatsAppButtonDark";
import { WhatsAppButtonEditorial } from "@/components/ui/WhatsAppButtonEditorial";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ObrigadoPage({ searchParams }: Props) {
    const params = await searchParams;
    const isEditorial = params.theme === "editorial";

    // Common Contact Links
    const whatsappLink = "https://wa.me/5519920019828?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações";
    const emailAddress = "vyrtech.official@gmail.com";

    return (
        <main className={`min-h-screen font-sans selection:text-white ${isEditorial ? "bg-[#F9F9F9] text-[#111111] selection:bg-black" : "bg-black text-white selection:bg-vyr-wine/50"}`}>
            {/* Navbar based on theme */}
            {isEditorial ? <EditorialNavbar /> : <Navbar />}

            <section className={`pt-32 pb-24 md:pt-40 md:pb-32 px-6 flex items-center justify-center min-h-[70vh] ${isEditorial ? "bg-white" : "bg-[#050506]"}`}>
                <div className={`max-w-4xl mx-auto w-full border ${isEditorial ? "border-black/5 shadow-2xl bg-[#F9F9F9]" : "border-white/10 shadow-[0_0_50px_rgba(109,39,73,0.15)] bg-white/5"} backdrop-blur-xl rounded-[24px] p-8 md:p-12 text-center`}>

                    <div className="flex justify-center mb-8">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${isEditorial ? "bg-[#6D2749]/10" : "bg-vyr-wine/20"}`}>
                            <CheckCircle2 className={`w-12 h-12 ${isEditorial ? "text-[#6D2749]" : "text-vyr-wine"}`} />
                        </div>
                    </div>

                    <h1 className={`text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 ${isEditorial ? "text-black" : "text-white"}`}>
                        Cadastro Realizado
                    </h1>
                    <p className={`text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto ${isEditorial ? "text-gray-600" : "text-gray-300"}`}>
                        Seu cadastro foi realizado com sucesso. Em breve nossa equipe entrará em contato para agendar seu diagnóstico gratuito.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                        {[
                            { title: "1. Análise", desc: "Análise do seu perfil", step: "01" },
                            { title: "2. Contato", desc: "Contato em até 24 horas", step: "02" },
                            { title: "3. Diagnóstico", desc: "Diagnóstico personalizado", step: "03" }
                        ].map((item, idx) => (
                            <div key={idx} className={`p-6 rounded-[24px] border relative overflow-hidden ${isEditorial ? "border-black/5 bg-white shadow-sm" : "border-white/5 bg-black/50"}`}>
                                <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${isEditorial ? "text-[#FFC5E1]" : "text-vyr-wine"}`}>{item.step}</span>
                                <p className={`font-medium ${isEditorial ? "text-black" : "text-white"}`}>{item.desc}</p>
                                <div className={`absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20 ${isEditorial ? "bg-[#6D2749]" : "bg-vyr-wine"}`} />
                            </div>
                        ))}
                    </div>

                    <div className={`border-t pt-10 ${isEditorial ? "border-black/10" : "border-white/10"}`}>
                        <h3 className={`text-sm font-bold uppercase tracking-[0.2em] mb-6 ${isEditorial ? "text-gray-400" : "text-white/40"}`}>Precisa falar conosco agora?</h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all ${isEditorial
                                        ? "bg-[#6D2749] text-white hover:bg-[#FFC5E1] hover:text-[#6D2749]"
                                        : "bg-vyr-wine text-white hover:bg-white hover:text-black"
                                    }`}
                            >
                                <MessageCircle className="w-5 h-5" />
                                (19) 92001-9828
                            </a>
                            <a
                                href={`mailto:${emailAddress}`}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all border ${isEditorial
                                        ? "border-black/10 text-black hover:bg-black/5"
                                        : "border-white/20 text-white hover:bg-white/10"
                                    }`}
                            >
                                <Mail className="w-5 h-5" />
                                Dúvidas por Email
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center justify-between border-t pt-8">
                        <Link
                            href={isEditorial ? "/locacao-de-roupas" : "/"}
                            className={`inline-flex items-center text-sm font-bold uppercase tracking-widest transition-colors ${isEditorial ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Voltar ao site <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>

                        <div className="flex gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${isEditorial ? "text-gray-400 hover:text-[#6D2749]" : "text-gray-500 hover:text-white"}`}>
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${isEditorial ? "text-gray-400 hover:text-[#6D2749]" : "text-gray-500 hover:text-white"}`}>
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`hover:scale-110 transition-transform ${isEditorial ? "text-gray-400 hover:text-[#6D2749]" : "text-gray-500 hover:text-white"}`}>
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer based on theme */}
            {isEditorial ? <EditorialFooter /> : <Footer />}
            <div className="fixed bottom-6 right-6 z-50">
                {isEditorial ? <WhatsAppButtonEditorial /> : <WhatsAppButtonDark />}
            </div>
        </main>
    );
}
