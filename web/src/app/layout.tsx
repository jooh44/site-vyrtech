import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Vyrtech - Consultoria de Crescimento",
    description: "Soluções de Marketing para empresas que buscam mais Clientes e Vendas.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body suppressHydrationWarning className={`${inter.variable} antialiased relative min-h-screen`}>
                {children}
            </body>
        </html>
    );
}
