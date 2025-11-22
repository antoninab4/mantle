import React from 'react';
import { UserState } from '../../types';
import { Card3D, Button3D, ProgressBar } from '../ui/GameUI';
import { LEVELS } from '../../constants';
import { resetAccount } from '../../utils/storage';
import Certificate from './Certificate';
import { LogOut, Award, Trophy, Download, Share2, Send } from 'lucide-react';
import { COURSE_MODULES } from '../../data/courseContent';

const ProfileView: React.FC<{ user: UserState }> = ({ user }) => {
    const currentLevel = LEVELS.find(l => user.xp >= l.minXp && (LEVELS[LEVELS.indexOf(l) + 1]?.minXp > user.xp || !LEVELS[LEVELS.indexOf(l) + 1])) || LEVELS[0];
    const nextLevel = LEVELS[LEVELS.indexOf(currentLevel) + 1];
    const TOTAL_LESSONS = COURSE_MODULES.reduce((acc, module) => acc + module.lessons.length, 0);
    const completedCount = user.completedLessonIds.length;
    const isCourseCompleted = completedCount >= TOTAL_LESSONS;
    const shareText = `Я успешно прошел курс "Архитектор Экосистемы Mantle" в академии WingsNodeTeam! 🚀 Мой результат: ${user.xp} XP. #Mantle #WingsNodeTeam`;
    const telegramUrl = `https://t.me/share/url?url=https://t.me/WingsNodeTeam&text=${encodeURIComponent(shareText)}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8 animate-fade-in">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-black text-white">Твой Профиль</h1>
                <button onClick={resetAccount} className="text-pop-red text-xs font-bold flex items-center gap-1 hover:underline"><LogOut size={14} /> Reset</button>
            </header>
            <div className="mb-8">
                <Card3D color="purple">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-24 bg-pop-bg rounded-full border-4 border-pop-purple flex items-center justify-center text-5xl shadow-glow">{currentLevel.icon}</div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-black text-white">{user.name}</h2>
                            <p className={`text-lg font-bold ${currentLevel.color} mb-2`}>{currentLevel.name}</p>
                            <div className="w-full max-w-sm">
                                <div className="flex justify-between text-xs mb-1 text-gray-400 font-bold"><span>{user.xp} XP</span>{nextLevel && <span>Next: {nextLevel.minXp} XP</span>}</div>
                                {nextLevel ? <ProgressBar percentage={(user.xp - currentLevel.minXp) / (nextLevel.minXp - currentLevel.minXp) * 100} color="bg-pop-purple" /> : <ProgressBar percentage={100} color="bg-pop-yellow" />}
                            </div>
                        </div>
                        <div className="text-center px-6 border-l-2 border-pop-border"><div className="text-3xl font-black text-pop-yellow">{user.streak} 🔥</div><div className="text-xs text-gray-500 uppercase font-bold">Day Streak</div></div>
                    </div>
                </Card3D>
            </div>
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-4"><Award className={isCourseCompleted ? "text-pop-yellow" : "text-gray-600"} size={32} /><h3 className="text-2xl font-black text-white">Сертификат Mantle</h3></div>
                {isCourseCompleted ? (
                    <div className="animate-bounce-in">
                        <Certificate name={user.name} date={new Date().toLocaleDateString()} />
                        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                            <Button3D variant="yellow" onClick={() => window.print()} className="flex items-center gap-2"><Download size={18} /> Скачать (PDF)</Button3D>
                            <a href={telegramUrl} target="_blank" rel="noreferrer" className="block"><Button3D variant="cyan" className="flex items-center gap-2 w-full"><Send size={18} /> Поделиться в TG</Button3D></a>
                            <a href={twitterUrl} target="_blank" rel="noreferrer" className="block"><Button3D variant="gray" className="flex items-center gap-2 w-full"><Share2 size={18} /> Поделиться в X</Button3D></a>
                        </div>
                    </div>
                ) : (
                    <div className="bg-pop-card p-8 rounded-2xl border-2 border-dashed border-gray-700 text-center">
                        <div className="text-4xl grayscale opacity-30 mb-4">📜</div>
                        <h4 className="text-xl font-bold text-gray-400 mb-2">Сертификат заблокирован</h4>
                        <p className="text-sm text-gray-500">Пройдите все уроки ({completedCount}/{TOTAL_LESSONS}), чтобы получить сертификат.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileView;