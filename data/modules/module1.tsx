import React from 'react';
import { Lesson } from '../../types';
import { Layers, Database, Cpu, ArrowRight, Coins, ShieldCheck } from 'lucide-react';

export const MODULE_1_LESSONS: Lesson[] = [
    {
        id: "m1-l1",
        title: "Битва Архитектур",
        xpReward: 300,
        difficulty: 'Novice',
        duration: "2 минуты",
        description: "Почему старые блокчейны медленные, и как Mantle это исправил.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="bg-pop-card p-6 rounded-2xl border-2 border-pop-gray">
                    <h3 className="text-2xl font-black text-pop-cyan mb-4">Проблема "Монолита"</h3>
                    <p className="mb-4">
                        Представьте, что один компьютер пытается сделать всё сразу: 
                        <br/>1. Выполнять программы (Execution)
                        <br/>2. Хранить все файлы (Data Availability)
                        <br/>3. Проверять безопасность (Consensus)
                    </p>
                    <p>Именно так работает Ethereum L1. Это безопасно, но <strong>очень дорого и медленно</strong>.</p>
                </div>
                <div className="bg-pop-card p-6 rounded-2xl border-2 border-pop-purple">
                    <h3 className="text-2xl font-black text-pop-purple mb-4">Решение Mantle: Модульность</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 bg-pop-bg p-3 rounded-xl">
                            <Cpu className="text-pop-yellow" /> <span><strong>Исполнение:</strong> Mantle Network</span>
                        </li>
                        <li className="flex items-center gap-3 bg-pop-bg p-3 rounded-xl">
                            <Database className="text-pop-cyan" /> <span><strong>Данные:</strong> EigenDA</span>
                        </li>
                        <li className="flex items-center gap-3 bg-pop-bg p-3 rounded-xl">
                            <Layers className="text-pop-green" /> <span><strong>Безопасность:</strong> Ethereum</span>
                        </li>
                    </ul>
                </div>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Что делает 'Монолитный' блокчейн неэффективным?",
                options: ["Он пытается делать все задачи одновременно", "Он слишком децентрализован", "У него нет токена", "Использует старый код"],
                correctAnswer: 0,
                explanation: "Монолитная архитектура страдает от перегрузки."
            },
            {
                id: 2,
                question: "Какой компонент отвечает за хранение данных в Mantle?",
                options: ["Dropbox", "EigenDA", "Google Drive", "Mantle Treasury"],
                correctAnswer: 1,
                explanation: "EigenDA делает хранение данных в 100 раз дешевле."
            }
        ]
    },
    {
        id: "m1-l2",
        title: "Секретное оружие: EigenDA",
        xpReward: 350,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "Как сэкономить 99% на комиссиях.",
        content: (
            <div className="space-y-6 text-lg">
                 <h3 className="text-2xl font-black text-white">Магия сжатия данных</h3>
                 <p>Обычные L2 записывают данные транзакций прямо в Ethereum. Это дорого.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="p-4 bg-pop-red/10 border-2 border-pop-red rounded-2xl">
                         <h4 className="font-bold text-pop-red">Другие L2</h4>
                         <p className="text-xl font-black mt-2">$0.50</p>
                     </div>
                     <div className="p-4 bg-pop-green/10 border-2 border-pop-green rounded-2xl">
                         <h4 className="font-bold text-pop-green">Mantle + EigenDA</h4>
                         <p className="text-xl font-black mt-2">$0.001</p>
                     </div>
                 </div>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "На сколько дешевле транзакции в Mantle благодаря EigenDA?",
                options: ["На 10%", "Одинаково", "На 99%", "Дороже"],
                correctAnswer: 2,
                explanation: "Благодаря выносу данных за пределы Ethereum, комиссии снижаются на порядки."
            }
        ]
    },
    {
        id: "m1-l3",
        title: "Казначейство Mantle (Treasury)",
        xpReward: 400,
        difficulty: 'Expert',
        duration: "2 минуты",
        description: "Анализ 'Военного сундука' ($3.15 млрд).",
        content: (
            <div className="space-y-6 text-lg">
                <div className="p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-pop-yellow rounded-2xl">
                    <h3 className="text-3xl font-black text-pop-yellow mb-2">$3.15 Миллиарда</h3>
                    <p>Оценка казначейства Mantle Treasury.</p>
                </div>
                <p>Mantle обладает одним из самых больших казначейств в мире Web3, что дает независимость.</p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Какова оценка казначейства Mantle?",
                options: ["$100 млн", "$500 млн", "$3.15 млрд", "$10 млрд"],
                correctAnswer: 2,
                explanation: "Казначейство Mantle является одним из крупнейших в индустрии."
            }
        ]
    }
];