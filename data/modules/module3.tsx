
import React from 'react';
import { Lesson } from '../../types';
import { Globe, Building, Vote } from 'lucide-react';

export const MODULE_3_LESSONS: Lesson[] = [
    {
        id: "m3-l1",
        title: "Акции США на блокчейне",
        xpReward: 300,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "Знакомство с RWA (Real World Assets) и платформой xStocks.",
        content: (
            <div className="space-y-6 text-lg">
                <h3 className="text-3xl font-black text-white">Что такое RWA?</h3>
                <p>
                    <strong>RWA (Real World Assets)</strong> — это перенос стоимости реальных вещей (недвижимость, акции, облигации) в токены на блокчейне.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-pop-card p-4 rounded-2xl text-center border-2 border-pop-gray hover:scale-105 transition-transform">
                        <div className="text-4xl mb-2">🏢</div>
                        <div className="font-bold">TradFi</div>
                        <div className="text-xs text-gray-400">Работает 5 дней в неделю. Медленно. KYC.</div>
                    </div>
                    <div className="bg-pop-card p-4 rounded-2xl text-center border-2 border-pop-purple shadow-3d hover:scale-105 transition-transform">
                        <div className="text-4xl mb-2">🚀</div>
                        <div className="font-bold text-pop-purple">DeFi RWA</div>
                        <div className="text-xs text-gray-400">24/7. Мгновенно. Компонуемость.</div>
                    </div>
                </div>

                <h3 className="text-2xl font-black text-pop-green mt-8">xStocks</h3>
                <p>
                    В Mantle вы можете купить токен <strong>bNVDA</strong>. Это токен, обеспеченный реальной акцией NVIDIA 1:1.
                    Если акция NVIDIA растет на бирже NASDAQ, ваш токен растет в кошельке.
                </p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Можно ли торговать RWA активами (например, bNVDA) в выходные?",
                options: ["Нет, биржа закрыта", "Да, блокчейн работает 24/7", "Только по праздникам", "Нужно разрешение SEC"],
                correctAnswer: 1,
                explanation: "В этом прелесть DeFi — рынки никогда не спят, в отличие от традиционных финансов."
            }
        ]
    },
    {
        id: "m3-l2",
        title: "Mantle Banking (UR App)",
        duration: "2 минуты",
        xpReward: 300,
        difficulty: "Novice",
        description: "Необанк с доходностью 8% APY на долларовый счет.",
        theoryContent: (
            <div className="space-y-6 text-lg text-gray-200">
                <p>
                    Проект <strong>UR</strong> (ранее Mantle Banking) — это мост между вашей картой Mastercard и DeFi.
                </p>
                <p>
                    Вы храните деньги на счету, получаете IBAN, но "под капотом" ваши доллары конвертируются в стейблкоины (USDe от Ethena) и приносят <span className="text-pop-green font-bold">5-8% годовых</span>.
                </p>
                <div className="p-4 bg-pop-green/10 border-l-4 border-pop-green rounded-xl my-4 text-sm">
                    Обычный банк дает 0.1% на остаток. Mantle Banking дает доходность DeFi, но с удобным интерфейсом мобильного приложения.
                </div>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Откуда берется доходность 5-8% в приложении UR?",
                options: ["Банк печатает деньги", "Средства работают в DeFi (USDe Ethena)", "Это пирамида", "Бонус за регистрацию"],
                correctAnswer: 1,
                explanation: "Приложение интегрирует DeFi протоколы (как Ethena) на бэкенде, передавая доходность пользователю."
            }
        ]
    },
    {
        id: "m3-l3",
        title: "Управление (Governance)",
        duration: "2 минуты",
        xpReward: 400,
        difficulty: "Expert",
        description: "Зачем нужен токен $MNT и как голосовать за будущее сети.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4 mb-4">
                     <div className="bg-pop-purple p-3 rounded-full text-white"><Vote size={32}/></div>
                     <h3 className="text-3xl font-black text-white">$MNT Governance</h3>
                </div>

                <p>
                    Mantle Network — это DAO (Децентрализованная Автономная Организация). 
                    Это значит, что нет одного "директора". Все решения принимаются голосованием держателей токена $MNT.
                </p>

                <h3 className="text-xl font-bold text-pop-cyan mt-6">Функции токена MNT:</h3>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-300">
                    <li><strong>Gas Token:</strong> Оплата комиссий за транзакции в сети.</li>
                    <li><strong>Staking:</strong> Валидация сети (в будущем).</li>
                    <li><strong>Voting:</strong> Голосование за предложения (MIP - Mantle Improvement Proposals).</li>
                </ul>

                <p className="mt-4">
                    Например, именно через голосование было принято решение о выделении <strong>$200M</strong> в EcoFund для поддержки стартапов.
                </p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Что такое MIP?",
                options: ["Mantle Impossible Protocol", "Mantle Improvement Proposal (Предложение по улучшению)", "Money In Pocket", "Most Important Person"],
                correctAnswer: 1,
                explanation: "MIP — это стандартный формат предложений, за которые голосует сообщество для внесения изменений в протокол или казначейство."
            },
            {
                id: 2,
                question: "Кто принимает решение о выделении грантов из казначейства?",
                options: ["Только разработчики", "Держатели токенов MNT через голосование", "SEC", "Биржа Bybit"],
                correctAnswer: 1,
                explanation: "Mantle — это DAO, поэтому управление финансами осуществляется коллективно держателями токенов."
            }
        ]
    }
];
