import React from 'react';
import { Lesson } from '../../types';
import { Scale } from 'lucide-react';
import { Highlight, Callout } from '../../components/learning/RichText';

export const MODULE_3_LESSONS: Lesson[] = [
    {
        id: "m3-l1",
        title: "Лекция 3.1: RWA — Акции на блокчейне",
        xpReward: 300,
        difficulty: 'Expert',
        duration: "2 минуты",
        description: "Юридическая структура SPV, xStocks и Backed Finance.",
        content: (
            <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                    <strong>Real World Assets (RWA)</strong> — это перенос прав собственности на реальные активы в блокчейн.
                    Платформа <strong>xStocks</strong> в партнерстве с <strong>Backed Finance</strong> позволяет торговать акциями США (NVIDIA, Apple, MicroStrategy) в сети Mantle.
                </p>

                <h3 className="text-2xl font-black text-white mt-6">Юридическая "Матрешка" (SPV)</h3>
                <p className="text-gray-300">
                    Как токен может быть акцией? Через специальную структуру:
                </p>
                <ol className="list-decimal pl-5 space-y-3 text-gray-300">
                    <li>Вы отправляете USDC в смарт-контракт.</li>
                    <li>Лицензированный эмитент (Backed) создает токен bNVDA.</li>
                    <li>Одновременно брокер покупает реальную акцию NVIDIA на фондовом рынке.</li>
                    <li>Эта акция передается на хранение независимому кастодиану в Швейцарии под залог конкретного токена.</li>
                    <li>Токен является <strong>сертификатом права требования</strong> (Tracker Certificate).</li>
                </ol>

                <div className="bg-gray-900 border border-white/10 p-4 rounded-xl my-4">
                    <h4 className="font-bold text-wings-cyan flex items-center gap-2"><Scale size={20}/> Регуляция</h4>
                    <p className="text-sm text-gray-400 mt-1">Эмиссия происходит в соответствии с законодательством Швейцарии (DLT Act). Это не "синтетика", а полностью обеспеченный актив.</p>
                </div>

                <Callout title="Преимущества для трейдера" type="tip">
                    <ul className="list-disc pl-4 text-sm">
                        <li><strong>24/7 Рынок:</strong> Акции торгуются даже когда NASDAQ закрыт.</li>
                        <li><strong>DeFi-совместимость:</strong> Можно использовать акции Apple как залог, чтобы взять кредит в стейблкоинах.</li>
                    </ul>
                </Callout>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Что обеспечивает стоимость токена bNVDA на xStocks?",
                options: ["Вера сообщества", "Реальная акция, хранящаяся у кастодиана", "Алгоритм привязки", "Индекс S&P 500"],
                correctAnswer: 1,
                explanation: "Модель Backed Finance подразумевает полное обеспечение 1 к 1 реальными ценными бумагами."
            },
            {
                id: 2,
                question: "В какой юрисдикции происходит выпуск этих токенов?",
                options: ["Оффшоры (Панама)", "США", "Швейцария", "РФ"],
                correctAnswer: 2,
                explanation: "Эмиссия регулируется швейцарским законодательством о DLT (Distributed Ledger Technology)."
            },
            {
                id: 3,
                question: "Можно ли торговать токенизированными акциями в выходные?",
                options: ["Нет, биржа закрыта", "Да, блокчейн работает 24/7", "Только по праздникам", "Только для VIP"],
                correctAnswer: 1,
                explanation: "В отличие от традиционных бирж, RWA токены доступны для обмена круглосуточно."
            },
            {
                id: 4,
                question: "Что такое SPV в контексте RWA?",
                options: ["Special Purpose Vehicle (Специальное юрлицо)", "Super Power Value", "Secure Private Vault", "Simple Payment Verification"],
                correctAnswer: 0,
                explanation: "SPV создается для изоляции рисков и владения активами, обеспечивающими токены."
            }
        ]
    },
    {
        id: "m3-l2",
        title: "Лекция 3.2: Необанкинг будущего (UR App)",
        duration: "2 минуты",
        xpReward: 300,
        difficulty: "Intermediate",
        description: "Счета IBAN, карты Mastercard и доходность USDe.",
        content: (
            <div className="space-y-6 text-lg">
                <p className="text-gray-300">
                    Проект с кодовым названием <strong>Mantle Banking (UR)</strong> стирает границу между криптой и фиатом. Это приложение, которое выглядит как обычный банк (Revolut/Tinkoff), но "под капотом" использует DeFi.
                </p>

                <h3 className="text-2xl font-black text-white mt-6">Как это работает?</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="bg-pop-purple p-2 rounded text-white font-bold">IBAN</div>
                        <p className="text-sm text-gray-400">Вы получаете персональный европейский номер счета. Можно получать зарплату прямо в крипто-кошелек.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-pop-cyan p-2 rounded text-white font-bold">Mastercard</div>
                        <p className="text-sm text-gray-400">Виртуальная/пластиковая карта. При оплате кофе крипта конвертируется в евро мгновенно.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-green-500 p-2 rounded text-white font-bold">Yield</div>
                        <p className="text-sm text-gray-400">Пока деньги лежат на счету, они конвертируются в <strong>USDe</strong> (синтетический доллар от Ethena) и приносят 5-8% годовых. Обычные банки дают 0%.</p>
                    </li>
                </ul>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "В чем главная фишка хранения средств в приложении UR?",
                options: ["Красивый дизайн", "Автоматическое получение доходности (Yield) как в DeFi", "Отсутствие KYC", "Бесплатные кредиты"],
                correctAnswer: 1,
                explanation: "Средства пользователей работают в протоколах типа Ethena, принося пассивный доход, недоступный в обычных банках."
            },
            {
                id: 2,
                question: "Какой стейблкоин используется для генерации дохода?",
                options: ["USDT", "USDC", "USDe (Ethena)", "DAI"],
                correctAnswer: 2,
                explanation: "Интеграция с Ethena (USDe) обеспечивает высокую доходность за счет дельта-нейтральных стратегий."
            },
            {
                id: 3,
                question: "Можно ли оплачивать покупки картой UR в обычном магазине?",
                options: ["Нет, только в метавселенной", "Да, через сеть Mastercard", "Только если продавец принимает крипту", "Только в Дубае"],
                correctAnswer: 1,
                explanation: "Карта работает через платежную систему Mastercard, автоматически конвертируя крипту в фиат при оплате."
            },
            {
                id: 4,
                question: "Нужен ли банковский счет для использования UR?",
                options: ["Да, в Сбербанке", "Нет, приложение само генерирует IBAN", "Нужно разрешение ЦБ", "Только счет на Кайманах"],
                correctAnswer: 1,
                explanation: "Приложение предоставляет пользователю полноценный IBAN счет в европейской юрисдикции."
            }
        ]
    },
    {
        id: "m3-l3",
        title: "Лекция 3.3: Токеномика и Governance",
        duration: "2 минуты",
        xpReward: 400,
        difficulty: "Expert",
        description: "Зачем нужен токен MNT: Газ, Голосование, Сжигание.",
        content: (
            <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4 mb-6 p-4 bg-pop-card border border-pop-border rounded-xl">
                     <div className="bg-white text-black font-black p-3 rounded-full">MNT</div>
                     <div>
                         <h3 className="text-xl font-bold text-white">Нативный Токен</h3>
                         <p className="text-sm text-gray-400">Кровь экосистемы Mantle.</p>
                     </div>
                </div>

                <h3 className="text-2xl font-black text-white mt-6">3 Столпа Утилитарности</h3>
                <ol className="list-decimal pl-5 space-y-4 text-gray-300">
                    <li>
                        <strong>Gas Token:</strong> Все транзакции в сети оплачиваются в MNT. Это создает постоянный спрос на покупку.
                    </li>
                    <li>
                        <strong>Governance (Управление):</strong> Mantle — это DAO. Держатели токенов голосуют за распределение бюджета ($3 млрд+), новые партнерства и обновления сети.
                        <br/><em className="text-sm text-gray-500">Пример: Голосование MIP-28 за запуск фонда EcoFund.</em>
                    </li>
                    <li>
                        <strong>Staking & Collateral:</strong> MNT используется как залог для запуска узлов (Sequencer nodes) и как актив в DeFi (Lending).
                    </li>
                </ol>

                <Callout title="Механизм Сжигания" type="warning">
                    <p>
                        В отличие от многих L2, где газ платится в ETH, в Mantle газ платится в MNT. Часть комиссий может сжигаться или перераспределяться, уменьшая предложение токенов со временем.
                    </p>
                </Callout>
            </div>
        ),
        quiz: [
            {
                id: 1,
                question: "В каком токене оплачивается газ (комиссия) в сети Mantle?",
                options: ["ETH", "MNT", "USDT", "MATIC"],
                correctAnswer: 1,
                explanation: "MNT является нативным токеном газа, что отличает Mantle от L2, использующих ETH (как Arbitrum/Optimism)."
            },
            {
                id: 2,
                question: "Кто управляет бюджетом и развитием Mantle?",
                options: ["Генеральный директор", "Mantle DAO (держатели токенов)", "Виталик Бутерин", "SEC"],
                correctAnswer: 1,
                explanation: "Все ключевые решения принимаются через децентрализованное голосование держателей токенов."
            },
            {
                id: 3,
                question: "Для чего еще используется MNT, кроме газа?",
                options: ["Только для газа", "Для голосования и стейкинга", "Для майнинга биткоина", "Ни для чего"],
                correctAnswer: 1,
                explanation: "MNT дает право голоса в DAO и используется для обеспечения безопасности сети (стейкинг)."
            },
            {
                id: 4,
                question: "Что такое MIP в экосистеме Mantle?",
                options: ["Mantle Improvement Proposal", "Money In Pocket", "Mining Pool", "Mobile Interface Protocol"],
                correctAnswer: 0,
                explanation: "MIP (Предложение по улучшению Mantle) — это документ, за который голосует сообщество для внесения изменений."
            }
        ]
    }
];