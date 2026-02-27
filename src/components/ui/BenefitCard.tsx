import { ReactNode } from "react";
import { cn } from "@/components/ui/TechTypography";

interface BenefitCardProps {
    letter: string;
    title: string;
    description: string;
    icon?: ReactNode;
    theme?: "tech" | "editorial";
    className?: string;
}

export function BenefitCard({
    letter,
    title,
    description,
    icon,
    theme = "tech",
    className
}: BenefitCardProps) {
    const isTech = theme === "tech";

    return (
        <div
            className={cn(
                "relative group w-full p-8 flex flex-col justify-start rounded-vyr-fluid transition-all duration-500 overflow-hidden",
                isTech
                    ? "bg-transparent border border-white/10 [&.is-active]:border-[#FFC5E1]/40 [&.is-active]:shadow-[0_0_30px_rgba(109,39,73,0.3)] transition-all duration-500"
                    : "bg-[#F9F9F9] border border-black [&.is-active]:bg-[#FFEBF4]",
                className
            )}
        >
            {/* Background Glow Effect for Tech Theme */}
            {isTech && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C050F]/80 via-transparent to-transparent opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            )}

            <div className="flex items-center gap-4 mb-6 relative z-10">
                <span
                    className={cn(
                        "benefit-letter font-black uppercase transition-all duration-500",
                        isTech
                            ? "text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6D2749] group-[.is-active]:from-white group-[.is-active]:to-[#FFC5E1] group-[.is-active]:drop-shadow-[0_0_15px_rgba(255,197,225,0.6)]"
                            : "text-5xl text-[#6D2749] drop-shadow-sm"
                    )}
                >
                    {letter}
                </span>

                {icon && (
                    <div
                        className={cn(
                            "benefit-icon p-2 rounded-full",
                            isTech ? "bg-white/5" : "bg-white border border-[#FFC5E1]/30"
                        )}
                    >
                        {icon}
                    </div>
                )}
            </div>

            <h3
                className={cn(
                    "benefit-title text-2xl font-bold mb-3 tracking-tight relative z-10",
                    isTech ? "text-white" : "text-black uppercase"
                )}
            >
                {title}
            </h3>

            <p
                className={cn(
                    "benefit-desc text-base leading-relaxed relative z-10",
                    isTech ? "text-gray-300 font-medium" : "text-gray-700 font-light"
                )}
            >
                {description}
            </p>
        </div>
    );
}
