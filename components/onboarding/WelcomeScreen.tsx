import React, { useState } from 'react';
import { Button3D, Card3D, Badge } from '../ui/GameUI';
import { Rocket, ArrowDown, Layers, Coins, Globe } from 'lucide-react';
import BackgroundDecor from '../ui/BackgroundDecor';

interface WelcomeScreenProps {
    onComplete: (name: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim().length > 0) {
            onComplete(name.trim());
        }
    };

    const scrollToContent = () => {
        document.getElementById('about-mantle')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen text-white relative bg-transparent">
            {/* Ensure BackgroundDecor is here for the landing page view, z-0 */}
            <BackgroundDecor />
            
            <div className="relative z-10 overflow-y-auto custom-scrollbar h-screen">
                {/* --- HERO SECTION --- */}
                <section className="min-h-[90vh] flex flex-col items-center justify-center p-4 md:p-8">
                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        
                        {/* Hero Text */}
                        <div className="text-center md:text-left space-y-6 animate-slide-up">
                            <Badge color="purple">Powered by WingsNodeTeam</Badge>
                            
                            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tight drop-shadow-[0_0_35px_rgba(28,176,246,0.6)]">
                                MANTLE <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pop-cyan to-pop-purple">ACADEMY</span>
                            </h1>
                            
                            <p className="text-xl text-gray-200 font-bold max-w-lg mx-auto md:mx-0 leading-relaxed drop-shadow-md border-l-4 border-pop-cyan pl-4">
                                Погрузись в одну из самых богатых L2 экосистем мира. 
                                Изучай <strong>Модульную Архитектуру</strong>, зарабатывай на <strong>mETH</strong> и получай <strong>Реальные Награды</strong>.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-8">
                                <button onClick={scrollToContent} className="text-white/80 font-bold hover:text-white transition-colors flex items-center gap-2 mx-auto md:mx-0 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10">
                                    <ArrowDown className="animate-bounce" />
                                    Узнать больше
                                </button>
                            </div>
                        </div>

                        {/* Login Card */}
                        <div className="w-full max-w-md mx-auto relative animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                            {/* Rocket */}
                            <div className="absolute -top-16 -right-8 text-pop-yellow animate-float hidden md:block z-20 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                                <Rocket size={120} className="transform rotate-12" />
                            </div>

                            <Card3D color="cyan" className="text-center pt-10 pb-10 border-4 shadow-glow bg-slate-900/70 relative z-10 backdrop-blur-2xl">
                                <div className="w-24 h-24 bg-gradient-to-br from-pop-cyan to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-xl">
                                    <span className="text-5xl">🚀</span>
                                </div>
                                
                                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">Начни Игру</h2>
                                <p className="text-gray-300 mb-8 text-sm font-medium">Создай профиль, чтобы сохранять прогресс и получать достижения.</p>

                                <form onSubmit={handleSubmit} className="space-y-6 px-4">
                                    <input 
                                        type="text" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Твоё имя / Никнейм"
                                        className="w-full bg-black/40 border-2 border-white/20 rounded-2xl p-4 text-center font-bold text-white placeholder-gray-500 focus:border-pop-cyan focus:outline-none transition-all text-lg shadow-inner"
                                    />

                                    <Button3D 
                                        fullWidth 
                                        size="lg" 
                                        disabled={name.length === 0}
                                        variant="green"
                                        type="submit"
                                        className="text-xl py-4 shadow-xl hover:scale-105 transition-transform"
                                    >
                                        Поехали!
                                    </Button3D>
                                </form>
                            </Card3D>
                        </div>
                    </div>
                </section>

                {/* --- ABOUT MANTLE SECTION --- */}
                <section id="about-mantle" className="py-24 px-4 bg-black/20 backdrop-blur-sm border-y border-white/5 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">ПОЧЕМУ MANTLE?</h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                                Это не просто очередной блокчейн. Это гигант с казначейством в <span className="text-pop-yellow">$3.15 млрд</span> и уникальными технологиями.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card3D color="cyan" className="h-full bg-slate-900/60 hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border-2 border-pop-cyan text-pop-cyan shadow-[0_0_20px_rgba(28,176,246,0.2)]">
                                    <Layers size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4">Модульность</h3>
                                <p className="text-gray-300 leading-relaxed font-medium">
                                    Mantle разделяет исполнение и хранение данных. Использует <strong>EigenDA</strong> для экономии 99% на комиссиях и <strong>Ethereum</strong> для безопасности.
                                </p>
                            </Card3D>

                            <Card3D color="yellow" className="h-full bg-slate-900/60 hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border-2 border-pop-yellow text-pop-yellow shadow-[0_0_20px_rgba(255,200,0,0.2)]">
                                    <Coins size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4">Treasury</h3>
                                <p className="text-gray-300 leading-relaxed font-medium">
                                    Одно из крупнейших DAO в мире. Казначейство финансирует экосистему, раздает гранты и поддерживает кампании доходности.
                                </p>
                            </Card3D>

                            <Card3D color="purple" className="h-full bg-slate-900/60 hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border-2 border-pop-purple text-pop-purple shadow-[0_0_20px_rgba(206,130,255,0.2)]">
                                    <Globe size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4">RWA & DeFi</h3>
                                <p className="text-gray-300 leading-relaxed font-medium">
                                    Интеграция реальных активов. Торгуйте токенизированными акциями США и получайте доходность с казначейских облигаций.
                                </p>
                            </Card3D>
                        </div>
                    </div>
                </section>

                 {/* Footer */}
                 <div className="text-center text-gray-500 text-sm font-bold py-12 border-t border-white/5 bg-black/40 backdrop-blur-md">
                    <p className="mb-2">Mantle Academy v2.0 Beta</p>
                    <p className="text-pop-purple">Powered by WingsNodeTeam</p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;