
import React from 'react';
import { Lesson } from '../../types';
import { Layers, Database, Cpu, ArrowRight, Coins, ShieldCheck } from 'lucide-react';

// Helper for highlighting text
const Highlight = ({ children }: { children: React.ReactNode }) => <span className="text-pop-cyan font-black">{children}</span>;

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
                    <p>
                        Именно так работает Ethereum L1. Это безопасно, но <strong>очень дорого и медленно</strong>. 
                        Комиссия может достигать $50 в пиковые часы.
                    </p>
                </div>

                <div className="flex justify-center">
                    <ArrowRight className="text-pop-gray w-10 h-10 rotate-90 md:rotate-0" />
                </div>

                <div className="bg-pop-card p-6 rounded-2xl border-2 border-pop-purple">
                    <h3 className="text-2xl font-black text-pop-purple mb-4">Решение Mantle: Модульность</h3>
                    <p className="mb-4">
                        Mantle разбивает эти задачи на разные слои, как в современном ИТ:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 bg-pop-bg p-3 rounded-xl">
                            <Cpu className="text-pop-yellow" />
                            <span><strong>Исполнение:</strong> Mantle Network (быстро считает)</span>
                        </li>
                        <li className="flex items-center gap-3 bg-pop-bg p-3 rounded-xl">
                            <Database className="text-pop-cyan" />
                            <span><strong>Данные:</strong> EigenDA (дешево хранит)</span>
                        </li>
                        <li className="flex items-center gap-3 bg-pop-bg p-3 rounded-xl">
                            <Layers className="text-pop-green" />
                            <span><strong>Безопасность:</strong> Ethereum (гарантирует надежность)</span>
                        </li>
                    </ul>
                </div>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Что делает 'Монолитный' блокчейн неэффективным?",
                options: ["Он пытается делать все задачи одновременно на одном слое", "Он слишком децентрализован", "У него нет токена", "Он использует старый код"],
                correctAnswer: 0,
                explanation: "Монолитная архитектура страдает от перегрузки, так как каждый узел должен делать всё сразу."
            },
            {
                id: 2,
                question: "Какой компонент отвечает за хранение данных в Mantle?",
                options: ["Dropbox", "EigenDA", "Google Drive", "Mantle Treasury"],
                correctAnswer: 1,
                explanation: "EigenDA — это специализированный слой доступности данных, который делает транзакции в 100 раз дешевле."
            }
        ]
    },
    {
        id: "m1-l2",
        title: "Секретное оружие: EigenDA",
        xpReward: 350,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "Как сэкономить 99% на комиссиях с помощью Data Availability.",
        content: (
            <div className="space-y-6 text-lg">
                 <h3 className="text-2xl font-black text-white">Магия сжатия данных</h3>
                 <p>
                     Обычные Rollup-сети (Arbitrum, Optimism) записывают данные транзакций прямо в Ethereum. 
                     Это самая дорогая часть работы L2 (до 80% стоимости комиссии).
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="p-4 bg-pop-red/10 border-2 border-pop-red rounded-2xl">
                         <h4 className="font-bold text-pop-red mb-2">Другие L2</h4>
                         <p className="text-sm">Публикуют данные в Ethereum CallData.</p>
                         <p className="text-xl font-black mt-2">$0.10 - $1.00</p>
                         <p className="text-xs opacity-70">за транзакцию</p>
                     </div>
                     <div className="p-4 bg-pop-green/10 border-2 border-pop-green rounded-2xl">
                         <h4 className="font-bold text-pop-green mb-2">Mantle + EigenDA</h4>
                         <p className="text-sm">Публикуют данные в сеть валидаторов EigenLayer.</p>
                         <p className="text-xl font-black mt-2">$0.001</p>
                         <p className="text-xs opacity-70">за транзакцию</p>
                     </div>
                 </div>

                 <h3 className="text-2xl font-black text-white mt-8">Как это работает?</h3>
                 <p>
                     Используется технология <strong>Erasure Coding</strong> (Коды стирания). Данные разбиваются на мелкие кусочки и раздаются валидаторам. 
                     Даже если часть валидаторов исчезнет, данные можно восстановить.
                 </p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "На сколько примерно дешевле транзакции в Mantle благодаря EigenDA?",
                options: ["На 10%", "Одинаково", "На 99%", "Они дороже"],
                correctAnswer: 2,
                explanation: "Благодаря выносу данных за пределы дорогого Ethereum, комиссии снижаются на порядки."
            },
            {
                id: 2,
                question: "Какая технология позволяет восстановить данные, даже если часть узлов отключится?",
                options: ["Zip архивация", "Erasure Coding (Коды стирания)", "Копирование на флешку", "Блокчейн магия"],
                correctAnswer: 1,
                explanation: "Erasure Coding позволяет математически восстановить весь массив данных из его фрагментов."
            }
        ]
    },
    {
        id: "m1-l3",
        title: "Казначейство Mantle (Treasury)",
        xpReward: 400,
        difficulty: 'Expert',
        duration: "2 минуты",
        description: "Анализ 'Военного сундука' размером в $3.15 млрд.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-pop-yellow rounded-2xl">
                    <h3 className="text-3xl font-black text-pop-yellow mb-2">$3.15 Миллиарда</h3>
                    <p className="text-white">Оценка казначейства Mantle Treasury (DAO) на Ноябрь 2025.</p>
                </div>

                <p>
                    Mantle обладает одним из самых больших казначейств в мире Web3. Это дает проекту "финансовую гравитацию" и независимость.
                    В отличие от стартапов, которые зависят от инвесторов, Mantle может финансировать себя сам.
                </p>

                <h3 className="text-2xl font-black text-white mt-6">Структура Портфеля</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-pop-card rounded-xl border border-pop-border">
                         <div className="flex items-center gap-3"><Coins className="text-pop-cyan"/> <span>MNT Token</span></div>
                         <span className="font-bold text-gray-400">Основной актив</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-pop-card rounded-xl border border-pop-border">
                         <div className="flex items-center gap-3"><Database className="text-pop-purple"/> <span>ETH / mETH</span></div>
                         <span className="font-bold text-white">$307 млн</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-pop-card rounded-xl border border-pop-border">
                         <div className="flex items-center gap-3"><ShieldCheck className="text-orange-500"/> <span>BTC</span></div>
                         <span className="font-bold text-white">$259 млн</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-pop-card rounded-xl border border-pop-border">
                         <div className="flex items-center gap-3"><Layers className="text-green-500"/> <span>Stablecoins</span></div>
                         <span className="font-bold text-white">$255 млн</span>
                    </div>
                </div>

                <p className="text-sm text-gray-400 mt-4">
                    *Данные из отчета за Ноябрь 2025. Этот "War Chest" позволяет запускать кампании вроде Rewards Station без внешних займов.
                </p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Какова примерная оценка казначейства Mantle на Ноябрь 2025?",
                options: ["$100 млн", "$500 млн", "$3.15 млрд", "$10 млрд"],
                correctAnswer: 2,
                explanation: "Казначейство Mantle является одним из крупнейших в индустрии, что обеспечивает долгосрочную стабильность."
            },
            {
                id: 2,
                question: "Какой актив НЕ входит в топ-холдинги Mantle Treasury?",
                options: ["ETH", "BTC", "Dogecoin", "USDT/USDC"],
                correctAnswer: 2,
                explanation: "Mantle придерживается консервативной стратегии (ETH, BTC, Stablecoins) и не держит мем-коины в казначействе."
            },
            {
                id: 3,
                question: "Что позволяет делать 'Военный сундук' (War Chest)?",
                options: ["Покупать острова", "Финансировать экосистему и гранты без продажи токенов", "Пампить цену", "Платить зарплату Виталику"],
                correctAnswer: 1,
                explanation: "Большой капитал позволяет проекту развиваться десятилетиями, поддерживая разработчиков и пользователей стимулами."
            }
        ]
    }
];
