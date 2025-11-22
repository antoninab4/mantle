import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Layers, Cpu, GraduationCap, Users } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Профиль', path: '/', icon: Home },
  { label: 'Технологии', path: '/tech', icon: Cpu },
  { label: 'Экосистема', path: '/ecosystem', icon: Layers },
  { label: 'Курс', path: '/education', icon: GraduationCap },
  { label: 'Wings Team', path: '/community', icon: Users },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pop-bg text-white flex font-sans selection:bg-pop-purple selection:text-white">
      
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-pop-bg border-r-2 border-pop-gray fixed h-full z-20 p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-12 h-12 rounded-xl bg-pop-purple border-b-4 border-pop-purpleDark flex items-center justify-center text-xl font-black">
                W
            </div>
            <div>
                <h1 className="text-xl font-black text-white leading-none">WINGS<br/>NODE</h1>
            </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-3">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-4 rounded-2xl font-bold uppercase tracking-wide transition-all border-2
                 ${isActive
                    ? 'bg-pop-cyan/20 border-pop-cyan text-pop-cyan'
                    : 'border-transparent text-gray-400 hover:bg-pop-gray hover:text-white'
                 }`
              }
            >
              <item.icon strokeWidth={3} className="w-6 h-6" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-auto pt-6">
           <a href="https://t.me/WingsNodeTeam" target="_blank" rel="noreferrer" className="block w-full py-4 bg-pop-purple border-b-4 border-pop-purpleDark rounded-2xl font-black uppercase text-center hover:brightness-110 transition-all active:border-b-0 active:translate-y-1">
              Join TG
           </a>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 bg-pop-bg border-b-2 border-pop-gray z-50 flex items-center justify-between px-6">
        <div className="font-black text-xl">WINGS NODE</div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 bg-pop-card rounded-xl border-2 border-pop-gray">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-pop-bg pt-24 px-6 pb-6 flex flex-col">
            <nav className="space-y-3 flex-1">
            {NAV_ITEMS.map((item) => (
                <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                    `flex items-center gap-4 px-6 py-5 rounded-2xl font-black uppercase border-2
                    ${isActive
                        ? 'bg-pop-cyan border-pop-cyanDark text-white'
                        : 'bg-pop-card border-pop-gray text-gray-400'
                    }`
                }
                >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
                </NavLink>
            ))}
            </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-72 pt-24 md:pt-8 px-4 md:px-10 max-w-[1600px] mx-auto w-full">
         {children}
      </main>
    </div>
  );
};

export default Layout;