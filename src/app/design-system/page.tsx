"use client";

import React from "react";

const colors = [
    { name: "Vyr Dark", class: "bg-vyr-dark", hex: "#08080A" },
    { name: "Vyr Darker", class: "bg-vyr-darker", hex: "#050506" },
    { name: "Vyr Wine", class: "bg-vyr-wine", hex: "#6D2749" },
    { name: "Vyr Wine Light", class: "bg-vyr-wine-light", hex: "#FFC5E1" },
    { name: "Vyr Wine Dark", class: "bg-vyr-wine-dark", hex: "#2D111E" },
    { name: "Vyr Onyx", class: "bg-vyr-onyx", hex: "#111113" },
    { name: "Vyr Charcoal", class: "bg-vyr-charcoal", hex: "#1A1A1C" },
    { name: "Vyr Olive", class: "bg-vyr-olive", hex: "#87C388" },
];

export default function DesignSystemPage() {
    return (
        <div className="min-h-screen bg-vyr-darker p-8 text-vyr-text">
            <h1 className="mb-12 text-4xl font-bold">Vyrtech Design System</h1>

            <section className="mb-16">
                <h2 className="mb-6 text-2xl font-semibold">Colors</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
                    {colors.map((color) => (
                        <div key={color.name} className="flex flex-col items-center">
                            <div
                                className={`h-24 w-full ${color.class} rounded-3xl border border-vyr-charcoal mb-2 shadow-lg`}
                            />
                            <span className="text-sm font-medium">{color.name}</span>
                            <span className="text-xs text-vyr-text-muted uppercase">{color.hex}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="mb-6 text-2xl font-semibold">Fluid Geometry (24px / 1.5rem)</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="bg-vyr-surface p-8 rounded-3xl border border-vyr-charcoal">
                        <h3 className="mb-4 text-xl font-medium">Container with rounded-3xl</h3>
                        <p className="text-vyr-text-muted leading-relaxed">
                            This container uses the standardized 24px border radius. It should look fluid and
                            sophisticated, typical of high-end editorial designs.
                        </p>
                    </div>
                    <div className="bg-vyr-wine p-8 rounded-xl border border-vyr-wine-light/20">
                        <h3 className="mb-4 text-xl font-medium">Container with rounded-xl</h3>
                        <p className="text-vyr-wine-light leading-relaxed">
                            In this project, rounded-xl is also mapped to 1.5rem (24px) for consistency with
                            standard Tailwind usage and our fluid geometry requirements.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="mb-6 text-2xl font-semibold">Contrast Verification (WCAG AA)</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-vyr-dark p-4 rounded-lg">
                        <span className="text-vyr-wine font-bold text-lg">Wine on Dark</span>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Verify Contrast</span>
                    </div>
                    <div className="flex items-center gap-4 bg-vyr-wine p-4 rounded-lg">
                        <span className="text-vyr-text font-bold text-lg">Text on Wine</span>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Verify Contrast</span>
                    </div>
                </div>
            </section>

            <div className="mt-20 pt-8 border-t border-vyr-charcoal text-vyr-text-muted text-center text-sm">
                Vyrtech Typography & Geometry Base - Phase 1 Refactor
            </div>
        </div>
    );
}
