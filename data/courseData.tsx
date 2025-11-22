import React from 'react';
import { CourseModule } from '../types';
import { ArrowRight, CheckCircle, XCircle, Info, AlertTriangle, Terminal, Coins, Building, Cpu, Globe } from 'lucide-react';

// Components for Rich Text
const Highlight = ({ children }: { children?: React.ReactNode }) => (
  <span className="text-wings-cyan font-semibold bg-wings-cyan/10 px-1 rounded">{children}</span>
);

const Callout = ({ title, children, type = 'info' }: { title: string, children?: React.ReactNode, type?: 'info' | 'warning' | 'tip' }) => {
    const colors = {
        info: "border-blue-500 bg-blue-500/10 text-blue-200",
        warning: "border-orange-500 bg-orange-500/10 text-orange-200",
        tip: "border-green-500 bg-green-500/10 text-green-200"
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[type]} my-6`}>
            <h4 className="font-bold mb-2 flex items-center gap-2">
                {type === 'info' && <Info size={18}/>}
                {type === 'warning' && <AlertTriangle size={18}/>}
                {type === 'tip' && <CheckCircle size={18}/>}
                {title}
            </h4>
            <div className="text-sm leading-relaxed opacity-90">{children}</div>
        </div>
    );
};

const CodeBlock = ({ code }: { code: string }) => (
    <div className="bg-black rounded-lg p-4 font-mono text-xs text-gray-300 overflow-x-auto border border-gray-800 my-4 relative group">
        <div className="absolute top-2 right-2 text-gray-600 text-[10px] uppercase">bash</div>
        <pre>{code}</pre>
    </div>
);

export const COURSE_MODULES: CourseModule[] = [
  {
    id: "m1",
    title: "Модуль 1: Фундаментальная архитектура",
    description: "Глубокое погружение в модульность, EigenDA и структуру сети Mantle.",
    icon: <Cpu size={32} />,
    lessons: [
      {
        id: "l1-1",
        title: "Лекция 1.1: Почему Модульность побеждает",
        duration: "25 мин",
        xpReward: 100,
        difficulty: 'Novice',
        description: "Разбор архитектуры: Монолит vs Модуль. Экономика данных.",
        content: (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              В 2025 году индустрия блокчейна окончательно признала победу модульного подхода. 
              Чтобы понять ценность <Highlight>Mantle Network</Highlight>, нам нужно разобрать фундаментальные отличия от классических решений.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Трилемма блокчейна</h3>
            <p className="text-gray-300">
              Любой блокчейн пытается сбалансировать три качества: <strong>Децентрализацию</strong>, <strong>Безопасность</strong> и <strong>Масштабируемость</strong>. 
              Ethereum (L1) жертвует масштабируемостью ради первых двух. Монолитные L2 (ранние версии Arbitrum/Optimism) пытались делать все вычисления и хранение данных в одной связке, публикуя сжатые данные в Ethereum как <code className="text-pink-400">Calldata</code>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-900 border border-red-900/30 p-4 rounded-xl">
                    <h4 className="text-red-400 font-bold mb-2">Монолитный подход</h4>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                        <li>Исполнение, Консенсус и Доступность данных тесно связаны.</li>
                        <li>Дорогое хранение истории транзакций в Ethereum.</li>
                        <li>Высокие комиссии для пользователя ($0.5 - $2).</li>
                    </ul>
                </div>
                <div className="bg-gray-900 border border-wings-cyan/30 p-4 rounded-xl">
                    <h4 className="text-wings-cyan font-bold mb-2">Модульный подход (Mantle)</h4>
                    <ul className="text-sm text-gray-400 space-y-2 list-disc pl-4">
                        <li>Слои разделены: Исполнение (Mantle), Доступность данных (EigenDA).</li>
                        <li>Данные хранятся вне Ethereum, в Ethereum идет только "корень" (хэш).</li>
                        <li>Комиссии менее $0.01.</li>
                    </ul>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. EigenDA: Секретное оружие</h3>
            <p className="text-gray-300">
                Mantle — первая сеть, интегрировавшая <Highlight>EigenDA</Highlight> (EigenLayer Data Availability). 
                Вместо того чтобы платить огромные суммы газом за запись данных в Ethereum, Mantle использует сеть валидаторов EigenLayer.
            </p>
            
            <Callout title="Как это работает технически?" type="info">
                <ol className="list-decimal pl-4 space-y-2">
                    <li><strong>Sequencer</strong> собирает транзакции пользователей в "блок".</li>
                    <li><strong>Disperser</strong> (Дисперсер) разбивает этот блок на маленькие кусочки (chunks) с использованием кодов стирания (Erasure Coding).</li>
                    <li>Эти кусочки рассылаются узлам <strong>EigenDA</strong>.</li>
                    <li>Узлы подписывают подтверждение, что они хранят данные.</li>
                    <li>В Ethereum отправляется только крошечная подпись (Certificate).</li>
                </ol>
            </Callout>

            <p className="text-gray-300 mt-4">
                <strong>Результат:</strong> Пропускная способность записи данных до 15 МБ/с (в 234 раза быстрее L1). 
                Это открывает двери для высокочастотного трейдинга (HFT) и сложных GameFi миров прямо на блокчейне.
            </p>
          </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Какой компонент позволяет Mantle снизить комиссии на газ до долей цента?",
                options: ["Mantle Treasury", "EigenDA", "mETH Protocol", "Uniswap"],
                correctAnswer: 1,
                explanation: "EigenDA выносит слой доступности данных за пределы Ethereum L1, избавляя от необходимости платить дорогой газ за Calldata."
            },
            {
                id: 2,
                question: "Что Mantle публикует в основную сеть Ethereum при использовании модульной архитектуры?",
                options: ["Все данные транзакций", "Только заголовки блоков", "Доказательства валидности и корни состояний", "Ничего"],
                correctAnswer: 2,
                explanation: "В Ethereum публикуются только доказательства (Validity/Fraud Proofs) и корни состояний (State Roots), чтобы обеспечить безопасность, но не перегружать сеть."
            }
        ]
      },
      {
        id: "l1-2",
        title: "Лекция 1.2: Навигация капитала",
        duration: "15 мин",
        xpReward: 100,
        difficulty: 'Novice',
        description: "Мосты: Official Bridge vs Aggregators. Bybit Direct.",
        content: (
          <div className="space-y-6">
            <p className="text-gray-300">
                Ликвидность — это кровь любой DeFi экосистемы. Умение дешево и безопасно перемещать капитал отличает профессионала от новичка.
            </p>
            
            <h3 className="text-xl font-bold text-white mt-6">1. Официальный мост (Mantle Bridge)</h3>
            <p className="text-gray-300">
                Это самый безопасный способ, так как он управляется смарт-контрактами самой сети.
                <br/><strong>Минус:</strong> Долго (для вывода нужно ждать челлендж-период, хотя с OP Succinct это время сократилось) и дорого (требует транзакции в L1 Ethereum).
            </p>

            <h3 className="text-xl font-bold text-white mt-6">2. Агрегаторы (Jumper, Bungee)</h3>
            <p className="text-gray-300">
                Эти протоколы ищут лучший путь через пулы ликвидности (Stargate, Across и т.д.).
                <br/><strong>Плюс:</strong> Можно перевести USDT из Arbitrum в Mantle за 1 минуту и $0.5 комиссии.
            </p>

            <Callout title="Лайфхак: Bybit Direct Withdrawal" type="tip">
                <p>
                    Поскольку Mantle тесно связана с биржей Bybit, вы можете использовать её как "телепорт".
                    <br/>
                    1. Купите MNT или USDT на Bybit.<br/>
                    2. Нажмите "Withdraw".<br/>
                    3. Выберите сеть <strong>Mantle Network</strong>.<br/>
                    4. <strong>Комиссия часто близка к 0</strong>, а зачисление мгновенное.
                </p>
            </Callout>
          </div>
        ),
        quiz: [
            {
                id: 1,
                question: "Какой способ ввода средств обычно самый дешевый для перевода USDT из Arbitrum в Mantle?",
                options: ["Официальный мост через Ethereum", "Агрегатор (Jumper/Bungee)", "Отправка на CEX и вывод в Mantle", "SWIFT перевод"],
                correctAnswer: 1,
                explanation: "Агрегаторы находят наиболее эффективные маршруты между L2 сетями, минуя дорогой L1."
            }
        ]
      },
      {
        id: "l1-3",
        title: "Практикум: Настройка окружения",
        duration: "20 мин",
        isPractical: true,
        xpReward: 150,
        difficulty: 'Intermediate',
        description: "Настройка RPC, добавление сети и первый депозит.",
        content: (
            <div className="space-y-4">
                <p className="text-gray-300">
                    Прежде чем взаимодействовать с DeFi, нужно подготовить ваш "инструмент" — Web3 кошелек.
                </p>
                <h3 className="text-white font-bold">Параметры сети для ручного ввода:</h3>
                <div className="bg-gray-900 p-4 rounded border border-gray-700 font-mono text-sm space-y-2">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Network Name:</span>
                        <span className="text-wings-cyan select-all">Mantle</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">RPC URL:</span>
                        <span className="text-wings-cyan select-all">https://rpc.mantle.xyz</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Chain ID:</span>
                        <span className="text-wings-cyan select-all">5000</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Symbol:</span>
                        <span className="text-wings-cyan select-all">MNT</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Explorer:</span>
                        <span className="text-wings-cyan select-all">https://explorer.mantle.xyz</span>
                    </div>
                </div>
            </div>
        ),
        practicalSteps: (
            <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-wings-purple flex-shrink-0 flex items-center justify-center font-bold text-white">1</div>
                    <div>
                        <h4 className="font-bold text-white">Установите Rabby Wallet или MetaMask</h4>
                        <p className="text-sm text-gray-400">Мы рекомендуем Rabby за его функции безопасности и удобный интерфейс.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-wings-purple flex-shrink-0 flex items-center justify-center font-bold text-white">2</div>
                    <div>
                        <h4 className="font-bold text-white">Добавьте сеть Mantle</h4>
                        <p className="text-sm text-gray-400">Используйте параметры выше или перейдите на <a href="https://chainlist.org" target="_blank" className="text-wings-cyan underline">Chainlist.org</a>.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-wings-purple flex-shrink-0 flex items-center justify-center font-bold text-white">3</div>
                    <div>
                        <h4 className="font-bold text-white">Получите Gas Token (MNT)</h4>
                        <p className="text-sm text-gray-400">Без MNT вы не сможете совершать транзакции. Выведите минимум 10 MNT с биржи.</p>
                    </div>
                 </div>
                 <div className="bg-green-900/20 border border-green-900 p-4 rounded text-center">
                     <p className="text-green-400 text-sm font-bold">Задание: Совершите любую транзакцию (например, отправьте 0.1 MNT сами себе), чтобы активировать кошелек в эксплорере.</p>
                 </div>
            </div>
        )
      }
    ],
    unlockXp: 0
  },
  {
    id: "m2",
    title: "Модуль 2: Мастерство DeFi",
    description: "Ликвидный стейкинг, стратегии фарминга и управление рисками.",
    icon: <Coins size={32} />,
    unlockXp: 200,
    lessons: [
      {
        id: "l2-1",
        title: "Лекция 2.1: Алхимия mETH и cmETH",
        duration: "25 мин",
        xpReward: 120,
        difficulty: 'Intermediate',
        description: "Разница между LSD и LRT. Откуда берется доходность?",
        content: (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Эволюция стейкинга</h3>
            <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800">
                    <div className="text-3xl">🥩</div>
                    <div>
                        <h4 className="font-bold text-white">LSD (mETH)</h4>
                        <p className="text-sm text-gray-400 mt-1">Liquid Staking Derivative. Вы отдаете ETH валидатору, получаете mETH. Доход идет от уровня консенсуса Ethereum (около 3-4% APY).</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 bg-gray-900 rounded-xl border border-wings-cyan/50 shadow-[0_0_15px_rgba(0,210,255,0.1)]">
                    <div className="text-3xl">🥞</div>
                    <div>
                        <h4 className="font-bold text-wings-cyan">LRT (cmETH)</h4>
                        <p className="text-sm text-gray-400 mt-1">Liquid Restaking Token. Это mETH, который дополнительно используется в протоколах безопасности (EigenLayer, Symbiotic, Karak). Доходность суммируется.</p>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-6">Математика cmETH</h3>
            <p className="text-gray-300">
                <code className="text-yellow-400">Total Yield = ETH POS Yield + AVS Yield + Points (EigenLayer + Mantle)</code>
            </p>
            <p className="text-gray-300 mt-2">
                Важно понимать, что <strong>cmETH</strong> (Composable mETH) позволяет использовать актив в DeFi (например, как залог на INIT Capital) и при этом продолжать получать поинты и доходность. Это решает проблему фрагментации ликвидности.
            </p>
          </div>
        ),
        quiz: [
            {
                id: 1,
                question: "В чем ключевое преимущество cmETH перед обычным mETH?",
                options: ["Он дешевле", "Он позволяет получать доходность от рестейкинга и поинты одновременно с использованием в DeFi", "Он стабилен к доллару", "Нет преимуществ"],
                correctAnswer: 1,
                explanation: "cmETH является Composable (компонуемым) токеном, сохраняющим право на доходность рестейкинга даже при использовании в других протоколах."
            }
        ]
      },
      {
        id: "l2-2",
        title: "Практикум: Стратегия 'Наслоение'",
        duration: "30 мин",
        isPractical: true,
        xpReward: 200,
        difficulty: 'Expert',
        description: "Симуляция создания позиции с плечом на INIT Capital.",
        content: (
            <div>
                <p className="text-gray-300 mb-4">
                    Мы разберем стратегию <strong>Looping</strong>, которая позволяет увеличить доходность от стейкинга в 2-3 раза. 
                    <br/><span className="text-red-400 text-xs">Внимание: Стратегия несет риски ликвидации!</span>
                </p>
            </div>
        ),
        practicalSteps: (
            <div className="space-y-6">
                <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg">
                    <h4 className="font-bold text-wings-cyan mb-2">Шаг 1: Подготовка активов</h4>
                    <p className="text-sm text-gray-300">Вам понадобится mETH или cmETH. Обменяйте MNT или USDT на <a href="#" className="text-blue-400 underline">Merchant Moe</a>.</p>
                </div>

                <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg">
                    <h4 className="font-bold text-wings-cyan mb-2">Шаг 2: INIT Capital - Looping Hook</h4>
                    <ul className="list-decimal pl-4 text-sm text-gray-300 space-y-2">
                        <li>Перейдите на INIT Capital.</li>
                        <li>Выберите актив <strong>mETH</strong>.</li>
                        <li>Выберите режим <strong>"Loop"</strong>.</li>
                        <li>Установите плечо (Leverage). Рекомендуем не более <strong>2.5x</strong> для новичков.</li>
                    </ul>
                    <div className="mt-3 bg-black p-3 rounded border border-gray-600 text-xs font-mono">
                        <p className="text-green-400">Simulation:</p>
                        <p>Deposit: 10 mETH</p>
                        <p>Borrow: 15 ETH (converted to mETH)</p>
                        <p>Total Position: 25 mETH</p>
                        <p>Yield: ~3.5% * 2.5 = ~8.75% (минус % за займ)</p>
                    </div>
                </div>
            </div>
        )
      }
    ]
  },
  {
      id: "m3",
      title: "Модуль 3: RWA и Новые горизонты",
      description: "Токенизация реальных активов и будущее банкинга.",
      icon: <Globe size={32} />,
      unlockXp: 400,
      lessons: [
        {
          id: "l3-1",
          title: "Лекция 3.1: RWA - Торговля акциями",
          duration: "15 мин",
          xpReward: 150,
          difficulty: 'Intermediate',
          description: "Как купить NVIDIA на блокчейне через xStocks?",
          content: (
              <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                      <Building className="w-12 h-12 text-wings-purple" />
                      <h3 className="text-2xl font-bold text-white">Wall Street on Chain</h3>
                  </div>
                  <p className="text-gray-300">
                      Платформа <strong>xStocks</strong> в партнерстве с Backed Finance позволяет покупать токенизированные ценные бумаги.
                  </p>
                  <Callout title="Юридическая структура" type="info">
                      <p>
                          На каждый токен <strong>bNVDA</strong> (Backed NVIDIA) приходится одна реальная акция, которая хранится у регулируемого кастодиана в Швейцарии. 
                          Токен является правом требования на эту акцию.
                      </p>
                  </Callout>
                  <p className="text-gray-300">
                      <strong>Преимущества:</strong>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Торговля 24/7 (фондовый рынок работает только в будни).</li>
                          <li>Компонуемость (можно использовать bNVDA как залог в DeFi).</li>
                          <li>Дробление (можно купить 0.01 акции).</li>
                      </ul>
                  </p>
              </div>
          ),
          quiz: [
              {
                  id: 1,
                  question: "Чем обеспечен токен bNVDA на платформе xStocks?",
                  options: ["Ничем, это алгоритмический токен", "Реальной акцией NVIDIA у кастодиана", "Золотом", "Обещанием CEO"],
                  correctAnswer: 1,
                  explanation: "Согласно модели Backed Finance, каждый токен полностью обеспечен реальным активом."
              }
          ]
        }
      ]
  }
];