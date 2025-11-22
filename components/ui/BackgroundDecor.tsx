
import React from 'react';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* 1. Grid Overlay (Base Texture) */}
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />

        {/* 2. Deep Atmosphere Glows */}
        <div className="absolute top-[-30%] left-[20%] w-[100vw] h-[100vw] bg-pop-purple/5 rounded-full blur-[150px] animate-pulse-glow" />
        
        {/* 3. WATERMARK: GIANT MANTLE TEXT */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center z-[-1]">
             <span className="text-[22vw] font-black text-white opacity-[0.03] tracking-tighter leading-none select-none blur-[2px] font-sans">
                MANTLE
             </span>
        </div>

        {/* 4. THE OBJECT: "MANTLE SINGULARITY" (Minimalist High-Tech Sphere) */}
        <svg className="absolute top-1/2 right-[-20%] transform -translate-y-1/2 w-[1200px] h-[1200px] opacity-100 animate-float" viewBox="0 0 1000 1000">
            <defs>
                {/* Sphere Gradient: Deep Dark Glass */}
                <radialGradient id="glassSphere" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.1" /> {/* Purple Highlight */}
                    <stop offset="50%" stopColor="#0f172a" stopOpacity="0.6" /> {/* Body */}
                    <stop offset="100%" stopColor="#000" stopOpacity="0.9" /> {/* Shadow */}
                </radialGradient>

                {/* Rim Light (Inner Glow) */}
                <radialGradient id="rimLight" cx="50%" cy="50%" r="50%">
                    <stop offset="85%" stopColor="transparent" />
                    <stop offset="100%" stopColor="rgba(28, 176, 246, 0.3)" /> {/* Cyan Rim */}
                </radialGradient>

                {/* Orbit Gradient */}
                <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1cb0f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ce82ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1cb0f6" stopOpacity="0" />
                </linearGradient>

                {/* Filters */}
                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            <g transform="translate(500, 500)">
                {/* Back Orbit Arc (Thin) */}
                <ellipse rx="450" ry="120" fill="none" stroke="url(#orbitGrad)" strokeWidth="2" opacity="0.3" transform="rotate(-15)" />

                {/* MAIN SPHERE */}
                <circle cx="0" cy="0" r="250" fill="url(#glassSphere)" />
                <circle cx="0" cy="0" r="250" fill="url(#rimLight)" />
                
                {/* Core Glow (Inside) */}
                <circle cx="0" cy="0" r="100" fill="#1cb0f6" opacity="0.05" filter="url(#softGlow)" />

                {/* Front Orbit Arc (Bright) */}
                <path d="M -435 -35 A 450 120 0 0 0 435 35" fill="none" stroke="url(#orbitGrad)" strokeWidth="4" transform="rotate(-15)" filter="url(#softGlow)" opacity="0.9" />
                
                {/* Tech Detail: Floating Particle on Orbit */}
                <circle cx="435" cy="35" r="6" fill="white" filter="url(#softGlow)" transform="rotate(-15)" />
            </g>
        </svg>

        {/* 5. Subtle Shooting Star (Rare animation) */}
        <div className="absolute top-[10%] left-[10%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent opacity-30 rotate-45 animate-pulse" />
    </div>
  );
};

export default BackgroundDecor;
