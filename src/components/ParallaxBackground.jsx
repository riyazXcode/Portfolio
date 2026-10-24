import React, { useEffect, useState, useRef } from 'react';

const ParallaxBackground = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
    const [scrollPos, setScrollPos] = useState(0);
    const frameRef = useRef(null);
    const targetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 50;
            const y = (e.clientY / window.innerHeight - 0.5) * 50;
            targetRef.current = { x, y, rawX: e.clientX, rawY: e.clientY };
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                const x = (touch.clientX / window.innerWidth - 0.5) * 40;
                const y = (touch.clientY / window.innerHeight - 0.5) * 40;
                targetRef.current = { x, y, rawX: touch.clientX, rawY: touch.clientY };
            }
        };

        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Smooth interpolation loop (60fps lerp)
        const updateLoop = () => {
            setSmoothMouse((prev) => {
                const dx = targetRef.current.x - prev.x;
                const dy = targetRef.current.y - prev.y;
                return {
                    x: prev.x + dx * 0.08,
                    y: prev.y + dy * 0.08,
                    rawX: targetRef.current.rawX || window.innerWidth / 2,
                    rawY: targetRef.current.rawY || window.innerHeight / 2,
                };
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
            {/* Cyber Grid with 3D Depth Shift */}
            <div 
                className="absolute inset-0 bg-grid-pattern opacity-35 transition-transform duration-150 ease-out"
                style={{
                    transform: `translate3d(${smoothMouse.x * 0.3}px, ${(smoothMouse.y * 0.3) - ((scrollPos * 0.1) % 32)}px, 0)`
                }}
            />

            {/* Subtle Dot Matrix Layer */}
            <div 
                className="absolute inset-0 bg-dot-pattern opacity-20"
                style={{
                    transform: `translate3d(${-smoothMouse.x * 0.2}px, ${-smoothMouse.y * 0.2 - ((scrollPos * 0.06) % 20)}px, 0)`
                }}
            />

            {/* Radial Vignette Mask */}
            <div className="absolute inset-0 bg-radial-vignette" />

            {/* Ambient Nebula 1: IBM Electric Blue (Deep background top-left) */}
            <div 
                className="absolute -top-20 -left-20 w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] rounded-full bg-blue-600/15 blur-[90px] sm:blur-[140px] pointer-events-none transition-transform duration-700 ease-out animate-glow-pulse"
                style={{
                    transform: `translate3d(${smoothMouse.x * 1.1}px, ${smoothMouse.y * 1.1 - scrollPos * 0.12}px, 0)`
                }}
            />

            {/* Ambient Nebula 2: Cyber Emerald (Homelab / Proxmox node center-right) */}
            <div 
                className="absolute top-1/2 -right-20 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] rounded-full bg-emerald-500/12 blur-[100px] sm:blur-[150px] pointer-events-none transition-transform duration-700 ease-out"
                style={{
                    transform: `translate3d(${-smoothMouse.x * 1.2}px, ${-smoothMouse.y * 1.2 - scrollPos * 0.15}px, 0)`
                }}
            />

            {/* Ambient Nebula 3: Anthropic Violet / AI (Bottom-left) */}
            <div 
                className="absolute top-[80%] left-1/4 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-purple-600/10 blur-[100px] sm:blur-[160px] pointer-events-none transition-transform duration-700 ease-out"
                style={{
                    transform: `translate3d(${smoothMouse.x * 0.8}px, ${smoothMouse.y * 0.8 - scrollPos * 0.08}px, 0)`
                }}
            />

            {/* Dynamic Cursor / Touch Spotlight */}
            <div 
                className="absolute inset-0 opacity-60 sm:opacity-75 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(450px sm:650px circle at ${smoothMouse.rawX || 250}px ${smoothMouse.rawY || 250}px, rgba(15, 98, 254, 0.08), transparent 80%)`
                }}
            />

            {/* Subtle Horizon Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>
    );
};

export default ParallaxBackground;
