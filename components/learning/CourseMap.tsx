import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSE_MODULES } from '../../data/courseContent';
import { UserState, Lesson } from '../../types';
import { Card3D, Button3D, ProgressBar } from '../ui/GameUI';
import { Lock, Check, Star, Play } from 'lucide-react';
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

        // Logic to update user state
        const isNewCompletion = !user.completedLessonIds.includes(activeLesson.id);
        
        const newCompleted = isNewCompletion 
            ? [...user.completedLessonIds, activeLesson.id] 
            : user.completedLessonIds;
            
        // XP logic: Full XP only for first time, else 10% for practice
        const xpToAdd = isNewCompletion ? earnedXp : Math.floor(earnedXp * 0.1);

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

    // Calculate total lessons dynamically for progress tracking
    const totalLessonsInCourse = COURSE_MODULES.reduce((acc, module) => acc + module.lessons.length, 0);
    const completedCount = user.completedLessonIds.length;
    const isCertificateUnlocked = completedCount >= totalLessonsInCourse;

    return (
        <div className="max-w-md mx-auto space-y-12 py-8 px-4">
            {/* XP Header */}
            <div className="bg-pop-card rounded-2xl p-4 border-2 border-pop-border flex items-center gap-4 sticky top-4 z-30 shadow-3d">
                <div className="flex-1">
                     <div className="flex justify-between text-xs font-bold uppercase mb-1 text-gray-400">
                         <span>Level {user.level}</span>
                         <span>{user.xp} XP</span>
                     </div>
                     <ProgressBar percentage={(user.xp % 500) / 500 * 100} color="bg-pop-yellow" height="h-3" />
                </div>
                <div className="text-2xl">🔥 {user.streak}</div>
            </div>

            {/* Modules Line */}
            <div className="relative">
                {/* Central Path Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-pop-card -ml-2 rounded-full z-0 border-x-2 border-pop-border" />

                {COURSE_MODULES.map((module, mIdx) => {
                    const isLocked = user.xp < module.unlockXp;
                    const lessonsCompleted = module.lessons.filter(l => user.completedLessonIds.includes(l.id)).length;
                    const totalLessons = module.lessons.length;
                    const isModuleComplete = lessonsCompleted === totalLessons;

                    return (
                        <div key={module.id} className="relative z-10 mb-12">
                            {/* Module Header Bubble */}
                            <div className={`mx-auto w-48 text-center py-2 rounded-xl border-2 mb-6 font-black text-sm uppercase tracking-wider shadow-3d relative ${isLocked ? 'bg-pop-card border-pop-border text-gray-500' : 'bg-pop-purple border-pop-purpleDark text-white'}`}>
                                {module.title}
                                {isLocked && <div className="absolute -top-3 -right-3 bg-pop-border text-gray-400 px-2 py-1 rounded text-[10px] border border-gray-600">Need {module.unlockXp} XP</div>}
                            </div>

                            {/* Lessons Stack */}
                            <div className="flex flex-col items-center gap-4">
                                {module.lessons.map((lesson, lIdx) => {
                                    const isCompleted = user.completedLessonIds.includes(lesson.id);
                                    
                                    // Determine button color and state
                                    let variant: any = 'cyan';
                                    if (isLocked) variant = 'gray';
                                    else if (isCompleted) variant = 'green';
                                    else if (lIdx === 0 || user.completedLessonIds.includes(module.lessons[lIdx - 1].id)) variant = 'yellow'; // Next available
                                    else variant = 'gray'; // Future lesson in unlocked module

                                    const isDisabled = variant === 'gray' && !isCompleted;

                                    // RENDER COMPLETED LESSON AS SMALL DOT
                                    if (isCompleted) {
                                        return (
                                            <div key={lesson.id} className="relative group my-2">
                                                <div 
                                                    onClick={() => setActiveLesson(lesson)}
                                                    className="w-12 h-12 rounded-full bg-pop-bg border-4 border-pop-green flex items-center justify-center cursor-pointer transition-transform hover:scale-110 shadow-[0_0_15px_#58cc02] animate-bounce-in relative"
                                                >
                                                    <Check className="text-pop-green" size={20} strokeWidth={4} />
                                                    {/* One-time Shockwave Effect */}
                                                    <div className="absolute inset-0 rounded-full border-4 border-pop-green animate-shockwave pointer-events-none"></div>
                                                </div>
                                                {/* Tooltip */}
                                                <div className="absolute left-16 top-2 bg-pop-card border border-pop-green p-2 rounded-lg w-32 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                                    <div className="font-bold text-xs text-pop-green">Пройдено</div>
                                                    <div className="text-[10px] text-gray-400 leading-tight">{lesson.title}</div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    // RENDER ACTIVE/LOCKED LESSON AS BIG BUTTON
                                    return (
                                        <div key={lesson.id} className="relative group">
                                            <button
                                                disabled={isDisabled}
                                                onClick={() => setActiveLesson(lesson)}
                                                className={`
                                                    w-20 h-20 rounded-full border-4 flex items-center justify-center transition-transform active:scale-95 relative z-10 shadow-3d-lg
                                                    ${isDisabled ? 'bg-pop-card border-pop-border cursor-not-allowed' : ''}
                                                    ${variant === 'yellow' ? 'bg-pop-yellow border-pop-yellowDark animate-pulse-glow' : ''}
                                                    ${variant === 'cyan' ? 'bg-pop-cyan border-pop-cyanDark' : ''}
                                                    ${variant === 'gray' ? 'bg-pop-card border-pop-border' : ''}
                                                `}
                                            >
                                                {isLocked ? <Lock className="text-gray-500" /> : 
                                                 <Star className={variant === 'yellow' ? 'text-black fill-black' : 'text-white'} size={32} strokeWidth={3} />}
                                            </button>

                                            {/* Popover info */}
                                            <div className="absolute left-24 top-4 bg-pop-card border-2 border-pop-border p-3 rounded-xl w-40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                                <div className="font-bold text-sm leading-tight mb-1">{lesson.title}</div>
                                                <div className="text-[10px] text-pop-yellow font-black">+{lesson.xpReward} XP</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

                {/* Final Trophy */}
                <div 
                    onClick={() => isCertificateUnlocked && navigate('/profile')}
                    className={`flex flex-col items-center relative z-10 pb-12 transition-transform ${isCertificateUnlocked ? 'cursor-pointer hover:scale-105' : ''}`}
                >
                     <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center text-6xl shadow-3d-xl transition-all ${isCertificateUnlocked ? 'bg-gradient-to-b from-yellow-300 to-yellow-500 border-yellow-600 animate-bounce' : 'bg-gray-700 border-gray-800 grayscale opacity-50'}`}>
                         🏆
                     </div>
                     <div className="bg-pop-card px-4 py-2 rounded-lg border border-pop-border mt-4 text-xs text-gray-500 font-bold">
                         {isCertificateUnlocked ? "Нажми чтобы забрать!" : "Сертификат (Финиш)"}
                     </div>
                </div>
            </div>

            {/* Modal Player */}
            {activeLesson && (
                <LessonPlayer 
                    lesson={activeLesson}
                    onClose={() => setActiveLesson(null)}
                    onComplete={handleComplete}
                />
            )}
        </div>
    );
};

export default CourseMap;