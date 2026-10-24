import React, { useState, useRef } from 'react';

const SpotlightCard = ({ 
    children, 
    className = '', 
    spotlightColor = 'rgba(59, 130, 246, 0.12)',
    glowVariant = 'card-glow-blue'
}) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setMousePos({ x: -1000, y: -1000 });
            }}
            className={`relative overflow-hidden group fabulous-card ${glowVariant} ${className}`}
        >
            {/* Interactive Spotlight Follower */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 75%)`
                }}
            />

            {/* Subtle Diagonal Shimmer Glint Sweep on Hover */}
            <div 
                className="pointer-events-none absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.04) 50%, transparent 60%)',
                    transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between">
                {children}
            </div>
        </div>
    );
};

export default SpotlightCard;
