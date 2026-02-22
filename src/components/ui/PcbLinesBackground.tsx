export function PcbLinesBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 bg-transparent overflow-hidden">

            {/* Sleek, sophisticated, extremely subtle base ambient gradient (Anytype 2026 aesthetics) */}
            <div className="absolute top-0 left-0 w-full h-[80vh] bg-[radial-gradient(ellipse_at_top,#0C0C0E_0%,transparent_100%)] opacity-80" />
            <div className="absolute bottom-0 right-0 w-[80vw] h-[60vh] bg-[radial-gradient(ellipse_at_bottom_right,#08080A_0%,transparent_100%)] opacity-80" />

            {/* Discrete Top Right Corner PCB Track */}
            <svg className="absolute top-0 right-0 w-[500px] h-[500px] opacity-80" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="glow-wine" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#5D243C" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#6D2749" stopOpacity="1" />
                        <stop offset="100%" stopColor="#5D243C" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {/* Track 1 */}
                <path d="M 500 80 L 350 80 L 280 150 L 0 150" stroke="#2A2A2D" strokeWidth="1.5" />
                <circle cx="350" cy="80" r="3" fill="#2A2A2D" />
                <circle cx="280" cy="150" r="3" fill="#2A2A2D" />

                {/* Animated Light Pulse 1 */}
                <path d="M 500 80 L 350 80 L 280 150 L 0 150" stroke="url(#glow-wine)" strokeWidth="2.5" className="pulse-path" style={{ animationDelay: '0s' }} />

                {/* Track 2 */}
                <path d="M 500 180 L 400 180 L 350 230 L 50 230" stroke="#2A2A2D" strokeWidth="1.5" />
                <circle cx="400" cy="180" r="3" fill="#2A2A2D" />
                <circle cx="350" cy="230" r="3" fill="#2A2A2D" />

                {/* Animated Light Pulse 2 */}
                <path d="M 500 180 L 400 180 L 350 230 L 50 230" stroke="url(#glow-wine)" strokeWidth="2.5" className="pulse-path" style={{ animationDelay: '2s' }} />

                {/* Track 3 */}
                <path d="M 500 300 L 450 300 L 420 330 L 150 330" stroke="#2A2A2D" strokeWidth="1.5" />
                <circle cx="450" cy="300" r="3" fill="#2A2A2D" />
                <circle cx="420" cy="330" r="3" fill="#2A2A2D" />

                {/* Animated Light Pulse 3 */}
                <path d="M 500 300 L 450 300 L 420 330 L 150 330" stroke="url(#glow-wine)" strokeWidth="2.5" className="pulse-path" style={{ animationDelay: '1s' }} />
            </svg>

            {/* Discrete Bottom Left Corner PCB Track */}
            <svg className="absolute -bottom-20 -left-20 w-[500px] h-[500px] opacity-80 transform rotate-180" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Track 1 */}
                <path d="M 500 80 L 350 80 L 280 150 L 0 150" stroke="#2A2A2D" strokeWidth="1.5" />
                <circle cx="350" cy="80" r="3" fill="#2A2A2D" />
                <circle cx="280" cy="150" r="3" fill="#2A2A2D" />
                <path d="M 500 80 L 350 80 L 280 150 L 0 150" stroke="url(#glow-wine)" strokeWidth="2.5" className="pulse-path" style={{ animationDelay: '1.5s' }} />

                {/* Track 2 */}
                <path d="M 500 180 L 400 180 L 350 230 L 50 230" stroke="#2A2A2D" strokeWidth="1.5" />
                <circle cx="400" cy="180" r="3" fill="#2A2A2D" />
                <circle cx="350" cy="230" r="3" fill="#2A2A2D" />
                <path d="M 500 180 L 400 180 L 350 230 L 50 230" stroke="url(#glow-wine)" strokeWidth="2.5" className="pulse-path" style={{ animationDelay: '3s' }} />
            </svg>

            <style dangerouslySetInnerHTML={{
                __html: `
        .pulse-path {
          stroke-dasharray: 100 800;
          stroke-dashoffset: 800;
          animation: circuit-flow 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          opacity: 0.95;
        }
        
        @keyframes circuit-flow {
          0% { stroke-dashoffset: 800; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { stroke-dashoffset: -100; opacity: 0; }
        }
      `}} />
        </div>
    );
}
