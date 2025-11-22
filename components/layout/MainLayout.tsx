import React from 'react';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import BackgroundDecor from '../ui/BackgroundDecor';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen font-sans selection:bg-pop-purple selection:text-white relative bg-transparent">
            {/* Z-INDEX 0: Background Decor (Images, Grid, Stars) */}
            <BackgroundDecor />
            
            {/* Z-INDEX 20: Sidebar Navigation */}
            <Sidebar />
            
            {/* Z-INDEX 10: Main Content */}
            <main className="md:ml-72 min-h-screen pb-24 md:pb-10 relative z-10">
                {children}
            </main>
            
            {/* Z-INDEX 50: Mobile Header */}
            <MobileHeader />
        </div>
    );
};

export default MainLayout;