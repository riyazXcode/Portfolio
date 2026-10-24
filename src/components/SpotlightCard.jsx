import React, { useState, useRef } from 'react';

const SpotlightCard = ({ 
    children, 
    className = '', 
    spotlightColor = 'rgba(59, 130, 246, 0.14)',
    glowVariant = 'card-glow-blue',
    enableTilt = true
}) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setMousePos({ x, y });

        if (enableTilt) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            // 3D Parallax Tilt Calculation: subtle, premium damping (max 5.5 degrees)
            const rotateX = ((y - centerY) / centerY) * -5.5;
            const rotateY = ((x - centerX) / centerX) * 5.5;
            setTilt({ x: rotateX, y: rotateY });
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: '1000px',
                transform: isHovered && enableTilt
                    ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-5px)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
                transition: isHovered 
                    ? 'transform 0.12s ease-out, box-shadow 0.35s ease, border-color 0.35s ease' 
                    : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease',
                transformStyle: 'preserve-3d'
            }}
            className={`relative overflow-hidden group fabulous-card ${glowVariant} ${className}`}
        >
            {/* Interactive Spotlight Follower (Parallax Depth Layer 1) */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 75%)`
                }}
            />

            {/* Diagonal Shimmer Glint Sweep on Hover */}
            <div 
                className="pointer-events-none absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.04) 50%, transparent 60%)',
                    transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease'
                }}
            />

            {/* Content Container (Parallax Depth Layer 2 - Floating Foreground) */}
            <div 
                className="relative z-10 h-full flex flex-col justify-between transition-transform duration-200 ease-out"
                style={{
                    transform: isHovered ? 'translateZ(14px)' : 'translateZ(0px)',
                    transformStyle: 'preserve-3d'
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default SpotlightCard;
