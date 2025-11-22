import React from 'react';
import { WINGS_LINKS } from '../../constants';
import { Card3D, Button3D } from '../ui/GameUI';
import { ExternalLink } from 'lucide-react';

const WingsHub: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 animate-fade-in">
            <div className="text-center mb-12">
                <div className="w-32 h-32 bg-pop-purple rounded-3xl mx-auto mb-6 flex items-center justify-center text-5xl font-black text-white border-b-8 border-pop-purpleDark shadow-glow transform -rotate-3">
                    W
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">WingsNodeTeam</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Ваше сообщество для погружения в Web3. Мы пишем гайды по нодам, делаем обзоры тестнетов и помогаем новичкам.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {WINGS_LINKS.map((link, idx) => (
                    <a href={link.url} target="_blank" rel="noreferrer" key={idx} className="group">
                        <Card3D className="h-full transition-transform group-hover:-translate-y-1" color="purple">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-pop-bg rounded-xl text-pop-purple group-hover:text-white group-hover:bg-pop-purple transition-colors">
                                    {link.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white flex items-center gap-2">
                                        {link.name}
                                        <ExternalLink size={14} className="opacity-50" />
                                    </h3>
                                    <p className="text-sm text-gray-400">{link.description}</p>
                                </div>
                            </div>
                        </Card3D>
                    </a>
                ))}
            </div>

            <div className="mt-16 p-8 bg-pop-card rounded-3xl border-2 border-pop-border text-center">
                <h3 className="text-2xl font-black text-pop-cyan mb-4">Хочешь стать автором?</h3>
                <p className="text-gray-400 mb-6">
                    Мы всегда ищем таланты. Если ты разбираешься в DeFi, L2 или нодах — напиши нам.
                </p>
                <a href="https://t.me/wnt_admin_help" target="_blank" rel="noreferrer">
                    <Button3D variant="cyan">Написать админу</Button3D>
                </a>
            </div>
        </div>
    );
};

export default WingsHub;