"use client";

const bars = [
    { height: 25, delay: 0 },
    { height: 40, delay: 0.15 },
    { height: 33, delay: 0.3 },
    { height: 55, delay: 0.45 },
    { height: 48, delay: 0.6 },
    { height: 70, delay: 0.75 },
    { height: 62, delay: 0.9 },
    { height: 85, delay: 1.05 },
    { height: 78, delay: 1.2 },
    { height: 100, delay: 1.35 },
];

export function GrowthChart() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-6 select-none">
            {/* Label */}
            <div className="text-center space-y-1">
                <div
                    className="text-3xl font-black text-[#6D2749]"
                    style={{ animation: "countUp 2s ease forwards", animationDelay: "1.8s" }}
                >
                    +127%
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-light">Faturamento</div>
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-2 h-28 w-full max-w-xs">
                {bars.map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end h-full">
                        <div
                            className="w-full rounded-none origin-bottom"
                            style={{
                                height: `${bar.height}%`,
                                backgroundColor: i === bars.length - 1 ? "#6D2749" : "#FFC5E1",
                                opacity: 0,
                                animation: `barGrow 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                                animationDelay: `${bar.delay}s`,
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* X-axis line */}
            <div className="w-full max-w-xs border-t border-black/10" />

            {/* Trend label */}
            <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
                <span className="w-6 border-t-2 border-[#6D2749]" />
                Locações confirmadas / mês
            </div>

            <style>{`
                @keyframes barGrow {
                    from { opacity: 0; transform: scaleY(0); }
                    to   { opacity: 1; transform: scaleY(1); }
                }
                @keyframes countUp {
                    from { opacity: 0; transform: translateY(6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
