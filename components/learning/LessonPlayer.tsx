import React, { useState } from 'react';
import { Lesson } from '../../types';
import { Button3D } from '../ui/GameUI';
import { X, BookOpen, Target, Heart, ArrowRight } from 'lucide-react';
import QuizEngine from './QuizEngine';

interface LessonPlayerProps {
    lesson: Lesson;
    onClose: () => void;
    onComplete: (earnedXp: number) => void;
}

type Stage = 'intro' | 'theory' | 'quiz' | 'success';

const LessonPlayer: React.FC<LessonPlayerProps> = ({ lesson, onClose, onComplete }) => {
    const [stage, setStage] = useState<Stage>('intro');
    const [earnedScore, setEarnedScore] = useState(0);
    const [stats, setStats] = useState({ accuracy: 0, bonus: 0 });

    const quizQuestions = lesson.quiz || [];
    const theoryContent = lesson.theoryContent || lesson.content;

    return (
        // FLOATING MODAL CARD ARCHITECTURE
        // This avoids issues with mobile browser address bars by making the window smaller than the screen (85dvh).
        // The buttons are inside the card, so they are never covered by the OS UI.
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            
            {/* The Card Container */}
            <div className="w-full max-w-2xl max-h-[85dvh] bg-slate-950 rounded-3xl shadow-2xl flex flex-col overflow-hidden relative border border-white/10 animate-bounce-in">
                
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-white/10 shrink-0">
                    <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors">
                        <X size={20} />
                    </button>
                    <div className="font-bold text-white truncate px-4 text-sm md:text-base opacity-80">{lesson.title}</div>
                    <div className="w-10" />
                </div>

                {/* Main Content Area (Scrollable) */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-950 relative">
                    
                    {stage === 'quiz' ? (
                        <QuizEngine 
                            questions={quizQuestions}
                            onComplete={(correct, hearts) => {
                                const total = quizQuestions.length;
                                const acc = total > 0 ? correct / total : 0;
                                const base = Math.round(lesson.xpReward * acc);
                                const bonus = hearts * 10;
                                setStats({ accuracy: acc * 100, bonus });
                                setEarnedScore(base + bonus);
                                setStage('success');
                            }}
                            onFail={() => setStage('theory')}
                        />
                    ) : (
                        <div className="p-6 pb-8">
                            {stage === 'intro' && (
                                <div className="text-center py-8">
                                    <div className="w-24 h-24 mx-auto bg-pop-cyan/10 rounded-full flex items-center justify-center mb-6 border-4 border-pop-cyan shadow-[0_0_30px_rgba(28,176,246,0.3)]">
                                        <BookOpen size={40} className="text-pop-cyan" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">{lesson.title}</h2>
                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{lesson.description}</p>
                                    
                                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                                        <div className="bg-pop-card p-4 rounded-2xl border border-white/10">
                                            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">XP Reward</div>
                                            <div className="text-2xl font-black text-pop-yellow drop-shadow-sm">+{lesson.xpReward}</div>
                                        </div>
                                        <div className="bg-pop-card p-4 rounded-2xl border border-white/10">
                                            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Duration</div>
                                            <div className="text-2xl font-black text-pop-cyan drop-shadow-sm">{lesson.duration}</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {stage === 'theory' && (
                                <div className="prose prose-invert prose-lg max-w-none text-gray-200 leading-relaxed animate-slide-up">
                                    {theoryContent}
                                    {lesson.practicalSteps && (
                                        <div className="mt-8 pt-8 border-t border-white/10">
                                            <h3 className="text-xl font-bold text-white mb-4">Практическое задание</h3>
                                            {lesson.practicalSteps}
                                        </div>
                                    )}
                                </div>
                            )}

                            {stage === 'success' && (
                                <div className="text-center py-12 animate-bounce-in">
                                    <div className="text-8xl mb-6 animate-bounce">🎉</div>
                                    <h2 className="text-4xl font-black text-white mb-2">Миссия Пройдена!</h2>
                                    <div className="bg-gradient-to-b from-pop-card to-black p-8 rounded-3xl border-2 border-pop-yellow/50 my-8 shadow-2xl">
                                        <div className="text-sm text-pop-yellow font-bold uppercase tracking-widest">Total XP Earned</div>
                                        <div className="text-7xl font-black text-white mt-2">+{earnedScore}</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                            <Target className="mx-auto text-pop-cyan mb-2"/>
                                            <div className="text-xs text-gray-400 uppercase">Accuracy</div>
                                            <div className="text-xl font-bold text-white">{Math.round(stats.accuracy)}%</div>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                            <Heart className="mx-auto text-pop-red mb-2"/>
                                            <div className="text-xs text-gray-400 uppercase">Bonus</div>
                                            <div className="text-xl font-bold text-white">+{stats.bonus}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer (Actions) - Static inside card */}
                {stage !== 'quiz' && (
                    <div className="bg-slate-900/90 border-t border-white/10 p-4 shrink-0 backdrop-blur-md">
                        <div className="max-w-md mx-auto w-full">
                            {stage === 'intro' && (
                                <Button3D fullWidth size="lg" variant="green" onClick={() => setStage('theory')} className="shadow-xl">
                                    НАЧАТЬ МИССИЮ
                                </Button3D>
                            )}
                            {stage === 'theory' && (
                                <Button3D fullWidth size="lg" variant="cyan" onClick={() => setStage('quiz')} className="shadow-xl flex items-center justify-center gap-3">
                                    К ТЕСТУ <ArrowRight size={24} strokeWidth={3} />
                                </Button3D>
                            )}
                            {stage === 'success' && (
                                <Button3D fullWidth size="lg" variant="yellow" onClick={() => onComplete(earnedScore)} className="shadow-xl">
                                    ЗАБРАТЬ НАГРАДУ
                                </Button3D>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonPlayer;