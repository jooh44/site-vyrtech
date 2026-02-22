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
      <body suppressHydrationWarning className={`${inter.variable} antialiased selection:bg-vyr-wine/50 selection:text-white relative min-h-screen bg-[#050506]`}>
        {children}
      </body>
    </html>
  );
}
