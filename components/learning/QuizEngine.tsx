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

    // If failed, show the failure screen
    if (hearts === 0) {
        return (
            <div className="text-center py-12 animate-bounce-in">
                <div className="text-8xl mb-6 animate-pulse">💔</div>
                <h2 className="text-3xl font-black text-pop-red mb-4">Поражение!</h2>
                <p className="text-gray-400 mb-8">К сожалению, жизни закончились. Попробуйте изучить теорию еще раз.</p>
                <Button3D variant="red" fullWidth onClick={onFail} size="lg" className="shadow-xl shadow-red-900/40">
                    <RotateCcw size={20} /> Начать заново
                </Button3D>
            </div>
        );
    }

    // Normal Quiz Flow
    return (
        <div className="animate-fade-in">
            {/* Progress Header */}
            <div className="mb-8 sticky top-0 bg-slate-950/90 backdrop-blur py-4 z-10 border-b border-white/5 -mx-2 px-2">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Вопрос {currentIndex + 1} / {questions.length}</span>
                    <div className="flex items-center gap-1 text-pop-red font-black text-lg filter drop-shadow-glow">
                        <Heart size={20} fill="currentColor" className="animate-pulse" /> {hearts}
                    </div>
                </div>
                <ProgressBar percentage={((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100} color="bg-pop-green" height="h-3" />
            </div>

            {/* Question */}
            <h3 className="text-xl md:text-2xl font-black text-white mb-8 leading-snug drop-shadow-md">
                {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-4 mb-8">
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
                            className={`w-full p-5 rounded-2xl font-bold text-left transition-all duration-200 flex items-center justify-between relative overflow-hidden ${styleClass}`}
                        >
                            <span className="z-10 relative">{option}</span>
                            {icon && <div className="animate-bounce-in">{icon}</div>}
                        </button>
                    );
                })}
            </div>

            {/* Floating Action Dock for Quiz */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-safe bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent pt-12">
                <div className="max-w-md mx-auto w-full space-y-4">
                    {isAnswered && (
                        <div className={`p-4 rounded-2xl border animate-slide-up backdrop-blur-md shadow-lg ${isCorrect ? 'bg-green-900/40 border-green-500/30' : 'bg-red-900/40 border-red-500/30'}`}>
                            <div className="flex items-start gap-3">
                                {isCorrect ? <CheckCircle className="text-pop-green shrink-0 mt-1" size={20}/> : <HelpCircle className="text-pop-red shrink-0 mt-1" size={20}/>}
                                <div>
                                    <div className={`font-black text-sm uppercase mb-1 ${isCorrect ? 'text-pop-green' : 'text-pop-red'}`}>
                                        {isCorrect ? "Верно!" : "Ошибка"}
                                    </div>
                                    <div className="text-sm text-gray-200 leading-relaxed opacity-90">{currentQ.explanation}</div>
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
                        className="shadow-2xl"
                    >
                        {!isAnswered ? "ПРОВЕРИТЬ ОТВЕТ" : (currentIndex < questions.length - 1 ? "СЛЕДУЮЩИЙ ВОПРОС" : "ЗАВЕРШИТЬ ТЕСТ")}
                    </Button3D>
                </div>
            </div>
        </div>
    );
};

export default QuizEngine;