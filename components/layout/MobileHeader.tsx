import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, User, Zap, Users } from 'lucide-react';

const MobileHeader: React.FC = () => {
    const NAV_ITEMS = [
        { path: "/", icon: Map },
        { path: "/ecosystem", icon: Zap },
        { path: "/profile", icon: User },
        { path: "/community", icon: Users },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-pop-bg border-t-2 border-pop-border z-50 pb-safe">
            <div className="flex justify-around p-2">
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `
                            p-4 rounded-xl transition-all
                            ${isActive ? 'text-pop-cyan bg-pop-card' : 'text-gray-500'}
                        `}
                    >
                        <item.icon strokeWidth={3} size={28} />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default MobileHeader;
