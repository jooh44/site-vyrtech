import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política de Privacidade | Vyrtech",
    description: "Política de privacidade e termos de uso e proteção de dados da Vyrtech.",
};

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-transparent pt-24 md:pt-32 pb-24 selection:bg-vyr-wine/50 selection:text-white relative">
                <article className="max-w-3xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
                        Política de Privacidade e Termos de Uso
                    </h1>

                    <div className="prose prose-invert prose-vyr max-w-none text-vyr-text-muted leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Informações que coletamos</h2>
                            <p className="mb-4">Podemos coletar as seguintes informações:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Nome</li>
                                <li>E-mail</li>
                                <li>Telefone</li>
                                <li>Nome da empresa</li>
                                <li>Faturamento</li>
                                <li>Segmento de atuação</li>
                            </ul>
                            <p className="mt-4 mb-4">Essas informações podem ser coletadas por meio de:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Formulários no site</li>
                                <li>Cookies e tecnologias de rastreamento</li>
                                <li>Cadastros realizados pelo usuário</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. Uso das informações</h2>
                            <p className="mb-4">As informações coletadas são utilizadas para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Ações de marketing e comunicação</li>
                                <li>Envio de materiais e propostas comerciais</li>
                                <li>Suporte e atendimento ao cliente</li>
                                <li>Contato comercial direto</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies e tecnologias semelhantes</h2>
                            <p>
                                Utilizamos cookies para melhorar a experiência do usuário, analisar métricas de acesso e personalizar conteúdos. Você pode configurar seu navegador para recusar cookies, mas algumas funcionalidades do site podem ser afetadas.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Compartilhamento de informações</h2>
                            <p className="mb-4">Podemos compartilhar dados com terceiros apenas quando necessário para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Processamento de informações (por exemplo, ferramentas de automação e CRM)</li>
                                <li>Análises de marketing</li>
                                <li>Cumprimento de obrigações legais</li>
                            </ul>
                            <p className="mt-4">Em nenhum caso vendemos ou comercializamos dados pessoais.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Armazenamento e segurança</h2>
                            <p>
                                Seus dados são armazenados em servidores seguros e protegidos contra acessos não autorizados, perda ou divulgação indevida.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Política para menores de idade</h2>
                            <p>Nosso site é direcionado exclusivamente a maiores de 18 anos.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Alterações nesta Política de Privacidade</h2>
                            <p>
                                A VYRTECH poderá atualizar esta política a qualquer momento. As alterações serão publicadas nesta página, com data de revisão atualizada.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Contato</h2>
                            <p className="mb-4">Em caso de dúvidas ou solicitações relacionadas à privacidade, entre em contato:</p>
                            <ul className="list-none space-y-2">
                                <li><strong>E-mail:</strong> <a href="mailto:vyrtech.official@gmail.com?subject=Dúvida sobre Privacidade" className="text-vyr-wine hover:text-vyr-wine-light transition-colors">vyrtech.official@gmail.com</a></li>
                                <li><strong>Telefone:</strong> <a href="https://wa.me/5519920019828" target="_blank" rel="noopener noreferrer" className="text-vyr-wine hover:text-vyr-wine-light transition-colors">(19) 92001-9828</a></li>
                            </ul>
                        </section>

                        <div className="pt-8 border-t border-white/10 text-center">
                            <a href="#" className="inline-flex items-center text-sm text-vyr-text-muted hover:text-white transition-colors">
                                ↑ Voltar ao topo
                            </a>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
