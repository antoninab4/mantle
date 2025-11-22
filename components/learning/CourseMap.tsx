import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSE_MODULES } from '../../data/courseContent';
import { UserState, Lesson } from '../../types';
import { ProgressBar } from '../ui/GameUI';
import { Lock, Check, Star } from 'lucide-react';
import LessonPlayer from './LessonPlayer';
import { calculateLevel, saveUserState } from '../../utils/storage';

interface CourseMapProps {
    user: UserState;
    onUpdateUser: (newUser: UserState) => void;
}

const CourseMap: React.FC<CourseMapProps> = ({ user, onUpdateUser }) => {
    const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
    const navigate = useNavigate();

    const handleComplete = (earnedXp: number) => {
        if (!activeLesson) return;
        const isNew = !user.completedLessonIds.includes(activeLesson.id);
        const newCompleted = isNew ? [...user.completedLessonIds, activeLesson.id] : user.completedLessonIds;
        const xpToAdd = isNew ? earnedXp : Math.floor(earnedXp * 0.1);
        const newUserState = {
            ...user,
            xp: user.xp + xpToAdd,
            level: calculateLevel(user.xp + xpToAdd),
            completedLessonIds: newCompleted
        };
        onUpdateUser(newUserState);
        saveUserState(newUserState);
        setActiveLesson(null);
    };

    const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
    const isUnlocked = user.completedLessonIds.length >= totalLessons;

    return (
        <div className="max-w-md mx-auto space-y-12 py-8 px-4">
            <div className="bg-pop-card rounded-2xl p-4 border-2 border-pop-border flex items-center gap-4 sticky top-4 z-30 shadow-3d">
                <div className="flex-1">
                     <div className="flex justify-between text-xs font-bold uppercase mb-1 text-gray-400"><span>Level {user.level}</span><span>{user.xp} XP</span></div>
                     <ProgressBar percentage={(user.xp % 500) / 500 * 100} color="bg-pop-yellow" height="h-3" />
                </div>
                <div className="text-2xl">🔥 {user.streak}</div>
            </div>

            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-pop-card -ml-2 rounded-full z-0 border-x-2 border-pop-border" />
                {COURSE_MODULES.map((module) => {
                    const isLocked = user.xp < module.unlockXp;
                    return (
                        <div key={module.id} className="relative z-10 mb-12">
                            <div className={`mx-auto w-48 text-center py-2 rounded-xl border-2 mb-6 font-black text-sm uppercase tracking-wider shadow-3d relative ${isLocked ? 'bg-pop-card border-pop-border text-gray-500' : 'bg-pop-purple border-pop-purpleDark text-white'}`}>
                                {module.title}
                                {isLocked && <div className="absolute -top-3 -right-3 bg-pop-border text-gray-400 px-2 py-1 rounded text-[10px] border border-gray-600">Need {module.unlockXp} XP</div>}
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                {module.lessons.map((lesson, lIdx) => {
                                    const isCompleted = user.completedLessonIds.includes(lesson.id);
                                    let variant: any = 'cyan';
                                    if (isLocked) variant = 'gray';
                                    else if (isCompleted) variant = 'green';
                                    else if (lIdx === 0 || user.completedLessonIds.includes(module.lessons[lIdx - 1].id)) variant = 'yellow';
                                    else variant = 'gray';
                                    
                                    if (isCompleted) {
                                        return (
                                            <div key={lesson.id} className="relative group my-2">
                                                <div onClick={() => setActiveLesson(lesson)} className="w-12 h-12 rounded-full bg-pop-bg border-4 border-pop-green flex items-center justify-center cursor-pointer transition-transform hover:scale-110 shadow-[0_0_15px_#58cc02] animate-bounce-in relative">
                                                    <Check className="text-pop-green" size={20} strokeWidth={4} />
                                                    <div className="absolute inset-0 rounded-full border-4 border-pop-green animate-shockwave pointer-events-none"></div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={lesson.id} className="relative group">
                                            <button disabled={variant === 'gray'} onClick={() => setActiveLesson(lesson)} className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-transform active:scale-95 relative z-10 shadow-3d-lg ${variant === 'yellow' ? 'bg-pop-yellow border-pop-yellowDark animate-pulse-glow' : variant === 'gray' ? 'bg-pop-card border-pop-border cursor-not-allowed' : 'bg-pop-cyan border-pop-cyanDark'}`}>
                                                {isLocked ? <Lock className="text-gray-500" /> : <Star className={variant === 'yellow' ? 'text-black fill-black' : 'text-white'} size={32} strokeWidth={3} />}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
                <div onClick={() => isUnlocked && navigate('/profile')} className={`flex flex-col items-center relative z-10 pb-12 transition-transform ${isUnlocked ? 'cursor-pointer hover:scale-105' : ''}`}>
                     <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center text-6xl shadow-3d-xl transition-all ${isUnlocked ? 'bg-gradient-to-b from-yellow-300 to-yellow-500 border-yellow-600 animate-bounce' : 'bg-gray-700 border-gray-800 grayscale opacity-50'}`}>🏆</div>
                     <div className="bg-pop-card px-4 py-2 rounded-lg border border-pop-border mt-4 text-xs text-gray-500 font-bold">{isUnlocked ? "Нажми чтобы забрать!" : "Сертификат (Финиш)"}</div>
                </div>
            </div>
            {activeLesson && <LessonPlayer lesson={activeLesson} onClose={() => setActiveLesson(null)} onComplete={handleComplete} />}
        </div>
    );
};

export default CourseMap;