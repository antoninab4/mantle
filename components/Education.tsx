import React, { useState, useEffect } from 'react';
import { COURSE_MODULES } from '../data/courseIndex';
import { Lesson, UserProfile } from '../types';
import { Lock, Star, Trophy, Check, Play } from 'lucide-react';
import LessonModal from './education/LessonModal';
import { Button3D } from './ui/GameUI';

const Education: React.FC = () => {
  // User Stats State
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('wings_mantle_profile');
    return saved ? JSON.parse(saved) : {
        xp: 0,
        level: 1,
        streak: 1,
        completedLessons: [],
        hearts: 5
    };
  });

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);

  useEffect(() => {
    localStorage.setItem('wings_mantle_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  const handleCompleteLesson = (earnedXp: number) => {
      if (activeLesson && !userProfile.completedLessons.includes(activeLesson.id)) {
          const newXp = userProfile.xp + earnedXp;
          const newLevel = Math.floor(newXp / 500) + 1;
          
          if (newLevel > userProfile.level) setShowLevelUp(true);

          setUserProfile(prev => ({
              ...prev,
              xp: newXp,
              level: newLevel,
              completedLessons: [...prev.completedLessons, activeLesson.id]
          }));
      }
      setActiveLesson(null);
  };

  return (
    <div className="max-w-2xl mx-auto pb-20">
       
       {/* Gamified Header */}
       <div className="sticky top-20 z-30 bg-pop-bg/90 backdrop-blur p-4 mb-8 border-b border-pop-gray flex justify-between items-center rounded-b-2xl">
           <div className="flex items-center gap-2">
               <div className="w-10 h-10 rounded-xl bg-pop-yellow border-b-4 border-pop-yellowDark flex items-center justify-center">
                   <Star className="text-black fill-current" />
               </div>
               <div>
                   <div className="text-xs text-gray-400 font-bold uppercase">XP</div>
                   <div className="font-black text-xl text-pop-yellow">{userProfile.xp}</div>
               </div>
           </div>
           
           <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-pop-purple border-b-4 border-pop-purpleDark flex items-center justify-center">
                   <Trophy className="text-white fill-current" />
               </div>
               <div>
                   <div className="text-xs text-gray-400 font-bold uppercase">Level</div>
                   <div className="font-black text-xl text-pop-purple">{userProfile.level}</div>
               </div>
           </div>
       </div>

       {/* Course Map */}
       <div className="space-y-12 relative">
           {/* Connecting Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-pop-card -ml-2 rounded-full z-0" />

           {COURSE_MODULES.map((module, mIdx) => {
               const isLocked = userProfile.xp < (module.unlockXp || 0);
               
               return (
                   <div key={module.id} className={`relative z-10 transition-all duration-500 ${isLocked ? 'opacity-50 grayscale' : ''}`}>
                       <div className="bg-pop-card border-4 border-pop-gray rounded-3xl p-6 mb-6 text-center shadow-3d max-w-md mx-auto relative overflow-hidden">
                           {isLocked && (
                               <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 backdrop-blur-sm">
                                   <div className="bg-pop-gray p-4 rounded-2xl border-2 border-white/10 flex flex-col items-center">
                                       <Lock size={32} className="text-gray-400 mb-2"/>
                                       <span className="font-bold text-gray-300">Нужно {module.unlockXp} XP</span>
                                   </div>
                               </div>
                           )}
                           
                           <div className="w-20 h-20 mx-auto bg-pop-bg rounded-full flex items-center justify-center mb-4 border-4 border-pop-purple text-pop-purple shadow-inner">
                               {module.icon}
                           </div>
                           <h2 className="text-2xl font-black text-white mb-2">{module.title}</h2>
                           <p className="text-sm text-gray-400 mb-6">{module.description}</p>

                           {/* Lessons Chain */}
                           <div className="space-y-4">
                               {module.lessons.map((lesson, lIdx) => {
                                   const isCompleted = userProfile.completedLessons.includes(lesson.id);
                                   
                                   return (
                                       <button
                                            key={lesson.id}
                                            disabled={isLocked}
                                            onClick={() => setActiveLesson(lesson)}
                                            className={`
                                                w-full flex items-center justify-between p-4 rounded-xl border-b-4 transition-all
                                                ${isCompleted 
                                                    ? 'bg-pop-green border-pop-greenDark text-white' 
                                                    : 'bg-white border-gray-300 text-black hover:bg-gray-50 active:border-b-0 active:translate-y-1'}
                                            `}
                                       >
                                           <div className="flex items-center gap-4">
                                               <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${isCompleted ? 'bg-white/20' : 'bg-gray-200'}`}>
                                                   {isCompleted ? <Check size={20} /> : lIdx + 1}
                                               </div>
                                               <div className="text-left">
                                                   <div className="font-bold text-sm leading-tight">{lesson.title}</div>
                                                   <div className="text-xs opacity-70 font-bold uppercase">{lesson.difficulty}</div>
                                               </div>
                                           </div>
                                           {!isCompleted && <Play size={20} className="opacity-50" />}
                                       </button>
                                   );
                               })}
                           </div>
                       </div>
                   </div>
               );
           })}
       </div>

       {/* Modals */}
       {activeLesson && (
           <LessonModal 
                lesson={activeLesson} 
                onClose={() => setActiveLesson(null)} 
                onComplete={handleCompleteLesson}
           />
       )}

        {/* Level Up Modal */}
        {showLevelUp && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur animate-fade-in">
                <div className="bg-pop-bg max-w-sm w-full p-8 rounded-3xl border-4 border-pop-yellow text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-500/20 animate-pulse" />
                    <div className="relative z-10">
                        <div className="text-6xl mb-4 animate-bounce">🆙</div>
                        <h2 className="text-4xl font-black text-pop-yellow mb-2">LEVEL UP!</h2>
                        <p className="text-white text-xl font-bold mb-6">Вы достигли уровня {userProfile.level}</p>
                        <Button3D fullWidth variant="yellow" onClick={() => setShowLevelUp(false)}>КРУТО!</Button3D>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Education;