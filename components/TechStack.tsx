import React from 'react';
import Card from './ui/Card';
import { Cpu, ShieldCheck, Zap, Network, Database } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in-up">
       <header>
        <h2 className="text-3xl font-bold text-white mb-4">Архитектурная Эволюция</h2>
        <p className="text-gray-400 max-w-3xl">
            К 2025 году Mantle окончательно закрепила переход от монолитной архитектуры к модульной парадигме, 
            интегрировав EigenDA и OP Succinct.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card title="EigenDA: Экономика данных" icon={<DatabaseIcon />}>
            <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                    Mantle использует EigenDA — слой доступности данных на базе рестейкинга EigenLayer.
                    В отличие от Call Data в Ethereum, это позволяет хранить «блобы» данных дешевле.
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-sm text-gray-400 bg-gray-800/30 p-3 rounded-lg">
                        <Zap className="text-yellow-400 w-4 h-4" />
                        <span>Пропускная способность: <b>15 МБ/с</b> (в 234x быстрее L1)</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-400 bg-gray-800/30 p-3 rounded-lg">
                        <ShieldCheck className="text-green-400 w-4 h-4" />
                        <span>Безопасность: <b>$335 млн</b> в рестейкинге ETH</span>
                    </li>
                </ul>
            </div>
         </Card>

         <Card title="OP Succinct & ZK-пруфы" icon={<CpuIcon />}>
            <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                    Миграция на OP Succinct позволяет использовать доказательства с нулевым разглашением (ZK Proofs) 
                    для валидации состояний.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-800/50 p-3 rounded border border-gray-700">
                        <span className="block text-xs text-gray-500 uppercase">Было</span>
                        <span className="text-red-400 font-mono text-sm">7 дней (Optimistic)</span>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded border border-wings-cyan/30">
                        <span className="block text-xs text-gray-500 uppercase">Стало</span>
                        <span className="text-wings-cyan font-mono text-sm">1-2 часа (Hybrid ZK)</span>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Устраняет необходимость доверять одному централизованному секвенсору.
                </p>
            </div>
         </Card>
      </div>

      <div className="bg-gradient-to-r from-wings-dark to-black p-8 rounded-2xl border border-gray-800 text-center">
          <Network className="w-12 h-12 text-wings-purple mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Технологический стек готов к масштабированию</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Архитектура Mantle позволяет поддерживать высоконагруженные приложения GameFi и SocialFi с микротранзакциями.
          </p>
      </div>
    </div>
  );
};

// Helper Icons
const DatabaseIcon = () => <Database className="w-6 h-6" />;
const CpuIcon = () => <Cpu className="w-6 h-6" />;

export default TechStack;