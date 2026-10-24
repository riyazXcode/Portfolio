import React, { useEffect, useState, useRef } from 'react';

const ParallaxBackground = () => {
    const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });
    const [smoothScroll, setSmoothScroll] = useState(0);
    const frameRef = useRef(null);
    const targetRef = useRef({ x: 0, y: 0, rawX: 0, rawY: 0, scrollY: 0 });

    useEffect(() => {
        targetRef.current.rawX = window.innerWidth / 2;
        targetRef.current.rawY = window.innerHeight / 2;

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 60;
            const y = (e.clientY / window.innerHeight - 0.5) * 60;
            targetRef.current.x = x;
            targetRef.current.y = y;
            targetRef.current.rawX = e.clientX;
            targetRef.current.rawY = e.clientY;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                const x = (touch.clientX / window.innerWidth - 0.5) * 40;
                const y = (touch.clientY / window.innerHeight - 0.5) * 40;
                targetRef.current.x = x;
                targetRef.current.y = y;
                targetRef.current.rawX = touch.clientX;
                targetRef.current.rawY = touch.clientY;
            }
        };

        const handleScroll = () => {
            targetRef.current.scrollY = window.scrollY;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        // High-precision 60fps interpolation loop (lerp)
        const updateLoop = () => {
            setSmoothMouse((prev) => {
                const dx = targetRef.current.x - prev.x;
                const dy = targetRef.current.y - prev.y;
                return {
                    x: prev.x + dx * 0.08,
                    y: prev.y + dy * 0.08,
                    rawX: targetRef.current.rawX,
                    rawY: targetRef.current.rawY,
                };
            });

            setSmoothScroll((prev) => {
                const dScroll = targetRef.current.scrollY - prev;
                return prev + dScroll * 0.1;
            });

            frameRef.current = requestAnimationFrame(updateLoop);
        };

        frameRef.current = requestAnimationFrame(updateLoop);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('scroll', handleScroll);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07090e]">
            {/* Layer 1: Cyber Grid with 3D Depth Shift */}
            <div 
                className="absolute inset-0 bg-grid-pattern opacity-30 transition-transform duration-100 ease-out"
                style={{
                    transform: `translate3d(${smoothMouse.x * 0.3}px, ${(smoothMouse.y * 0.3) - ((smoothScroll * 0.12) % 32)}px, 0)`
                }}
            />

            {/* Layer 2: Subtle Dot Matrix Layer */}
            <div 
                className="absolute inset-0 bg-dot-pattern opacity-20"
                style={{
                    transform: `translate3d(${-smoothMouse.x * 0.2}px, ${-smoothMouse.y * 0.2 - ((smoothScroll * 0.06) % 20)}px, 0)`
                }}
            />

            {/* Radial Vignette Mask */}
            <div className="absolute inset-0 bg-radial-vignette" />

            {/* Layer 3: Ambient Nebulae (Drifting at distinct parallax depth velocities) */}
            {/* Nebula 1: IBM Electric Blue (Deep background top-left) */}
            <div 
                className="absolute -top-28 -left-28 w-[420px] sm:w-[700px] h-[420px] sm:h-[700px] rounded-full bg-blue-600/18 blur-[100px] sm:blur-[150px] pointer-events-none animate-glow-pulse"
                style={{
                    transform: `translate3d(${smoothMouse.x * 1.2}px, ${smoothMouse.y * 1.2 - smoothScroll * 0.16}px, 0)`
                }}
            />

            {/* Nebula 2: Cyber Emerald (Homelab / Proxmox node center-right) */}
            <div 
                className="absolute top-[40%] -right-24 w-[360px] sm:w-[650px] h-[360px] sm:h-[650px] rounded-full bg-emerald-500/12 blur-[100px] sm:blur-[160px] pointer-events-none"
                style={{
                    transform: `translate3d(${-smoothMouse.x * 1.3}px, ${-smoothMouse.y * 1.3 - smoothScroll * 0.22}px, 0)`
                }}
            />

            {/* Nebula 3: Anthropic Violet (AI & Systems bottom-left) */}
            <div 
                className="absolute top-[75%] left-[10%] w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] rounded-full bg-purple-600/12 blur-[110px] sm:blur-[170px] pointer-events-none"
                style={{
                    transform: `translate3d(${smoothMouse.x * 0.9}px, ${smoothMouse.y * 0.9 - smoothScroll * 0.12}px, 0)`
                }}
            />

            {/* Nebula 4: Cyan Edge Glow (Mid-screen accent) */}
            <div 
                className="absolute top-[25%] right-[20%] w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] rounded-full bg-cyan-500/8 blur-[90px] sm:blur-[130px] pointer-events-none"
                style={{
                    transform: `translate3d(${-smoothMouse.x * 0.7}px, ${-smoothMouse.y * 0.7 + smoothScroll * 0.08}px, 0)`
                }}
            />

            {/* Layer 4: Floating Parallax Cyber Data Chips (Hidden on small mobile screens to keep view clean) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
                {/* Chip 1: Top Right */}
                <div 
                    className="absolute top-[18%] right-[8%] px-3 py-1.5 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-[11px] font-mono text-blue-400/40 shadow-sm transition-transform duration-100 ease-out flex items-center gap-2"
                    style={{
                        transform: `translate3d(${smoothMouse.x * -0.5}px, ${-smoothScroll * 0.28}px, 0)`
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></span>
                    <span>{"{ IaC: 'Terraform' }"}</span>
                </div>

                {/* Chip 2: Mid-Left */}
                <div 
                    className="absolute top-[38%] left-[6%] px-3 py-1.5 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-[11px] font-mono text-emerald-400/40 shadow-sm transition-transform duration-100 ease-out flex items-center gap-2"
                    style={{
                        transform: `translate3d(${smoothMouse.x * 0.6}px, ${-smoothScroll * 0.18}px, 0)`
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50"></span>
                    <span>[ pve-01 // Proxmox 9 ]</span>
                </div>

                {/* Chip 3: Mid-Right */}
                <div 
                    className="absolute top-[58%] right-[5%] px-3 py-1.5 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-[11px] font-mono text-purple-400/40 shadow-sm transition-transform duration-100 ease-out flex items-center gap-2"
                    style={{
                        transform: `translate3d(${smoothMouse.x * -0.4}px, ${-smoothScroll * 0.32}px, 0)`
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></span>
                    <span>λ AWS Transform</span>
                </div>

                {/* Chip 4: Lower-Left */}
                <div 
                    className="absolute top-[78%] left-[7%] px-3 py-1.5 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-[11px] font-mono text-cyan-400/40 shadow-sm transition-transform duration-100 ease-out flex items-center gap-2"
                    style={{
                        transform: `translate3d(${smoothMouse.x * 0.5}px, ${-smoothScroll * 0.22}px, 0)`
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50"></span>
                    <span>&lt;RedHat OpenShift /&gt;</span>
                </div>
            </div>

            {/* Layer 5: Dynamic Cursor Spotlight Follower */}
            <div 
                className="absolute inset-0 opacity-60 sm:opacity-75 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(550px circle at ${smoothMouse.rawX || 250}px ${smoothMouse.rawY || 250}px, rgba(15, 98, 254, 0.08), transparent 80%)`
                }}
            />

            {/* Subtle Horizon Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>
    );
};

export default ParallaxBackground;
