import React, { useEffect, useState } from 'react';

const ParallaxBackground = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        let frameId;
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 40;
            const y = (clientY / window.innerHeight - 0.5) * 40;
            cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                setMousePos({ x, y });
            });
        };

        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090D16]">
            {/* Ambient Cyber Grid with Parallax Offset */}
            <div 
                className="absolute inset-0 bg-grid-pattern opacity-40 transition-transform duration-300 ease-out"
                style={{
                    transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4 - (scrollPos * 0.15) % 48}px, 0)`
                }}
            />

            {/* Radial Vignette */}
            <div className="absolute inset-0 bg-radial-vignette" />

            {/* Glowing Parallax Orb 1 (Electric Blue - deep background) */}
            <div 
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px] transition-transform duration-700 ease-out"
                style={{
                    transform: `translate3d(${mousePos.x * 1.2}px, ${mousePos.y * 1.2 - scrollPos * 0.2}px, 0)`
                }}
            />

            {/* Glowing Parallax Orb 2 (Emerald / Cyan - Homelab / On-Prem glow) */}
            <div 
                className="absolute top-2/3 right-1/4 w-[450px] h-[450px] rounded-full bg-emerald-500/12 blur-[130px] transition-transform duration-700 ease-out"
                style={{
                    transform: `translate3d(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5 - scrollPos * 0.3}px, 0)`
                }}
            />

            {/* Glowing Parallax Orb 3 (Violet / Claude AI accent glow) */}
            <div 
                className="absolute top-1/2 left-2/3 w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[140px] transition-transform duration-700 ease-out"
                style={{
                    transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8 - scrollPos * 0.1}px, 0)`
                }}
            />

            {/* Cursor Spotlight Follower */}
            <div 
                className="absolute inset-0 opacity-70 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(700px circle at 50% 30%, rgba(20, 101, 255, 0.08), transparent 75%)`
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
