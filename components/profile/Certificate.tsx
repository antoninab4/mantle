import React from 'react';

interface CertificateProps { name: string; date: string; }

const Certificate: React.FC<CertificateProps> = ({ name, date }) => {
    return (
        <div id="printable-area" className="relative bg-[#f5f5f5] text-black p-1 border-8 border-double border-pop-purple rounded-xl shadow-2xl max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform certificate-inner">
            <div className="border-2 border-black p-8 md:p-12 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <div className="flex justify-center gap-4 mb-6 opacity-80"><div className="text-4xl">🏛️</div><div className="text-4xl">🎓</div></div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 font-serif text-pop-bg">СЕРТИФИКАТ</h2>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-10">О ПРОХОЖДЕНИИ КУРСА</p>
                <p className="text-lg italic font-serif mb-4">Настоящим подтверждается, что</p>
                <div className="text-3xl md:text-4xl font-black text-pop-purple border-b-2 border-black/20 pb-2 mb-8 inline-block px-8 min-w-[300px]">{name}</div>
                <p className="text-lg italic font-serif mb-8 max-w-lg mx-auto leading-relaxed">Успешно прошел курс <strong>Архитектор Экосистемы Mantle</strong>, продемонстрировав глубокие знания в области Модульного Блокчейна, DeFi и RWA.</p>
                <div className="flex justify-between items-end mt-12 border-t-2 border-black/10 pt-6">
                    <div className="text-left"><div className="font-bold text-sm">WingsNodeTeam</div><div className="text-[10px] uppercase text-gray-500">ИНСТРУКТОР</div></div>
                    <div className="w-16 h-16 bg-pop-cyan rounded-full flex items-center justify-center text-white font-black text-xs border-2 border-black">ПРОВЕРЕНО</div>
                    <div className="text-right"><div className="font-bold text-sm">{date}</div><div className="text-[10px] uppercase text-gray-500">ДАТА</div></div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;