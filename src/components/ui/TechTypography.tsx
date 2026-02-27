import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
import { ReactNode } from "react";

// Tech Typography Tokens (Inter Tight, -0.02em tracking)
// H1: 4rem (64px)
// H2: 2.5rem (40px) 
// Body: 1rem (16px) / 1.6 line-height

export const techFontBase = "font-tight tracking-[-0.02em]";

export function TechH1({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h1
            className={cn(
                techFontBase,
                "text-4xl md:text-5xl lg:text-7xl font-bold text-vyr-text leading-tight",
                className
            )}
        >
            {children}
        </h1>
    );
}

export function TechH2({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h2
            className={cn(
                techFontBase,
                "text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-vyr-text leading-tight",
                className
            )}
        >
            {children}
        </h2>
    );
}

export function TechBody({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <p
            className={cn(
                "font-sans text-base leading-[1.6] text-vyr-text-muted",
                className
            )}
        >
            {children}
        </p>
    );
}
