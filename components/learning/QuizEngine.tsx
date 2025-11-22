import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import { Button3D, ProgressBar } from '../ui/GameUI';
import { Heart, CheckCircle, HelpCircle, XCircle, RotateCcw } from 'lucide-react';

interface QuizEngineProps {
    questions: QuizQuestion[];
    onComplete: (correctCount: number, heartsLeft: number) => void;
    onFail: () => void;
}

const QuizEngine: React.FC<QuizEngineProps> = ({ questions, onComplete, onFail }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hearts, setHearts] = useState(3);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);

    const currentQ = questions[currentIndex];

    const handleCheck = () => {
        if (selectedOption === null) return;
        const correct = selectedOption === currentQ.correctAnswer;
        setIsCorrect(correct);
        setIsAnswered(true);
        if (correct) setCorrectCount(prev => prev + 1);
        else setHearts(prev => prev - 1);
    };

    const handleNext = () => {
        if (hearts === 0) { onFail(); return; }
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            onComplete(correctCount, hearts);
        }
    };

    // If failed, show failure state within the card
    if (hearts === 0) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 animate-bounce-in">
                <div className="text-8xl mb-6 animate-pulse">💔</div>
                <h2 className="text-3xl font-black text-pop-red mb-4">Поражение!</h2>
                <p className="text-gray-400 mb-8 max-w-xs mx-auto">К сожалению, жизни закончились. Попробуйте изучить теорию еще раз.</p>
                <Button3D variant="red" fullWidth onClick={onFail} size="lg" className="shadow-xl shadow-red-900/40 max-w-xs">
                    <RotateCcw size={20} /> Начать заново
                </Button3D>
            </div>
        );
    }

    // Flex Column Layout to fit inside LessonPlayer's Card
    return (
        <div className="h-full flex flex-col animate-fade-in">
            
            {/* Header: Progress */}
            <div className="bg-slate-900/50 border-b border-white/5 px-6 py-4 shrink-0">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Вопрос {currentIndex + 1} / {questions.length}</span>
                    <div className="flex items-center gap-1 text-pop-red font-black text-lg filter drop-shadow-glow">
                        <Heart size={20} fill="currentColor" className="animate-pulse" /> {hearts}
                    </div>
                </div>
                <ProgressBar percentage={((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100} color="bg-pop-green" height="h-3" />
            </div>

            {/* Content: Scrollable Question */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-xl font-black text-white mb-8 leading-snug drop-shadow-md">
                        {currentQ.question}
                    </h3>

                    <div className="space-y-3">
                        {currentQ.options.map((option, idx) => {
                            let styleClass = "bg-pop-card border-2 border-pop-border text-gray-300 hover:border-gray-500";
                            let icon = null;

                            if (selectedOption === idx && !isAnswered) {
                                styleClass = "bg-pop-cyan/20 border-pop-cyan text-white shadow-[0_0_15px_rgba(28,176,246,0.3)] transform scale-[1.02]";
                            }

                            if (isAnswered) {
                                if (idx === currentQ.correctAnswer) {
                                    styleClass = "bg-green-500/20 border-pop-green text-white shadow-[0_0_15px_rgba(88,204,2,0.3)]";
                                    icon = <CheckCircle size={24} className="text-pop-green" />;
                                } else if (selectedOption === idx && !isCorrect) {
                                    styleClass = "bg-red-500/20 border-pop-red text-white";
                                    icon = <XCircle size={24} className="text-pop-red" />;
                                } else {
                                    styleClass = "opacity-40 border-transparent";
                                }
                            }

                            return (
                                <button 
                                    key={idx} 
                                    disabled={isAnswered} 
                                    onClick={() => setSelectedOption(idx)} 
                                    className={`w-full p-4 rounded-xl font-bold text-left transition-all duration-200 flex items-center justify-between relative overflow-hidden ${styleClass}`}
                                >
                                    <span className="z-10 relative">{option}</span>
                                    {icon && <div className="animate-bounce-in">{icon}</div>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Footer: Actions (Static at bottom of card) */}
            <div className="bg-slate-900/90 border-t border-white/10 p-4 shrink-0 backdrop-blur-md">
                <div className="max-w-md mx-auto w-full space-y-4">
                    {isAnswered && (
                        <div className={`p-3 rounded-xl border animate-slide-up backdrop-blur-md shadow-lg ${isCorrect ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
                            <div className="flex items-start gap-3">
                                {isCorrect ? <CheckCircle className="text-pop-green shrink-0 mt-1" size={20}/> : <HelpCircle className="text-pop-red shrink-0 mt-1" size={20}/>}
                                <div>
                                    <div className={`font-black text-sm uppercase mb-1 ${isCorrect ? 'text-pop-green' : 'text-pop-red'}`}>
                                        {isCorrect ? "Верно!" : "Ошибка"}
                                    </div>
                                    <div className="text-xs text-gray-300 leading-relaxed opacity-90">{currentQ.explanation}</div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <Button3D 
                        fullWidth 
                        size="lg" 
                        variant={!isAnswered ? "cyan" : (isCorrect ? "green" : "gray")} 
                        disabled={selectedOption === null && !isAnswered} 
                        onClick={!isAnswered ? handleCheck : handleNext}
                        className="shadow-xl"
                    >
                        {!isAnswered ? "ПРОВЕРИТЬ ОТВЕТ" : (currentIndex < questions.length - 1 ? "СЛЕДУЮЩИЙ ВОПРОС" : "ЗАВЕРШИТЬ ТЕСТ")}
                    </Button3D>
                </div>
            </div>
        </div>
    );
};

export default QuizEngine;