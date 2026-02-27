import { CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/ui/LeadForm";

export function EditorialConversionForm() {
    return (
        <section className="py-24 md:py-32 bg-[#F9F9F9] relative border-t-2 border-black" id="diagnostico">

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 relative z-10">

                {/* Text Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight text-balance uppercase leading-[0.9]">
                        PRONTO PARA<br />TRANSFORMAR<br />
                        <span className="text-[#6D2749] italic font-serif">DADOS EM RECEITA?</span>
                    </h2>
                    <p className="text-lg text-gray-700 font-light mb-8 leading-relaxed text-balance">
                        Não somos uma agência comum. Operamos como seu braço direito de Growth.
                        Preencha o formulário para solicitarmos um Diagnóstico Gratuito da sua operação e indicarmos onde você está perdendo dinheiro.
                    </p>

                    <ul className="space-y-4 mb-4 font-light">
                        {[
                            "Auditoria de campanhas e arquitetura de dados",
                            "Mapeamento do Funil Comercial",
                            "Projeção de Melhorias de CRO"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                                <CheckCircle2 className="w-5 h-5 text-[#6D2749] mr-3 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form Container - Editorial Style */}
                <div className="lg:w-1/2 bg-white border border-black p-8 md:p-12 rounded-vyr-fluid relative overflow-hidden group transition-all duration-500 hover:border-vyr-wine shadow-sm">
                    <div className="relative z-10 w-full">
                        <LeadForm theme="editorial" formId="bottom_lead_form_editorial" />
                    </div>
                </div>
            </div>
        </section>
    );
}
