import React from 'react';
import { Lesson } from '../../types';
import { TrendingUp, Bitcoin } from 'lucide-react';

export const MODULE_2_LESSONS: Lesson[] = [
    {
        id: "m2-l1",
        title: "Двойная Доходность (mETH)",
        xpReward: 300,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "Почему mETH и cmETH лучше простого ETH.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="p-6 bg-gradient-to-br from-pop-purple to-purple-900 rounded-2xl text-white shadow-3d border-b-4 border-purple-950">
                    <h3 className="text-3xl font-black mb-2">ETH просто лежит?</h3>
                    <p>Вы теряете деньги. Инфляция съедает ваш капитал.</p>
                </div>
                <h3 className="text-2xl font-black text-pop-cyan mt-6">mETH Protocol</h3>
                <p>Вы получаете <strong>mETH</strong> — "квитанцию", которая растет в цене сама по себе (~3.5% APY + Rewards).</p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Что такое cmETH?",
                options: ["Комиссионный ETH", "Composable mETH (для рестейкинга)", "Fake ETH", "Stablecoin"],
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
        description: "Как заставить Биткоин работать.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4 mb-4">
                     <div className="bg-orange-500 p-3 rounded-full text-white"><Bitcoin size={32}/></div>
                     <h3 className="text-3xl font-black text-white">FBTC</h3>
                </div>
                <p>В Mantle вы можете использовать <strong>FBTC</strong> — токен, обеспеченный реальным Биткоином 1:1.</p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Каково соотношение FBTC к BTC?",
                options: ["1:1", "1:10", "Алгоритмическое", "Случайное"],
                correctAnswer: 0,
                explanation: "FBTC всегда обеспечен реальным Биткоином 1 к 1."
            }
        ]
    },
    {
        id: "m2-l3",
        title: "Merchant Moe: Король DEX",
        xpReward: 350,
        difficulty: 'Novice',
        duration: "1 минута",
        description: "Главная биржа экосистемы.",
        content: (
            <div className="space-y-6 text-lg">
                <p>Главная биржа в Mantle — это <strong>Merchant Moe</strong>. Она использует технологию Liquidity Book для снижения проскальзывания.</p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Какая технология выделяет Merchant Moe?",
                options: ["Order Book", "Liquidity Book", "Excel", "Dark Pool"],
                correctAnswer: 1,
                explanation: "Liquidity Book позволяет концентрировать ликвидность."
            }
        ]
    }
];