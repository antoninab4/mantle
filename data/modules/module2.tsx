
import React from 'react';
import { Lesson } from '../../types';
import { TrendingUp, RefreshCw, AlertTriangle, Bitcoin, ArrowRight } from 'lucide-react';

export const MODULE_2_LESSONS: Lesson[] = [
    {
        id: "m2-l1",
        title: "Двойная Доходность (Double Yield)",
        xpReward: 300,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "Почему mETH и cmETH лучше простого ETH.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="p-6 bg-gradient-to-br from-pop-purple to-purple-900 rounded-2xl text-white shadow-3d border-b-4 border-purple-950">
                    <h3 className="text-3xl font-black mb-2">ETH просто лежит?</h3>
                    <p className="font-medium">Вы теряете деньги. Инфляция съедает ваш капитал.</p>
                </div>

                <h3 className="text-2xl font-black text-pop-cyan mt-6">Решение: mETH Protocol</h3>
                <p>
                    Когда вы стейкаете ETH через Mantle, вы получаете <strong>mETH</strong>. 
                    Это "квитанция", которая растет в цене сама по себе.
                </p>

                <div className="bg-pop-card p-4 rounded-2xl border-2 border-pop-gray space-y-4">
                    <div className="flex justify-between items-center border-b border-pop-gray pb-2">
                        <span>Базовый ETH стейкинг</span>
                        <span className="font-bold text-pop-green">~3.5% APY</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-pop-gray pb-2">
                        <span>Mantle Rewards</span>
                        <span className="font-bold text-pop-purple">+ Поинты</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>EigenLayer Restaking (cmETH)</span>
                        <span className="font-bold text-pop-yellow">+ Restaking Yield</span>
                    </div>
                </div>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Что такое cmETH?",
                options: ["Комиссионный ETH", "Composable mETH (для рестейкинга)", "Crypto Magic ETH", "Fake ETH"],
                correctAnswer: 1,
                explanation: "cmETH позволяет использовать токен в DeFi и одновременно получать доход от рестейкинга."
            }
        ]
    },
    {
        id: "m2-l2",
        title: "FBTC: Биткоин в DeFi",
        xpReward: 350,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "Как заставить ваш Биткоин работать в сети Mantle.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4 mb-4">
                     <div className="bg-orange-500 p-3 rounded-full text-white"><Bitcoin size={32}/></div>
                     <h3 className="text-3xl font-black text-white">FBTC</h3>
                </div>
                
                <p>
                    Биткоин (BTC) — это цифровое золото, но в своей родной сети он "ленивый". Он просто лежит.
                    В Mantle вы можете использовать <strong>FBTC (Function BTC)</strong>.
                </p>

                <div className="bg-pop-card border-2 border-orange-500 p-4 rounded-2xl">
                    <h4 className="font-bold text-orange-400 mb-2">Что такое FBTC?</h4>
                    <p className="text-sm text-gray-300">
                        Это токен, обеспеченный реальным Биткоином 1:1.
                        В отличие от WBTC, он имеет более децентрализованную архитектуру моста (Babylon, Solv Protocol).
                    </p>
                </div>

                <h3 className="text-2xl font-black text-pop-cyan mt-6">Что с ним делать?</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Использовать как залог для займа стейблкоинов.</li>
                    <li>Предоставлять в пулы ликвидности (например, FBTC/WBTC).</li>
                    <li>Получать "Поинты" от Babylon (протокол стейкинга Биткоина).</li>
                </ul>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Каково соотношение FBTC к реальному BTC?",
                options: ["1:1 (Полное обеспечение)", "1:10", "Алгоритмическое", "Зависит от настроения рынка"],
                correctAnswer: 0,
                explanation: "FBTC всегда обеспечен реальным Биткоином в соотношении 1 к 1."
            },
            {
                id: 2,
                question: "Зачем переводить BTC в сеть Mantle?",
                options: ["Чтобы спрятать его", "Чтобы использовать в DeFi (займы, фарминг) и получать доход", "Это невозможно", "Чтобы заплатить больше комиссий"],
                correctAnswer: 1,
                explanation: "В сети Mantle Биткоин превращается из пассивного актива в производительный капитал."
            }
        ]
    },
    {
        id: "m2-l3",
        title: "Merchant Moe: Король DEX",
        xpReward: 350,
        difficulty: 'Novice',
        duration: "1 минута",
        description: "Главная биржа экосистемы и её особенности.",
        content: (
            <div className="space-y-6 text-lg">
                <p>
                    В каждой сети есть главная биржа (Uniswap на Ethereum, PancakeSwap на BNB). 
                    В Mantle это <strong>Merchant Moe</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pop-card p-4 rounded-2xl border-2 border-pop-purple">
                        <h4 className="font-bold text-pop-purple">Liquidity Book</h4>
                        <p className="text-sm text-gray-400 mt-2">
                            Уникальная технология, снижающая проскальзывание (Slippage). Вы меняете токены по более выгодному курсу.
                        </p>
                    </div>
                    <div className="bg-pop-card p-4 rounded-2xl border-2 border-pop-yellow">
                        <h4 className="font-bold text-pop-yellow">Награды</h4>
                        <p className="text-sm text-gray-400 mt-2">
                            За предоставление ликвидности вы получаете токены MOE + участвуете в кампании Methamorphosis (фарминг Powder).
                        </p>
                    </div>
                </div>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Какая технология выделяет Merchant Moe среди обычных DEX?",
                options: ["Order Book", "Liquidity Book", "Excel Spreadsheet", "Dark Pool"],
                correctAnswer: 1,
                explanation: "Liquidity Book позволяет концентрировать ликвидность в дискретных 'бинах', улучшая эффективность капитала."
            }
        ]
    },
    {
        id: "m2-l4",
        title: "Практика: Looping Стратегия",
        xpReward: 500,
        difficulty: 'Expert',
        isPractical: true,
        duration: "3 минуты",
        description: "Как сделать из 10% доходности 25% используя лендинг.",
        content: (
            <div className="space-y-6">
                <div className="bg-pop-yellow/20 border-2 border-pop-yellow p-4 rounded-2xl flex gap-4 items-start">
                    <AlertTriangle className="text-pop-yellow shrink-0" />
                    <div>
                        <h4 className="font-black text-pop-yellow">Осторожно: Риск ликвидации!</h4>
                        <p className="text-sm">Используйте эту стратегию только если понимаете, как работает кредитное плечо.</p>
                    </div>
                </div>

                <p className="text-lg">
                    Стратегия <strong>Looping (Зацикливание)</strong> — это когда вы кладете актив в залог, берете под него займ, покупаете еще актив и снова кладете в залог.
                </p>
            </div>
        ),
        practicalSteps: (
            <div className="space-y-4">
                <div className="bg-pop-card p-4 rounded-2xl border-l-8 border-pop-cyan">
                    <h4 className="font-bold text-lg">Шаг 1: INIT Capital</h4>
                    <p>Откройте приложение INIT Capital. Это основной лендинг протокол в Mantle.</p>
                </div>
                <div className="bg-pop-card p-4 rounded-2xl border-l-8 border-pop-cyan">
                    <h4 className="font-bold text-lg">Шаг 2: Депозит mETH</h4>
                    <p>Внесите ваш mETH в пул обеспечения (Supply).</p>
                </div>
                 <div className="bg-pop-card p-4 rounded-2xl border-l-8 border-pop-cyan">
                    <h4 className="font-bold text-lg">Шаг 3: Функция "Loop"</h4>
                    <p>Вместо ручного займа выберите "Hook: Looping". Выберите плечо 2x. Протокол сам займет ETH, поменяет на mETH и положит обратно.</p>
                </div>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Что происходит при стратегии Looping?",
                options: ["Вы продаете все активы", "Вы увеличиваете свою позицию за счет заемных средств", "Вы переводите деньги на другой кошелек", "Вы фиксируете убыток"],
                correctAnswer: 1,
                explanation: "Looping создает рычаг (плечо), увеличивая как потенциальную доходность, так и риски."
            }
        ]
    }
];
