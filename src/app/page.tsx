import { Hero } from "@/components/ui/Hero";
import { ProblemsSection } from "@/components/ui/ProblemsSection";
import { SafraSection } from "@/components/ui/SafraSection";
import { CasesSection } from "@/components/ui/CasesSection";
import { ConversionForm } from "@/components/ui/ConversionForm";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent overflow-hidden selection:bg-vyr-wine/50 selection:text-white pb-12 relative">
        <Hero />
        <ProblemsSection />
        <SafraSection />
        <CasesSection />
        <ConversionForm />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
