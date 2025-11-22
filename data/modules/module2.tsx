import React from 'react';
import { Lesson } from '../../types';
import { Highlight, Callout } from '../../components/learning/RichText';

export const MODULE_2_LESSONS: Lesson[] = [
    {
        id: "m2-l1",
        title: "Лекция 2.1: Алхимия mETH и cmETH",
        xpReward: 300,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "LSD vs LRT. Как работает Double Yield и Valantis.",
        content: (
            <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                    Протокол <Highlight>mETH</Highlight> (ранее Mantle LSP) стал якорным продуктом экосистемы. Но чтобы понимать, откуда берется доход, нужно различать два типа активов.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-purple-500/20 rounded text-purple-400 font-bold">LSD</div>
                            <h4 className="text-white font-bold">mETH</h4>
                        </div>
                        <p className="text-sm text-gray-400">Liquid Staking Derivative. Аналог stETH (Lido).</p>
                        <div className="mt-2 text-green-400 text-sm font-mono">Yield: ~3-4% (ETH PoS)</div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-xl border border-wings-cyan/50 shadow-glow">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-wings-cyan/20 rounded text-wings-cyan font-bold">LRT</div>
                            <h4 className="text-white font-bold">cmETH</h4>
                        </div>
                        <p className="text-sm text-gray-400">Liquid Restaking Token. Composable mETH.</p>
                        <div className="mt-2 text-green-400 text-sm font-mono">Yield: PoS + AVS + Points</div>
                    </div>
                </div>

                <h3 className="text-2xl font-black text-white mt-6">Технология Valantis</h3>
                <p className="text-gray-300">
                    Для обеспечения мгновенной конвертации и привязки к ETH, Mantle использует децентрализованную биржу нового поколения на базе движка <strong>Valantis</strong>. Это позволяет проводить огромные свопы mETH/ETH с минимальным проскальзыванием.
                </p>

                <Callout title="Что такое cmETH?" type="info">
                    <p>
                        <strong>cmETH</strong> (Composable mETH) — это mETH, который был рестейкнут в протоколах вроде EigenLayer, Karak или Symbiotic.
                        <br/>
                        В отличие от обычной блокировки в EigenLayer, cmETH остается <strong>ликвидным</strong> токеном ERC-20. Вы можете использовать его как залог на INIT Capital или торговать им, продолжая получать поинты.
                    </p>
                </Callout>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "В чем главное отличие cmETH от mETH?",
                options: ["cmETH — это стейблкоин", "cmETH позволяет получать доход от рестейкинга (EigenLayer) + DeFi", "cmETH нельзя продать", "Это одно и то же"],
                correctAnswer: 1,
                explanation: "cmETH (Composable mETH) аккумулирует награды от рестейкинга и при этом может использоваться в DeFi приложениях."
            },
            {
                id: 2,
                question: "Какая технология обеспечивает ликвидность пары mETH/ETH?",
                options: ["Uniswap V2", "Valantis", "Order Book", "Excel таблица"],
                correctAnswer: 1,
                explanation: "Valantis — это модульный DEX движок, используемый Mantle для эффективного управления ликвидностью mETH."
            },
            {
                id: 3,
                question: "Откуда берется базовая доходность mETH?",
                options: ["От майнинга биткоина", "От валидации сети Ethereum (Proof-of-Stake)", "Из казначейства Mantle", "От комиссий пользователей"],
                correctAnswer: 1,
                explanation: "Базовая доходность идет от стейкинга ETH в основной сети Ethereum (валидаторы)."
            },
            {
                id: 4,
                question: "Что значит 'Composable' в названии cmETH?",
                options: ["Сложный", "Компонуемый (можно использовать в других протоколах)", "Компьютерный", "Компактный"],
                correctAnswer: 1,
                explanation: "Composable означает, что токен можно использовать как 'лего' в других DeFi приложениях (залоги, пулы) без потери доходности."
            }
        ]
    },
    {
        id: "m2-l2",
        title: "Лекция 2.2: FBTC — Биткоин просыпается",
        xpReward: 350,
        difficulty: 'Expert',
        duration: "2 минуты",
        description: "Как работает мост FBTC, безопасность MPC и Omni-chain.",
        content: (
            <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                    Биткоин — самый ликвидный актив ($1.5 трлн), но он "мертв" в плане DeFi. Вы не можете положить BTC в лендинг или фарминг... пока не обернете его.
                    <strong>FBTC (Function BTC)</strong> решает эту проблему.
                </p>

                <h3 className="text-2xl font-black text-white mt-6">Архитектура Моста</h3>
                <p className="text-gray-300">
                    В отличие от централизованных WBTC, FBTC использует децентрализованную сеть хранителей (Threshold Signature Scheme - TSS) и MPC (Multi-Party Computation).
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Пользователь отправляет BTC на адрес кошелька MPC.</li>
                    <li>Сеть валидаторов подтверждает приход средств.</li>
                    <li>Смарт-контракт минтит (выпускает) эквивалентное количество FBTC в сети Mantle.</li>
                    <li>Обеспечение всегда <strong>1:1</strong>.</li>
                </ul>

                <Callout title="Omni-chain экспансия" type="tip">
                    <p>
                        FBTC не ограничен только сетью Mantle. Благодаря интеграции с <strong>LayerZero</strong> и <strong>Babylon</strong>, этот актив может свободно перемещаться между разными блокчейнами, создавая единый стандарт биткоина в DeFi.
                    </p>
                </Callout>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Что обеспечивает стоимость токена FBTC?",
                options: ["Доверие к команде", "Реальный Биткоин в соотношении 1:1", "Алгоритм", "Токен MNT"],
                correctAnswer: 1,
                explanation: "FBTC полностью обеспечен заблокированными биткоинами в сети Bitcoin."
            },
            {
                id: 2,
                question: "Какая технология используется для безопасности ключей хранилища BTC?",
                options: ["Запись на бумажке", "MPC (Multi-Party Computation)", "Один приватный ключ", "SMS подтверждение"],
                correctAnswer: 1,
                explanation: "MPC разбивает ключ на части между независимыми участниками, устраняя единую точку отказа."
            },
            {
                id: 3,
                question: "Что позволяет FBTC перемещаться между сетями?",
                options: ["Omni-chain протоколы (LayerZero)", "Почта России", "SWIFT", "Ручной перенос"],
                correctAnswer: 0,
                explanation: "Технологии вроде LayerZero позволяют токену существовать в разных сетях."
            },
            {
                id: 4,
                question: "В чем смысл 'обертывания' Биткоина в FBTC?",
                options: ["Чтобы скрыть его от налогов", "Чтобы использовать его в смарт-контрактах и DeFi", "Чтобы он стал быстрее", "Нет смысла"],
                correctAnswer: 1,
                explanation: "Сеть Bitcoin не поддерживает смарт-контракты. FBTC позволяет использовать ликвидность BTC в приложениях Ethereum/Mantle."
            }
        ]
    },
    {
        id: "m2-l3",
        title: "Лекция 2.3: Merchant Moe и Liquidity Book",
        xpReward: 400,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "Почему это лучше Uniswap V3? Снижение проскальзывания.",
        content: (
            <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                    Доминирующая DEX в Mantle — <strong>Merchant Moe</strong> (франшиза Trader Joe). Их киллер-фича — <strong>Liquidity Book</strong>.
                </p>

                <h3 className="text-2xl font-black text-white mt-6">Liquidity Book vs Uniswap V3</h3>
                <p className="text-gray-300">
                    Оба протокола используют "концентрированную ликвидность" (CLMM), но с важным отличием.
                </p>
                
                <div className="my-6 space-y-4">
                    <div className="bg-gray-900 border-l-4 border-red-500 p-4">
                        <h4 className="font-bold text-white">Uniswap V3</h4>
                        <p className="text-sm text-gray-400">Ликвидность распределяется плавно. При высокой волатильности провайдеры терпят большие убытки (Impermanent Loss).</p>
                    </div>
                    <div className="bg-gray-900 border-l-4 border-green-500 p-4">
                        <h4 className="font-bold text-white">Liquidity Book (Moe)</h4>
                        <p className="text-sm text-gray-400">Ликвидность делится на дискретные "бины" (корзины). Это позволяет создавать стратегии с нулевым проскальзыванием внутри бина и гибко управлять комиссиями при волатильности (Volatility Accumulator).</p>
                    </div>
                </div>

                <Callout title="Кампания Methamorphosis" type="info">
                    <p>
                        Провайдеры ликвидности на Merchant Moe получают не только торговые комиссии, но и поинты <strong>Powder</strong>, которые конвертируются в токены управления $COOK.
                    </p>
                </Callout>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Как называется уникальная технология концентрации ликвидности на Merchant Moe?",
                options: ["Automated Market Maker", "Liquidity Book", "Order Book", "Swap X"],
                correctAnswer: 1,
                explanation: "Liquidity Book — это инновационная модель дискретной ликвидности."
            },
            {
                id: 2,
                question: "Что такое 'бин' (Bin) в этой модели?",
                options: ["Мусорная корзина", "Ценовой диапазон с фиксированной ликвидностью", "Тип комиссии", "Название токена"],
                correctAnswer: 1,
                explanation: "Бин — это конкретная ценовая ячейка, в которую маркет-мейкер кладет активы."
            },
            {
                id: 3,
                question: "Какую дополнительную награду получают LP на Merchant Moe в рамках кампании?",
                options: ["Только спасибо", "Powder (конвертируемый в COOK)", "Биткоины", "NFT картинки"],
                correctAnswer: 1,
                explanation: "Кампания Methamorphosis стимулирует ликвидность раздачей поинтов Powder."
            },
            {
                id: 4,
                question: "Что делает Volatility Accumulator?",
                options: ["Накапливает долги", "Увеличивает комиссии во время сильных скачков цен", "Останавливает торги", "Сжигает токены"],
                correctAnswer: 1,
                explanation: "Это механизм защиты LP: если рынок штормит, комиссии растут, компенсируя риски провайдеров ликвидности."
            }
        ]
    }
];