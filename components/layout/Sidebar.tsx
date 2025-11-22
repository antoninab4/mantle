
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, User, Zap, Users } from 'lucide-react';

const Sidebar: React.FC = () => {
    const NAV_ITEMS = [
        { path: "/", label: "Обучение", icon: Map },
        { path: "/ecosystem", label: "Alpha", icon: Zap },
        { path: "/profile", label: "Профиль", icon: User },
        { path: "/community", label: "Wings", icon: Users },
    ];

    return (
        <aside className="hidden md:flex flex-col w-72 bg-slate-950/20 backdrop-blur-xl border-r border-white/10 fixed h-full z-20 p-4 overflow-y-auto no-scrollbar shadow-2xl">
            {/* Logo */}
            <div className="mb-8 px-4 mt-4">
                <div className="inline-block px-2 py-1 bg-white/5 rounded-lg border border-white/10 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-pop-cyan">v2.0 Beta</span>
                </div>
                <h1 className="text-3xl font-black text-white tracking-tighter leading-none drop-shadow-lg">
                    MANTLE<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pop-cyan to-pop-purple">ACADEMY</span>
                </h1>
                <p className="text-xs text-gray-400 font-bold mt-2 opacity-80 pl-1 border-l-2 border-pop-purple">by WingsNodeTeam</p>
            </div>

            {/* Nav */}
            <nav className="space-y-3 flex-1">
                {NAV_ITEMS.map((item) => (
                    <NavLink 
                        key={item.path} 
                        to={item.path}
                        className={({ isActive }) => `
                            flex items-center gap-4 px-4 py-4 rounded-2xl font-extrabold uppercase tracking-wide transition-all border-2
                            ${isActive 
                                ? 'bg-pop-cyan/20 border-pop-cyan text-pop-cyan shadow-[0_0_20px_rgba(28,176,246,0.4)]' 
                                : 'border-transparent hover:bg-white/5 text-gray-400 hover:text-white'}
                        `}
                    >
                        <item.icon strokeWidth={3} className="w-6 h-6" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
            
            {/* Mini Footer */}
            <div className="mt-auto pt-6 border-t border-white/10">
                <div className="p-4 rounded-xl bg-gradient-to-r from-pop-purple/20 to-transparent border border-white/5">
                    <p className="text-xs text-gray-300 font-bold mb-1">Нужна помощь?</p>
                    <a href="https://t.me/wnt_admin_help" target="_blank" className="text-xs text-pop-cyan hover:underline">Написать админу &rarr;</a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
