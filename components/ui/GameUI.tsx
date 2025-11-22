import React from 'react';

// --- 3D Button ---
interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'cyan' | 'purple' | 'green' | 'yellow' | 'red' | 'gray' | 'outline';
    fullWidth?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const Button3D: React.FC<Button3DProps> = ({ 
    children, variant = 'cyan', fullWidth = false, size = 'md', className = '', disabled, ...props 
}) => {
    const baseStyles = "relative font-extrabold uppercase tracking-wide rounded-2xl transition-all transform active:translate-y-1 active:border-b-0 focus:outline-none flex items-center justify-center gap-2 backdrop-blur-sm";
    
    const variants = {
        cyan: "bg-pop-cyan border-b-4 border-pop-cyanDark text-white hover:bg-pop-cyanDark shadow-[0_4px_0_rgb(17,142,232)]",
        purple: "bg-pop-purple border-b-4 border-pop-purpleDark text-white hover:bg-pop-purpleDark shadow-[0_4px_0_rgb(166,101,204)]",
        green: "bg-pop-green border-b-4 border-pop-greenDark text-white hover:bg-pop-greenDark shadow-[0_4px_0_rgb(70,163,2)]",
        yellow: "bg-pop-yellow border-b-4 border-pop-yellowDark text-black hover:bg-pop-yellowDark shadow-[0_4px_0_rgb(214,168,0)]",
        red: "bg-pop-red border-b-4 border-pop-redDark text-white hover:bg-pop-redDark shadow-[0_4px_0_rgb(214,42,42)]",
        gray: "bg-slate-800 border-b-4 border-slate-900 text-gray-400 hover:bg-slate-700 shadow-[0_4px_0_rgb(15,23,42)]",
        outline: "bg-transparent border-2 border-white/20 border-b-4 text-gray-300 hover:bg-white/5"
    };

    const sizes = {
        sm: "py-2 px-4 text-xs",
        md: "py-3 px-6 text-sm",
        lg: "py-4 px-8 text-lg"
    };

    const disabledStyle = disabled ? "opacity-50 cursor-not-allowed pointer-events-none filter grayscale" : "";

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabledStyle} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

// --- 3D Card ---
interface Card3DProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    icon?: React.ReactNode;
    color?: 'cyan' | 'purple' | 'green' | 'yellow' | 'red' | 'gray';
}

export const Card3D: React.FC<Card3DProps> = ({ children, className = "", title, icon, color = 'gray' }) => {
    const borderColors = {
        cyan: "border-pop-cyan/50",
        purple: "border-pop-purple/50",
        green: "border-pop-green/50",
        yellow: "border-pop-yellow/50",
        red: "border-pop-red/50",
        gray: "border-white/10"
    };
    
    return (
        <div className={`bg-slate-900/40 backdrop-blur-xl border-2 ${borderColors[color]} border-b-4 rounded-3xl p-6 shadow-xl ${className}`}>
            {(title || icon) && (
                <div className="flex items-center gap-3 mb-4">
                    {icon && <span className={`text-pop-${color === 'gray' ? 'text' : color}`}>{icon}</span>}
                    {title && <h3 className="text-lg font-black uppercase tracking-wide drop-shadow-md">{title}</h3>}
                </div>
            )}
            {children}
        </div>
    );
};

// --- Progress Bar ---
export const ProgressBar: React.FC<{ percentage: number, color?: string, height?: string, showText?: boolean }> = ({ 
    percentage, color = 'bg-pop-green', height = 'h-4', showText = false 
}) => {
    return (
        <div className="relative">
            <div className={`w-full bg-black/40 border border-white/10 rounded-full overflow-hidden ${height}`}>
                <div 
                    className={`${height} ${color} transition-all duration-500 ease-out rounded-full relative shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                    style={{ width: `${Math.max(5, Math.min(100, percentage))}%` }}
                >
                    <div className="absolute top-0.5 left-0.5 right-0.5 h-1/3 bg-white/30 rounded-full" />
                </div>
            </div>
            {showText && (
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white drop-shadow-md">
                    {Math.round(percentage)}%
                </div>
            )}
        </div>
    );
};

// --- Badge ---
export const Badge: React.FC<{ children: React.ReactNode, color?: 'cyan' | 'purple' | 'green' | 'yellow' | 'red' | 'gray', variant?: 'solid' | 'outline' }> = ({ children, color = 'cyan', variant = 'solid' }) => {
    const colors = {
        cyan: "bg-pop-cyan/20 text-pop-cyan border-pop-cyan/50",
        purple: "bg-pop-purple/20 text-pop-purple border-pop-purple/50",
        green: "bg-pop-green/20 text-pop-green border-pop-green/50",
        yellow: "bg-pop-yellow/20 text-pop-yellow border-pop-yellow/50",
        red: "bg-pop-red/20 text-pop-red border-pop-red/50",
        gray: "bg-white/10 text-gray-300 border-white/20",
    };

    return (
        <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border ${colors[color]} backdrop-blur-sm shadow-sm`}>
            {children}
        </span>
    );
};