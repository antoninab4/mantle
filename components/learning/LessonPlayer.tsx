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

    // --- NATIVE SCROLL OVERLAY LAYOUT ---
    return (
        <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col">
            
            {/* Header */}
            <div className="flex-none h-16 px-4 flex items-center justify-between bg-slate-900 border-b border-white/10 z-30">
                <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
                    <X size={20} />
                </button>
                <div className="font-bold text-white truncate max-w-[200px]">{lesson.title}</div>
                <div className="w-10" />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pb-32"> {/* Massive padding bottom */}
                <div className="max-w-2xl mx-auto">
                    
                    {stage === 'intro' && (
                        <div className="text-center py-12">
                            <div className="w-24 h-24 mx-auto bg-pop-cyan/20 rounded-full flex items-center justify-center mb-6 border-4 border-pop-cyan">
                                <BookOpen size={40} className="text-pop-cyan" />
                            </div>
                            <h2 className="text-3xl font-black text-white mb-4">{lesson.title}</h2>
                            <p className="text-gray-300 text-lg mb-8">{lesson.description}</p>
                            <div className="flex justify-center gap-4">
                                <div className="bg-pop-card p-3 rounded-xl border border-white/10">
                                    <div className="text-xs text-gray-500 uppercase">XP Reward</div>
                                    <div className="text-xl font-black text-pop-yellow">+{lesson.xpReward}</div>
                                </div>
                                <div className="bg-pop-card p-3 rounded-xl border border-white/10">
                                    <div className="text-xs text-gray-500 uppercase">Duration</div>
                                    <div className="text-xl font-black text-pop-cyan">{lesson.duration}</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {stage === 'theory' && (
                        <div className="prose prose-invert prose-lg max-w-none text-gray-200 leading-relaxed">
                            {theoryContent}
                        </div>
                    )}

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
                        <div className="text-center py-12">
                            <div className="text-8xl mb-6 animate-bounce">🎉</div>
                            <h2 className="text-4xl font-black text-white mb-2">Миссия Пройдена!</h2>
                            <div className="bg-pop-card p-8 rounded-3xl border-2 border-pop-yellow/50 my-8">
                                <div className="text-sm text-pop-yellow font-bold uppercase">Total XP</div>
                                <div className="text-6xl font-black text-white">+{earnedScore}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/40 p-4 rounded-xl"><Target className="mx-auto text-pop-cyan mb-1"/><div className="text-xl font-bold">{Math.round(stats.accuracy)}%</div></div>
                                <div className="bg-black/40 p-4 rounded-xl"><Heart className="mx-auto text-pop-red mb-1"/><div className="text-xl font-bold">+{stats.bonus}</div></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Fixed Footer (Except Quiz which has internal footer) */}
            {stage !== 'quiz' && (
                <div className="flex-none p-4 bg-slate-900 border-t border-white/10 pb-safe z-30">
                    <div className="max-w-md mx-auto">
                        {stage === 'intro' && <Button3D fullWidth size="lg" variant="green" onClick={() => setStage('theory')}>НАЧАТЬ</Button3D>}
                        {stage === 'theory' && <Button3D fullWidth size="lg" variant="cyan" onClick={() => setStage('quiz')}>К ТЕСТУ <ArrowRight size={20}/></Button3D>}
                        {stage === 'success' && <Button3D fullWidth size="lg" variant="yellow" onClick={() => onComplete(earnedScore)}>ЗАБРАТЬ НАГРАДУ</Button3D>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LessonPlayer;