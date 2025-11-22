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

    if (hearts === 0) {
        return (
            <div className="text-center py-8 animate-bounce-in">
                <div className="text-8xl mb-6 animate-pulse">💔</div>
                <h2 className="text-3xl font-black text-pop-red mb-4">Поражение!</h2>
                <Button3D variant="red" fullWidth onClick={onFail}><RotateCcw size={20} /> Начать заново</Button3D>
            </div>
        );
    }

    return (
        <div className="pb-24">
            <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase">Вопрос {currentIndex + 1} из {questions.length}</span>
                    <div className="flex items-center gap-1 text-pop-red font-black"><Heart size={16} fill="currentColor" /> {hearts}</div>
                </div>
                <ProgressBar percentage={((currentIndex) / questions.length) * 100} color="bg-pop-green" height="h-2" />
            </div>

            <h3 className="text-xl md:text-2xl font-black text-white mb-6 leading-snug">{currentQ.question}</h3>

            <div className="space-y-3 mb-8">
                {currentQ.options.map((option, idx) => {
                    let styleClass = "bg-pop-bg border-2 border-pop-border text-gray-300 hover:bg-pop-card";
                    if (selectedOption === idx && !isAnswered) styleClass = "bg-pop-cyan/10 border-pop-cyan text-pop-cyan";
                    if (isAnswered) {
                        if (idx === currentQ.correctAnswer) styleClass = "bg-pop-green border-pop-greenDark text-white";
                        else if (selectedOption === idx && !isCorrect) styleClass = "bg-pop-red border-pop-redDark text-white opacity-50";
                        else styleClass = "opacity-30 border-transparent grayscale";
                    }
                    return (
                        <button key={idx} disabled={isAnswered} onClick={() => setSelectedOption(idx)} className={`w-full p-4 rounded-xl font-bold text-left transition-all flex items-center justify-between ${styleClass}`}>
                            <span>{option}</span>
                            {isAnswered && idx === currentQ.correctAnswer && <CheckCircle size={20} />}
                            {isAnswered && selectedOption === idx && !isCorrect && <XCircle size={20} />}
                        </button>
                    );
                })}
            </div>

            {/* Fixed Action Dock */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/90 border-t border-white/10 backdrop-blur-lg z-50">
                <div className="max-w-md mx-auto">
                    {isAnswered && (
                        <div className={`mb-3 p-3 rounded-xl flex items-center gap-3 ${isCorrect ? 'bg-pop-green/20 text-pop-green' : 'bg-pop-red/20 text-pop-red'}`}>
                            {isCorrect ? <CheckCircle size={20}/> : <HelpCircle size={20}/>}
                            <div className="text-xs leading-tight">{currentQ.explanation}</div>
                        </div>
                    )}
                    <Button3D fullWidth size="lg" variant={!isAnswered ? "cyan" : (isCorrect ? "green" : "red")} disabled={selectedOption === null} onClick={!isAnswered ? handleCheck : handleNext}>
                        {!isAnswered ? "ПРОВЕРИТЬ" : (currentIndex < questions.length - 1 ? "СЛЕДУЮЩИЙ" : "ЗАВЕРШИТЬ")}
                    </Button3D>
                </div>
            </div>
        </div>
    );
};

export default QuizEngine;