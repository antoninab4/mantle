import React from 'react';
import Card from './ui/Card';
import { Coins, Building2, LineChart, Smartphone } from 'lucide-react';

const EcosystemView: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-white mb-4">Продуктовая Матрица (The Mantle Stack)</h2>
        <p className="text-gray-400">Вертикально интегрированный холдинг DeFi-продуктов.</p>
      </header>

      {/* Section 1: Core Assets */}
      <section>
        <h3 className="text-xl text-wings-cyan font-semibold mb-4 flex items-center gap-2">
            <Coins className="w-5 h-5" /> Основные Активы
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* mETH */}
            <Card title="mETH & cmETH" className="border-t-4 border-t-wings-cyan">
                <p className="text-sm text-gray-300 mb-4">
                    <b>cmETH</b> — это токен ликвидного рестейкинга (LRT). Доходность от ETH PoS + EigenLayer/Karak/Symbiotic.
                </p>
                <div className="bg-black/40 p-2 rounded text-xs text-center text-gray-400">
                    Мультипликатор: Yield + Points
                </div>
            </Card>

            {/* FBTC */}
            <Card title="FBTC (Function BTC)" className="border-t-4 border-t-orange-500">
                <p className="text-sm text-gray-300 mb-4">
                    Биткоин в EVM. Обернутый актив 1:1, позволяющий использовать BTC в DeFi (кредитование, фарминг) сети Mantle.
                </p>
                <div className="bg-black/40 p-2 rounded text-xs text-center text-gray-400">
                    Omnichain (Babylon, Solv)
                </div>
            </Card>

            {/* MNT */}
            <Card title="$MNT Token" className="border-t-4 border-t-white">
                <p className="text-sm text-gray-300 mb-4">
                    Газ сети и токен управления. Используется в Rewards Station для получения дропов (EIGEN, COOK).
                </p>
            </Card>
        </div>
      </section>

      {/* Section 2: RWA & Banking */}
      <section>
        <h3 className="text-xl text-wings-purple font-semibold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" /> RWA и Банкинг
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col md:flex-row gap-6 bg-gray-900/30 border border-gray-800 rounded-xl p-6 items-center">
                <div className="p-4 bg-gray-800 rounded-full">
                    <LineChart className="w-8 h-8 text-green-400" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white">xStocks</h4>
                    <p className="text-sm text-gray-400 mt-1">
                        Торговля токенизированными акциями США (NVIDIA, Apple, MicroStrategy) 24/7.
                        Обеспечены реальными бумагами через Backed Finance.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-gray-900/30 border border-gray-800 rounded-xl p-6 items-center">
                <div className="p-4 bg-gray-800 rounded-full">
                    <Smartphone className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white">Приложение UR (Banking)</h4>
                    <p className="text-sm text-gray-400 mt-1">
                        Необанк на блокчейне. IBAN счета, дебетовые карты, доходность 5-8% APY на стейблкоины (USDe).
                    </p>
                </div>
            </div>
        </div>
      </section>

       {/* Section 3: DeFi Map */}
       <section>
        <h3 className="text-xl text-white font-semibold mb-4">Ключевые DeFi Протоколы</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-gray-500 border-b border-gray-800 text-xs uppercase tracking-wider">
                        <th className="p-4">Протокол</th>
                        <th className="p-4">Тип</th>
                        <th className="p-4">Особенность</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-300">
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                        <td className="p-4 font-medium text-white">Merchant Moe</td>
                        <td className="p-4">DEX</td>
                        <td className="p-4">Liquidity Book, низкое проскальзывание</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                        <td className="p-4 font-medium text-white">INIT Capital</td>
                        <td className="p-4">Lending</td>
                        <td className="p-4">Hooks, стратегии "Looping" в один клик</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                        <td className="p-4 font-medium text-white">ApeX Protocol</td>
                        <td className="p-4">Derivatives</td>
                        <td className="p-4">Trade-to-Earn, RWA фьючерсы</td>
                    </tr>
                </tbody>
            </table>
        </div>
       </section>
    </div>
  );
};

export default EcosystemView;
