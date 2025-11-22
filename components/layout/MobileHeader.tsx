
import React, { useState, useEffect } from 'react';
import { Lesson } from '../../types';
import { Button3D, ProgressBar } from '../ui/GameUI';
import { X, BookOpen, Dumbbell, Target, Heart, CheckCircle, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import QuizEngine from './QuizEngine';

interface LessonPlayerProps {
    lesson: Lesson;
    onClose: () => void;
    onComplete: (earnedXp: number) => void;
}

type Stage = 'intro' | 'theory' | 'practical' | 'quiz' | 'success';

const LessonPlayer: React.FC<LessonPlayerProps> = ({ lesson, onClose, onComplete }) => {
    const [stage, setStage] = useState<Stage>('intro');
    const [earnedScore, setEarnedScore] = useState(0);
    const [stats, setStats] = useState({ accuracy: 0, bonus: 0 });

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    // Data extraction
    const quizQuestions = lesson.quiz || [];
    const theoryContent = lesson.theoryContent || lesson.content;
    const practicalContent = lesson.practicalContent || lesson.practicalSteps;
    const hasPractical = !!practicalContent;

    // --- RENDERERS ---

    // 1. INTRO CARD
    const renderIntro = () => (
        <div className="text-center space-y-6 py-8">
            <div className="w-28 h-28 mx-auto bg-black/40 rounded-full flex items-center justify-center border-4 border-pop-cyan shadow-[0_0_30px_rgba(28,176,246,0.4)] animate-float">
                <BookOpen size={48} className="text-pop-cyan" />
            </div>
            
            <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-none">{lesson.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">{lesson.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mt-8">
                <div className="bg-pop-card border border-pop-border p-4 rounded-2xl">
                    <div className="text-xs text-gray-500 font-bold uppercase mb-1">Награда</div>
                    <div className="text-2xl font-black text-pop-yellow">+{lesson.xpReward} XP</div>
                </div>
                <div className="bg-pop-card border border-pop-border p-4 rounded-2xl">
                    <div className="text-xs text-gray-500 font-bold uppercase mb-1">Время</div>
                    <div className="text-2xl font-black text-pop-cyan">{lesson.duration}</div>
                </div>
            </div>
        </div>
    );

    // 2. CONTENT CARD (Theory/Practical)
    const renderContent = () => (
        <div className="space-y-8 py-4">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className={`p-2 rounded-lg ${stage === 'theory' ? 'bg-pop-cyan/20 text-pop-cyan' : 'bg-pop-purple/20 text-pop-purple'}`}>
                    {stage === 'theory' ? <BookOpen size={24}/> : <Dumbbell size={24}/>}
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-wider">
                    {stage === 'theory' ? 'Теория' : 'Практика'}
                </h2>
            </div>

            <div className="prose prose-invert prose-lg max-w-none leading-relaxed text-gray-200">
                {stage === 'theory' ? theoryContent : practicalContent}
            </div>
        </div>
    );

    // 3. SUCCESS CARD
    const renderSuccess = () => (
        <div className="text-center py-12 flex flex-col items-center">
            <div className="text-8xl mb-6 animate-bounce filter drop-shadow-[0_0_20px_rgba(255,200,0,0.5)]">🎉</div>
            <h2 className="text-4xl font-black text-white mb-2">Миссия Выполнена!</h2>
            <p className="text-gray-400 mb-10">Вы успешно освоили материал.</p>

            <div className="bg-pop-card border-2 border-pop-yellow/50 p-8 rounded-3xl w-full max-w-sm relative overflow-hidden mb-8">
                <div className="absolute inset-0 bg-pop-yellow/5" />
                <div className="relative z-10">
                    <div className="text-sm font-bold text-pop-yellow uppercase tracking-widest mb-2">Total XP Earned</div>
                    <div className="text-6xl font-black text-white drop-shadow-md">+{earnedScore}</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10">
                    <Target className="mx-auto text-pop-cyan mb-2" />
                    <div className="text-2xl font-bold text-white">{Math.round(stats.accuracy)}%</div>
                    <div className="text-[10px] uppercase text-gray-500">Точность</div>
                </div>
                <div className="bg-black/40 p-4 rounded-2xl border border-white/10">
                    <Heart className="mx-auto text-pop-red mb-2" />
                    <div className="text-2xl font-bold text-white">+{stats.bonus}</div>
                    <div className="text-[10px] uppercase text-gray-500">Бонус сердец</div>
                </div>
            </div>
        </div>
    );

    // --- MAIN LAYOUT ---
    return (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-md flex flex-col animate-fade-in">
            
            {/* 1. TOP BAR */}
            <div className="flex-none h-16 px-4 flex items-center justify-between z-30">
                <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <X size={20} />
                </button>
                
                {/* Stage Indicator */}
                {stage !== 'intro' && stage !== 'success' && (
                    <div className="flex gap-2">
                        {['theory', 'practical', 'quiz'].map((s) => {
                            if (s === 'practical' && !hasPractical) return null;
                            const isActive = stage === s;
                            return (
                                <div key={s} className={`h-1.5 w-8 rounded-full transition-all ${isActive ? 'bg-pop-cyan shadow-[0_0_10px_#1cb0f6]' : 'bg-white/10'}`} />
                            );
                        })}
                    </div>
                )}
                <div className="w-10" /> {/* Spacer */}
            </div>

            {/* 2. SCROLLABLE CONTENT DECK */}
            {/* This uses absolute positioning to create a scrollable window in the middle */}
            <div className="absolute top-16 bottom-32 left-0 right-0 overflow-y-auto custom-scrollbar px-4 md:px-0">
                <div className="max-w-2xl mx-auto min-h-full">
                    {/* The Card */}
                    <div className="bg-pop-bg border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pop-purple/10 rounded-full blur-3xl -z-10 pointer-events-none" />
                        
                        {/* Render Stage Content */}
                        {stage === 'intro' && renderIntro()}
                        {(stage === 'theory' || stage === 'practical') && renderContent()}
                        {stage === 'success' && renderSuccess()}
                        
                        {/* Quiz is special, it handles its own internal state but renders here */}
                        {stage === 'quiz' && (
                            <QuizEngine 
                                questions={quizQuestions}
                                onComplete={(correctCount, heartsLeft) => {
                                    const total = quizQuestions.length;
                                    const acc = total > 0 ? (correctCount / total) : 0;
                                    const base = Math.round(lesson.xpReward * acc);
                                    const bonus = heartsLeft * 10;
                                    setStats({ accuracy: acc * 100, bonus });
                                    setEarnedScore(base + bonus);
                                    setStage('success');
                                }}
                                onFail={() => setStage('theory')}
                            />
                        )}
                    </div>
                    
                    {/* Space buffer for scrolling text above the floating dock */}
                    <div className="h-12" /> 
                </div>
            </div>

            {/* 3. FLOATING COMMAND DOCK (Bottom) */}
            {/* Physically separated from scroll view to guarantee visibility */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 bg-gradient-to-t from-black via-black/90 to-transparent z-40">
                <div className="max-w-md mx-auto">
                    {stage === 'intro' && (
                        <Button3D fullWidth size="lg" variant="green" onClick={() => setStage('theory')}>
                            НАЧАТЬ МИССИЮ
                        </Button3D>
                    )}

                    {stage === 'theory' && (
                        <Button3D fullWidth size="lg" variant="cyan" onClick={() => setStage(hasPractical ? 'practical' : 'quiz')}>
                            {hasPractical ? "ДАЛЕЕ: ПРАКТИКА" : "ПЕРЕЙТИ К ТЕСТУ"} <ArrowRight size={20} />
                        </Button3D>
                    )}

                    {stage === 'practical' && (
                        <Button3D fullWidth size="lg" variant="purple" onClick={() => setStage('quiz')}>
                            НАЧАТЬ ТЕСТ <ArrowRight size={20} />
                        </Button3D>
                    )}

                    {stage === 'success' && (
                        <Button3D fullWidth size="lg" variant="yellow" onClick={() => onComplete(earnedScore)}>
                            ЗАБРАТЬ НАГРАДУ
                        </Button3D>
                    )}
                    
                    {/* NOTE: QuizEngine renders its own controls inside the dock portal if we were using portals, 
                        but for simplicity, QuizEngine now renders buttons internally OR we can lift state.
                        
                        Actually, for this specific "Dock" architecture, let's let QuizEngine render purely content
                        and we handle buttons here if possible? 
                        
                        Correction: To keep QuizEngine encapsulated, let's allow QuizEngine to render its own buttons 
                        INSIDE the scrollable area? NO, that was the problem.
                        
                        SOLUTION: QuizEngine will accept a `renderFooter` prop or we just hide these buttons 
                        and let QuizEngine render its own 'Floating Dock' inside the component? 
                        
                        Actually, let's hide this dock for 'quiz' and let QuizEngine handle its own floating dock.
                    */}
                </div>
            </div>

        </div>
    );
};

export default LessonPlayer;
