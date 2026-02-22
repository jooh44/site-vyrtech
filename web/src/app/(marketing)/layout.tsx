import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="selection:bg-vyr-wine/50 selection:text-white relative min-h-screen bg-[#050506]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
