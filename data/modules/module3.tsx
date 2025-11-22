import React from 'react';
import { Lesson } from '../../types';
import { Building, Vote } from 'lucide-react';

export const MODULE_3_LESSONS: Lesson[] = [
    {
        id: "m3-l1",
        title: "Акции США на блокчейне",
        xpReward: 300,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "RWA и платформа xStocks.",
        content: (
            <div className="space-y-6 text-lg">
                <h3 className="text-3xl font-black text-white">RWA</h3>
                <p>Перенос стоимости реальных вещей (акции, облигации) в токены. В Mantle можно купить <strong>bNVDA</strong> (NVIDIA) через xStocks.</p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Чем обеспечен токен bNVDA?",
                options: ["Ничем", "Реальной акцией NVIDIA", "Золотом", "Словом"],
                correctAnswer: 1,
                explanation: "Каждый токен обеспечен реальным активом у кастодиана."
            }
        ]
    },
    {
        id: "m3-l2",
        title: "Mantle Banking (UR App)",
        duration: "2 минуты",
        xpReward: 300,
        difficulty: "Novice",
        description: "Необанк с доходностью 8% APY.",
        content: (
            <div className="space-y-6 text-lg">
                <p>Проект <strong>UR</strong> — это мост между картой Mastercard и DeFi. Ваши доллары конвертируются в стейблкоины и приносят 5-8% годовых.</p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Откуда берется доходность в приложении UR?",
                options: ["Банк печатает", "Работают в DeFi", "Пирамида", "Бонус"],
                correctAnswer: 1,
                explanation: "Приложение интегрирует DeFi протоколы."
            }
        ]
    },
    {
        id: "m3-l3",
        title: "Управление (Governance)",
        duration: "2 минуты",
        xpReward: 400,
        difficulty: "Expert",
        description: "Зачем нужен токен $MNT.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4 mb-4">
                     <div className="bg-pop-purple p-3 rounded-full text-white"><Vote size={32}/></div>
                     <h3 className="text-3xl font-black text-white">$MNT Governance</h3>
                </div>
                <p>Mantle — это DAO. Все решения принимаются голосованием держателей токена MNT.</p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Кто принимает решение о выделении грантов?",
                options: ["Разработчики", "Держатели токенов MNT", "Биржа", "SEC"],
                correctAnswer: 1,
                explanation: "Управление финансами осуществляется коллективно."
            }
        ]
    }
];