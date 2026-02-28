import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de Uso | Vyrtech",
    description: "Termos de Uso e Serviço da Vyrtech.",
};

export default function TermsOfService() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-transparent pt-24 md:pt-32 pb-24 selection:bg-vyr-wine/50 selection:text-white relative">
                <article className="max-w-3xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
                        Termos de Uso
                    </h1>

                    <p className="text-vyr-text-muted mb-8 italic">Última atualização: 16 de novembro de 2025</p>

                    <div className="prose prose-invert prose-vyr max-w-none text-vyr-text-muted leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Aceitação dos termos</h2>
                            <p>Ao acessar nosso site, você concorda com as regras descritas neste documento.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. Uso permitido</h2>
                            <p className="mb-4">O site e seus conteúdos devem ser utilizados apenas para fins lícitos e de acordo com as leis aplicáveis. É proibido:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Utilizar o site para atividades fraudulentas</li>
                                <li>Enviar conteúdo malicioso ou prejudicial</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. Serviços oferecidos</h2>
                            <p className="mb-4">A VYRTECH atua nas áreas de:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Estratégia</li>
                                <li>Landing Pages</li>
                                <li>Automação</li>
                                <li>CRM</li>
                                <li>Dados</li>
                                <li>Mídia Paga</li>
                            </ul>
                            <p className="mt-4">O site serve para apresentar serviços e possibilitar o contato comercial. Não realizamos vendas diretamente na plataforma.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Propriedade intelectual</h2>
                            <p>
                                Todo o conteúdo, logotipos, textos e materiais presentes no site são de propriedade da VYRTECH, sendo proibida sua reprodução sem autorização.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitação de responsabilidade</h2>
                            <p className="mb-4">A VYRTECH não se responsabiliza por:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Interrupções ou falhas temporárias no funcionamento do site</li>
                                <li>Danos causados por uso inadequado das informações disponibilizadas</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Alterações nos Termos</h2>
                            <p>
                                Podemos modificar estes Termos a qualquer momento. A versão mais recente estará sempre disponível nesta página.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Atendimento e Prazos</h2>
                            <h3 className="text-xl font-medium text-white mb-2 mt-4">Canais de Atendimento</h3>
                            <ul className="list-none space-y-2 mb-4">
                                <li><strong>Principal:</strong> WhatsApp Vyrtech: +55 (19) 92001-9828</li>
                                <li><strong>Secundário:</strong> Email: contato@vyrtech.com</li>
                            </ul>

                            <h3 className="text-xl font-medium text-white mb-2 mt-4">Horário de Atendimento</h3>
                            <p className="mb-4">Segunda-feira à sexta-feira, das 8h às 12h e das 13h às 18h (Horário Comercial)</p>

                            <h3 className="text-xl font-medium text-white mb-2 mt-4">Tempo de Espera Máximo</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>WhatsApp: 2 horas dentro do horário comercial</li>
                                <li>Email: 1 dia útil</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Período de Cobertura</h2>
                            <p className="mb-4">Duração: 30 dias corridos após o aceite formal da entrega da implementação ou correção, valendo do dia seguinte ao aceite da entrega do projeto.</p>
                            <p className="mb-4">Condições: Dentro deste período, o cliente pode solicitar alterações dentro do escopo sem custo adicional, tratadas com prioridade. O escopo é definido na contratação.</p>
                            <p className="mb-4">Após o Período: Alterações serão cobradas como um novo projeto.</p>

                            <h3 className="text-xl font-medium text-white mb-2 mt-4">Regras de Feedback</h3>
                            <p>O cliente deverá fornecer feedback dentro de 2 dias úteis a partir do dia posterior à entrega. Se demorar mais que 48 horas, a demanda para ajustes pode ser tratada como nova.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">9. Contato</h2>
                            <p className="mb-4">Em caso de dúvidas sobre estes Termos, entre em contato:</p>
                            <ul className="list-none space-y-2">
                                <li><strong>E-mail:</strong> <a href="mailto:vyrtech.official@gmail.com?subject=Dúvida sobre Termos" className="text-vyr-wine hover:text-vyr-wine-light transition-colors">vyrtech.official@gmail.com</a></li>
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
