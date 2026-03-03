import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { name, email, phone, niche, formId, theme, source_url } = data;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Name, email, and phone are required" },
                { status: 400 }
            );
        }

        // Build the payload exactly as n8n expects from Typeform
        const typeformPayload = {
            "Como devemos te chamar?": name,
            "Prazer! Qual é o seu e-mail profissional?": email,
            "E por qual número nosso especialista consegue contato com você?": phone,
            "Em qual segmento de mercado vocês estão exatamente?": niche || "Não informado",
            "Nos diga, qual o nome da sua empresa?": "Não informado",
            "E qual é o seu cargo aí dentro?": "Não informado",
            "Qual o faturamento médio mensal do seu negócio?": "Não informado",
            "Está disposto a investir pelo menos R$1.500/mês em anúncios, desconsiderando o valor da nossa mão de obra?": "Não informado",
            "Para quando você tem interesse em iniciar esse projeto?": "Não informado",

            // Additional properties useful for tracking that were implicit in Typeform
            "utm_source": data.utm_source || "",
            "utm_medium": data.utm_medium || "",
            "utm_campaign": data.utm_campaign || "",
            "utm_term": data.utm_term || "",
            "utm_content": data.utm_content || "",
            "form_id": formId || (theme === "editorial" ? "vyrtech-editorial" : "vyrtech-tech"),
            "url": source_url || ""
        };

        const webhookUrl = "https://webhook.vyrtech.com/webhook/typeform-v1";

        const webhookResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(typeformPayload),
        });

        if (!webhookResponse.ok) {
            console.error("Webhook failed with status:", webhookResponse.status);
            const text = await webhookResponse.text();
            console.error("Webhook response text:", text);
            return NextResponse.json(
                { error: "Failed to forward lead to webhook" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: "Lead submitted successfully" });
    } catch (error) {
        console.error("Error processing lead:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
