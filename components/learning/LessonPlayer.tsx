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
        <div className="fixed inset-0 z-[200] bg-slate-950 font-sans">
            
            {/* 1. Fixed Header - Always on top */}
            <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-4 bg-slate-900/95 backdrop-blur border-b border-white/10 z-40">
                <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <X size={20} />
                </button>
                <div className="font-bold text-white truncate px-4 text-sm md:text-base">{lesson.title}</div>
                <div className="w-10" />
            </div>

            {/* 2. Content Area - Scrollable underneath header and footer */}
            <div className="absolute top-16 bottom-0 left-0 right-0 overflow-y-auto custom-scrollbar bg-slate-950 z-10">
                <div className="p-6 pb-48 max-w-2xl mx-auto"> {/* Massive bottom padding ensuring text clears the floating button */}
                    
                    {stage === 'intro' && (
                        <div className="text-center py-8 animate-fade-in">
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
                        </div>
                    )}

                    {/* Quiz is handled differently as it has its own internal state/scroll, 
                        but we render it here to share the container context if needed, 
                        or we can let it take over. Given the architecture, passing it here works best. */}
                    {stage === 'quiz' && (
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
            </div>

            {/* 3. Floating Action Dock - Fixed at bottom, above content */}
            {stage !== 'quiz' && (
                <div className="absolute bottom-0 left-0 right-0 z-50 p-4 pb-safe bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent pt-12">
                    <div className="max-w-md mx-auto w-full">
                        {stage === 'intro' && (
                            <Button3D fullWidth size="lg" variant="green" onClick={() => setStage('theory')} className="shadow-2xl shadow-green-900/50">
                                НАЧАТЬ МИССИЮ
                            </Button3D>
                        )}
                        {stage === 'theory' && (
                            <Button3D fullWidth size="lg" variant="cyan" onClick={() => setStage('quiz')} className="shadow-2xl shadow-cyan-900/50 flex items-center justify-center gap-3">
                                К ТЕСТУ <ArrowRight size={24} strokeWidth={3} />
                            </Button3D>
                        )}
                        {stage === 'success' && (
                            <Button3D fullWidth size="lg" variant="yellow" onClick={() => onComplete(earnedScore)} className="shadow-2xl shadow-yellow-900/50">
                                ЗАБРАТЬ НАГРАДУ
                            </Button3D>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LessonPlayer;