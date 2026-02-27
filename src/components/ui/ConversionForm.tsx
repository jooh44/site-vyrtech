import { CheckCircle2 } from "lucide-react";
import { TechH2, TechBody } from "@/components/ui/TechTypography";
import { LeadForm } from "@/components/ui/LeadForm";

export function ConversionForm() {
    return (
        <section className="py-24 md:py-32 bg-vyr-darker relative border-t border-vyr-charcoal" id="diagnostico">

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 relative z-10">

                {/* Text Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <TechH2 className="mb-6 text-balance">
                        Pronto para transformar <span className="text-[#D5E8B3]">dados em receita?</span>
                    </TechH2>
                    <TechBody className="mb-8 text-balance">
                        Não somos uma agência comum. Operamos como seu braço direito de crescimento.
                        Preencha o formulário para solicitarmos um Diagnóstico Gratuito da sua operação e indicarmos onde você está perdendo dinheiro.
                    </TechBody>

                    <ul className="space-y-4 mb-4">
                        {[
                            "Auditoria de campanhas e arquitetura de dados",
                            "Mapeamento do Funil Comercial",
                            "Projeção de aumento de vendas"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-vyr-text-muted">
                                <CheckCircle2 className="w-5 h-5 text-vyr-olive-light mr-3 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form Container - Transparent Tech Outline */}
                <div className="lg:w-1/2 bg-transparent backdrop-blur-md border border-[#4A1731]/50 p-8 md:p-12 rounded-vyr-fluid relative overflow-hidden group transition-all duration-500 hover:border-vyr-wine">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1C050F]/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                    <div className="relative z-10">
                        <LeadForm theme="tech" formId="bottom_lead_form_tech" />
                    </div>
                </div>
            </div>
        </section>
    );
}
