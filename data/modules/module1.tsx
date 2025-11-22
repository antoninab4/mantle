import React from 'react';
import { Lesson } from '../../types';
import { Cpu, Database, ShieldCheck } from 'lucide-react';
import { Highlight, Callout } from '../../components/learning/RichText';

export const MODULE_1_LESSONS: Lesson[] = [
    {
        id: "m1-l1",
        title: "Лекция 1.1: Битва Архитектур",
        xpReward: 300,
        difficulty: 'Novice',
        duration: "2 минуты",
        description: "Почему старые блокчейны медленные, и как Mantle решает Трилемму.",
        content: (
            <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                    В основе любого блокчейна лежит фундаментальная проблема, названная Виталиком Бутериным <strong>Трилеммой Блокчейна</strong>.
                    Сеть может обладать только двумя из трех свойств: <Highlight>Децентрализация</Highlight>, <Highlight>Безопасность</Highlight> и <Highlight>Масштабируемость</Highlight>.
                </p>

                <h3 className="text-2xl font-black text-white mt-6">Эпоха Монолитов</h3>
                <p className="text-gray-300">
                    Ethereum L1 — это "Монолит". Один узел сети должен делать всё:
                    <br/>1. Исполнять транзакции (EVM).
                    <br/>2. Хранить историю всех операций (Data Availability).
                    <br/>3. Обеспечивать консенсус.
                    <br/><strong>Результат:</strong> Высокая безопасность, но низкая скорость (15 TPS) и огромные комиссии ($5-100).
                </p>

                <h3 className="text-2xl font-black text-white mt-6">Революция Модульности</h3>
                <p className="text-gray-300">
                    Mantle Network разбивает эти задачи на разные слои, как в современном ИТ:
                </p>
                
                <div className="grid gap-4 my-6">
                    <div className="p-4 bg-pop-card border border-pop-border rounded-xl flex items-start gap-4">
                        <Cpu className="text-pop-yellow shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white">Слой Исполнения (Execution)</h4>
                            <p className="text-sm text-gray-400">Mantle Network. Здесь происходят вычисления. Быстро и дешево.</p>
                        </div>
                    </div>
                    <div className="p-4 bg-pop-card border border-pop-border rounded-xl flex items-start gap-4">
                        <Database className="text-pop-cyan shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white">Слой Данных (Data Availability)</h4>
                            <p className="text-sm text-gray-400">EigenDA. Хранение "сырых" данных транзакций вне Ethereum. Экономия газа на 99%.</p>
                        </div>
                    </div>
                    <div className="p-4 bg-pop-card border border-pop-border rounded-xl flex items-start gap-4">
                        <ShieldCheck className="text-pop-green shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-white">Слой Расчетов (Settlement)</h4>
                            <p className="text-sm text-gray-400">Ethereum. Сюда публикуются только доказательства (Proofs) для финальной безопасности.</p>
                        </div>
                    </div>
                </div>

                <Callout title="Optimistic vs ZK" type="info">
                    <p>
                        Изначально Mantle использовал Optimistic Rollup (7 дней на вывод). В 2025 году произошел переход на <strong>OP Succinct</strong> — гибридную модель, позволяющую использовать ZK-пруфы (Zero-Knowledge) для мгновенной финализации блоков, сокращая время вывода до 1-2 часов.
                    </p>
                </Callout>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Какую проблему решает модульная архитектура Mantle?",
                options: ["Отсутствие токена", "Трилемму блокчейна (Масштабируемость)", "Сложность интерфейса", "Высокую цену ETH"],
                correctAnswer: 1,
                explanation: "Разделяя слои исполнения и данных, Mantle достигает высокой скорости без ущерба для безопасности Ethereum."
            },
            {
                id: 2,
                question: "Какой компонент отвечает за вычисления смарт-контрактов?",
                options: ["EigenDA", "Ethereum L1", "Mantle Network (Execution Layer)", "Uniswap"],
                correctAnswer: 2,
                explanation: "Mantle Network — это слой исполнения, где работают EVM-совместимые смарт-контракты."
            },
            {
                id: 3,
                question: "Как называется технология, сократившая время вывода средств в 2025 году?",
                options: ["Mantle Fast", "OP Succinct (ZK)", "Superchain", "Turbo ETH"],
                correctAnswer: 1,
                explanation: "Переход на OP Succinct позволил внедрить ZK-пруфы для быстрой валидации состояний."
            },
            {
                id: 4,
                question: "Где Mantle хранит данные транзакций для экономии газа?",
                options: ["На жестком диске у майнера", "В EigenDA (Data Availability Layer)", "В сети Bitcoin", "В облаке Google"],
                correctAnswer: 1,
                explanation: "EigenDA позволяет хранить данные вне Ethereum, что радикально снижает комиссии."
            }
        ]
    },
    {
        id: "m1-l2",
        title: "Лекция 1.2: Секретное оружие EigenDA",
        xpReward: 350,
        difficulty: 'Intermediate',
        duration: "2 минуты",
        description: "Технический разбор: Blobs, Erasure Coding и экономия газа.",
        content: (
            <div className="space-y-6 text-lg">
                 <p className="text-gray-300">
                     Самая дорогая часть работы L2-роллапов — это публикация данных в Ethereum (Call Data). Это занимает до 90% стоимости газа.
                     Mantle решает это с помощью <strong>EigenDA</strong> (Data Availability).
                 </p>

                 <h3 className="text-2xl font-black text-white mt-6">Как это работает под капотом?</h3>
                 <ol className="list-decimal pl-5 space-y-4 text-gray-300">
                     <li>
                         <strong>Sequencer</strong> собирает тысячи транзакций пользователей в один "батч" (пакет).
                     </li>
                     <li>
                         <strong>Disperser</strong> (Дисперсер) разбивает этот пакет на мелкие фрагменты (chunks) с использованием технологии <Highlight>Erasure Coding</Highlight> (Коды стирания).
                     </li>
                     <li>
                         Эти фрагменты рассылаются операторам узлов EigenDA (рестейкерам ETH). Ни один узел не хранит все данные целиком, что повышает децентрализацию.
                     </li>
                     <li>
                         В Ethereum отправляется только крошечный сертификат (Signature), подтверждающий, что данные сохранены и доступны.
                     </li>
                 </ol>

                 <div className="grid grid-cols-2 gap-4 my-6 text-center">
                     <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
                         <div className="text-3xl font-black text-pop-red mb-1">0.06 MB/s</div>
                         <div className="text-xs text-gray-500 uppercase">Ethereum Throughput</div>
                     </div>
                     <div className="p-4 bg-gray-900 rounded-xl border border-pop-green">
                         <div className="text-3xl font-black text-pop-green mb-1">15.0 MB/s</div>
                         <div className="text-xs text-gray-500 uppercase">Mantle + EigenDA</div>
                     </div>
                 </div>

                 <Callout title="Что такое Erasure Coding?" type="tip">
                     <p>
                         Это технология (как в RAID-массивах или QR-кодах), которая позволяет восстановить 100% данных, даже если 50% узлов сети уйдут в офлайн. Это гарантирует неубиваемость истории транзакций.
                     </p>
                 </Callout>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Какой процент стоимости транзакции обычно уходит на Call Data в классических L2?",
                options: ["1-5%", "10-20%", "80-90%", "0%"],
                correctAnswer: 2,
                explanation: "В традиционных роллапах публикация данных в L1 — основная статья расходов. EigenDA устраняет это."
            },
            {
                id: 2,
                question: "Что делает технология Erasure Coding?",
                options: ["Стирает старые данные", "Позволяет восстановить данные при потере части узлов", "Шифрует данные от спецслужб", "Ускоряет майнинг"],
                correctAnswer: 1,
                explanation: "Коды стирания добавляют избыточность, позволяя реконструировать данные даже при частичной потере фрагментов."
            },
            {
                id: 3,
                question: "Где физически хранятся данные транзакций Mantle?",
                options: ["В блокчейне Bitcoin", "На сервере Виталика", "В сети валидаторов EigenDA", "Внутри смарт-контракта Ethereum"],
                correctAnswer: 2,
                explanation: "Данные хранятся децентрализованной сетью узлов EigenDA, а Ethereum получает только подтверждение."
            },
            {
                id: 4,
                question: "Кто обеспечивает безопасность EigenDA?",
                options: ["Майнеры Биткоина", "Валидаторы Ethereum (через рестейкинг)", "Команда Mantle", "Банки"],
                correctAnswer: 1,
                explanation: "EigenDA защищена стейком ETH валидаторов через протокол EigenLayer."
            }
        ]
    },
    {
        id: "m1-l3",
        title: "Лекция 1.3: Казначейство (Treasury)",
        xpReward: 400,
        difficulty: 'Expert',
        duration: "2 минуты",
        description: "Стратегия управления $3.15 млрд: RWA, mETH и стейблкоины.",
        content: (
            <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                    Mantle DAO управляет одним из крупнейших казначейств в мире Web3. На ноябрь 2025 года его объем составляет <strong>$3.15 млрд</strong> (исключая нативные токены MNT).
                    Это дает проекту "финансовую гравитацию" и независимость.
                </p>

                <h3 className="text-2xl font-black text-white mt-6">Структура Портфеля</h3>
                <ul className="space-y-3 mt-4">
                    <li className="flex justify-between items-center p-3 bg-pop-card rounded-lg border-l-4 border-pop-cyan">
                        <span>MNT Token</span>
                        <span className="font-bold text-gray-400">Основной актив</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-pop-card rounded-lg border-l-4 border-pop-purple">
                        <span>ETH / mETH</span>
                        <span className="font-bold text-white">$307 млн</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-pop-card rounded-lg border-l-4 border-orange-500">
                        <span>BTC</span>
                        <span className="font-bold text-white">$259 млн</span>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-pop-card rounded-lg border-l-4 border-green-500">
                        <span>Stablecoins</span>
                        <span className="font-bold text-white">$255 млн</span>
                    </li>
                </ul>

                <Callout title="Стратегия 'War Chest'" type="warning">
                    <p>
                        В отличие от стартапов, которые зависят от венчурных инвесторов (VC), Mantle может финансировать себя сам. 
                        Казначейство выступает "Кредитором последней инстанции" для экосистемы, запуская кампании стимулирования (Rewards Station) без необходимости продавать токены на рынке.
                    </p>
                </Callout>

                <h3 className="text-xl font-bold text-white mt-6">RWA Экспансия</h3>
                <p className="text-gray-300">
                    В 2025 году Mantle начал агрессивно переводить стейблкоины в RWA (Real World Assets), в частности в фонд <strong>QCDT</strong> (Yield-bearing Treasury Bill Fund), чтобы казначейство генерировало пассивный доход от гособлигаций США, а не просто лежало "мертвым грузом".
                </p>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Каков приблизительный размер казначейства Mantle (без учета MNT)?",
                options: ["$50 млн", "$300 млн", "$800 млн+", "$3.15 млрд"],
                correctAnswer: 3,
                explanation: "Суммарная стоимость активов (ETH, BTC, Stablecoins) превышает $3 млрд, что делает его одним из крупнейших в DAO."
            },
            {
                id: 2,
                question: "Что такое QCDT в стратегии казначейства?",
                options: ["Мем-коин", "Фонд гособлигаций (RWA)", "Новый блокчейн", "Токен управления"],
                correctAnswer: 1,
                explanation: "Это токенизированный фонд денежного рынка, позволяющий казначейству получать доход от реальных активов."
            },
            {
                id: 3,
                question: "Зачем Mantle нужно такое большое казначейство?",
                options: ["Чтобы купить остров", "Для финансирования экосистемы и независимости от VC", "Чтобы пампить цену токена", "Это ошибка"],
                correctAnswer: 1,
                explanation: "Большое казначейство ('War Chest') позволяет поддерживать гранты, ликвидность и разработку в долгосрочной перспективе."
            },
            {
                id: 4,
                question: "В чем преимущество наличия собственных запасов ETH и BTC у проекта?",
                options: ["Можно не работать", "Это диверсификация и защита от падения цены собственного токена", "Для красоты", "Чтобы платить налоги"],
                correctAnswer: 1,
                explanation: "Диверсификация активов защищает проект от волатильности рынка и снижает зависимость от цены MNT."
            }
        ]
    }
];