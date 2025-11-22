import React from 'react';
import { WINGS_LINKS } from '../constants';
import { ExternalLink } from 'lucide-react';

const WingsCommunity: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 animate-fade-in">
        <div className="bg-gradient-to-r from-wings-cyan/10 via-transparent to-wings-purple/10 border border-gray-800 rounded-3xl p-8 md:p-12 text-center mb-12">
             <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-wings-cyan to-wings-purple p-1 mx-auto mb-6 shadow-[0_0_30px_rgba(0,210,255,0.3)]">
               <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xl font-bold text-center leading-none text-white">
                  WINGS<br/>NODE
               </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">WingsNodeTeam</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ваш проводник в мир Web 3.0. Мы создаем качественный контент, пишем гайды по нодам и тестнетам, и помогаем новичкам разобраться в крипте.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WINGS_LINKS.map((link) => (
                <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-wings-cyan hover:bg-gray-800 transition-all duration-300"
                >
                    <div className="p-3 bg-black rounded-lg text-wings-cyan group-hover:text-white group-hover:bg-wings-cyan transition-colors">
                        {link.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            {link.name}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400">{link.description}</p>
                    </div>
                </a>
            ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
            <p>© 2025 WingsNodeTeam. All rights reserved.</p>
            <p>Создано на основе анализа экосистемы Mantle (Ноябрь 2025).</p>
        </div>
    </div>
  );
};

export default WingsCommunity;
