"use client";

import { useEffect, useState } from "react";

type Message = {
    from: "client" | "ai";
    text: string;
};

const MESSAGES: Message[] = [
    { from: "client", text: "> \"Tem esse vestido rosa pro dia 15?\"" },
    { from: "ai", text: "Perfeito! Qual sua numeração para eu checar na arara?" },
    { from: "client", text: "> \"Sou número 38.\"" },
    { from: "ai", text: "Disponível! Quer agendar o provador agora?" },
    { from: "client", text: "> \"Quero! Pode ser sábado?\"" },
    { from: "ai", text: "Confirmado. Sábado às 14h. Te esperamos! 🎉" },
];

// Time (ms) each message stays visible before typing the next one
const MSG_DELAY = 1400;
const TYPING_DURATION = 900;
const LOOP_PAUSE = 2200;

export function AnimatedChat() {
    const [visibleCount, setVisibleCount] = useState(0);
    const [showTyping, setShowTyping] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        function showNext(index: number) {
            if (index >= MESSAGES.length) {
                // Pause then restart
                timeout = setTimeout(() => {
                    setVisibleCount(0);
                    setShowTyping(false);
                    timeout = setTimeout(() => showNext(0), 400);
                }, LOOP_PAUSE);
                return;
            }

            const msg = MESSAGES[index];

            // Show typing indicator before AI messages
            if (msg.from === "ai") {
                setShowTyping(true);
                timeout = setTimeout(() => {
                    setShowTyping(false);
                    setVisibleCount(index + 1);
                    timeout = setTimeout(() => showNext(index + 1), MSG_DELAY);
                }, TYPING_DURATION);
            } else {
                setVisibleCount(index + 1);
                timeout = setTimeout(() => showNext(index + 1), MSG_DELAY);
            }
        }

        // Start after small initial delay
        timeout = setTimeout(() => showNext(0), 600);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="w-full max-w-sm space-y-3 font-sans">
            {MESSAGES.slice(0, visibleCount).map((msg, i) => (
                <div
                    key={i}
                    className={`flex ${msg.from === "client" ? "justify-start" : "justify-end"}`}
                    style={{ animation: "fadeSlideUp 0.35s ease both" }}
                >
                    <div
                        className={
                            msg.from === "client"
                                ? "bg-[#FFEBF4] border border-[#FFC5E1] text-[#6D2749] text-sm font-medium tracking-wide px-4 py-3 max-w-[85%]"
                                : "bg-[#6D2749] text-white text-sm font-light tracking-wide px-4 py-3 max-w-[85%] text-right"
                        }
                    >
                        {msg.text}
                    </div>
                </div>
            ))}

            {/* Typing indicator */}
            {showTyping && (
                <div className="flex justify-end" style={{ animation: "fadeSlideUp 0.25s ease both" }}>
                    <div className="bg-[#6D2749]/20 px-4 py-3 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#6D2749] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 bg-[#6D2749] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 bg-[#6D2749] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
