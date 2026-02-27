import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
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
      <body suppressHydrationWarning className={`${inter.variable} ${interTight.variable} antialiased selection:bg-vyr-wine/50 selection:text-white relative min-h-screen bg-[#050506]`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
