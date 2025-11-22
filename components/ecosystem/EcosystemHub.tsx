import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card3D, Badge } from '../ui/GameUI';
import { CAMPAIGNS } from '../../data/ecosystemData';
import { TrendingUp, Wallet, Activity, Database, Building2, Coins, ExternalLink, Radar } from 'lucide-react';

const TVL_DATA = [{month:'Jun',value:120},{month:'Jul',value:180},{month:'Aug',value:250},{month:'Sep',value:310},{month:'Oct',value:450},{month:'Nov',value:687}];
const TREASURY_ASSETS = [{name:'MNT',value:2330,color:'#1cb0f6',label:'$2.33B'},{name:'ETH',value:307,color:'#ce82ff',label:'$307M'},{name:'BTC',value:259,color:'#f59e0b',label:'$259M'},{name:'USDT',value:255,color:'#10b981',label:'$255M'}];

const EcosystemHub: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 animate-fade-in space-y-8 pb-24">
            <header className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
                <div>
                    <div className="flex items-center gap-2 mb-2"><Activity className="text-pop-cyan animate-pulse" /><span className="text-xs font-bold uppercase tracking-widest text-pop-cyan">System Status: Online</span></div>
                    <h1 className="text-4xl md:text-5xl font-black text-white">ECOSYSTEM HUD</h1>
                    <p className="text-gray-400 max-w-xl mt-2">Аналитический центр экосистемы Mantle.</p>
                </div>
                <div className="text-right hidden md:block"><div className="text-3xl font-black text-white">$687.2M</div><div className="text-xs text-gray-500 uppercase font-bold">TVL</div></div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card3D className="h-full min-h-[350px] flex flex-col" color="cyan">
                        <div className="flex justify-between items-center mb-6"><h3 className="text-xl font-black text-white flex items-center gap-2"><TrendingUp className="text-pop-cyan" /> TVL GROWTH</h3><Badge color="green">+1,600% Users</Badge></div>
                        <div className="flex-1 w-full h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={TVL_DATA}>
                                    <defs><linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#1cb0f6" stopOpacity={0.4}/><stop offset="95%" stopColor="#1cb0f6" stopOpacity={0}/></linearGradient></defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} vertical={false} />
                                    <XAxis dataKey="month" stroke="#94a3b8" tick={{fontSize: 12}} />
                                    <YAxis hide />
                                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                                    <Area type="monotone" dataKey="value" stroke="#1cb0f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card3D>
                </div>
                <div className="lg:col-span-1">
                    <Card3D className="h-full" color="yellow">
                        <div className="flex items-center gap-2 mb-6"><Wallet className="text-pop-yellow" /><h3 className="text-xl font-black text-white">TREASURY</h3></div>
                        <div className="text-center mb-6"><div className="text-4xl font-black text-white drop-shadow-md">$3.15B</div><div className="text-xs text-gray-500 font-bold uppercase">Total DAO Assets</div></div>
                        <div className="space-y-4">
                            {TREASURY_ASSETS.map((asset) => (
                                <div key={asset.name} className="relative">
                                    <div className="flex justify-between text-xs font-bold text-gray-300 mb-1"><span>{asset.name}</span><span style={{ color: asset.color }}>{asset.label}</span></div>
                                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden"><div className="h-full rounded-full shadow-[0_0_10px_currentColor]" style={{ width: `${(asset.value / 3150) * 100}%`, backgroundColor: asset.color }} /></div>
                                </div>
                            ))}
                        </div>
                    </Card3D>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wide flex items-center gap-2"><Database className="text-pop-purple" /> Key Sectors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card3D color="cyan"><div className="w-12 h-12 bg-pop-cyan/20 rounded-xl flex items-center justify-center text-pop-cyan mb-4"><Coins size={24} /></div><h4 className="text-lg font-black text-white mb-2">CORE ASSETS</h4><ul className="text-sm text-gray-400 space-y-2"><li>mETH <span className="text-pop-cyan font-bold">LSD</span></li><li>cmETH <span className="text-pop-purple font-bold">Restaking</span></li><li>FBTC <span className="text-orange-500 font-bold">Bitcoin</span></li></ul></Card3D>
                    <Card3D color="purple"><div className="w-12 h-12 bg-pop-purple/20 rounded-xl flex items-center justify-center text-pop-purple mb-4"><Activity size={24} /></div><h4 className="text-lg font-black text-white mb-2">DEFI CLUSTER</h4><ul className="text-sm text-gray-400 space-y-2"><li>Merchant Moe <span className="text-white font-bold">DEX</span></li><li>INIT Capital <span className="text-white font-bold">Lending</span></li><li>ApeX <span className="text-white font-bold">Perps</span></li></ul></Card3D>
                    <Card3D color="green"><div className="w-12 h-12 bg-pop-green/20 rounded-xl flex items-center justify-center text-pop-green mb-4"><Building2 size={24} /></div><h4 className="text-lg font-black text-white mb-2">REAL WORLD</h4><ul className="text-sm text-gray-400 space-y-2"><li>xStocks <span className="text-green-400 font-bold">Stocks</span></li><li>UR App <span className="text-blue-400 font-bold">Banking</span></li></ul></Card3D>
                </div>
            </div>

            <div>
                 <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wide flex items-center gap-2"><Radar className="text-pop-red animate-pulse" /> Alpha Radar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CAMPAIGNS.map((camp) => (
                        <div key={camp.id} className={`relative overflow-hidden bg-slate-900/60 border-2 rounded-2xl p-4 transition-all hover:border-pop-cyan group ${camp.status === 'Ended' ? 'border-gray-800 opacity-60 grayscale' : 'border-white/10'}`}>
                            {camp.status === 'Active' && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:animate-shockwave opacity-0 group-hover:opacity-100 pointer-events-none" />}
                            <div className="flex justify-between items-start mb-2"><Badge color={camp.status === 'Active' ? 'green' : 'gray'}>{camp.status}</Badge><Badge color="yellow" variant="outline">{camp.apy}</Badge></div>
                            <h3 className="text-lg font-black text-white mb-1 group-hover:text-pop-cyan transition-colors">{camp.title}</h3>
                            <p className="text-xs font-bold text-gray-500 uppercase mb-3">{camp.platform}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex gap-2">{camp.tags.map(t => <span key={t} className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400">{t}</span>)}</div>
                                <a href={camp.link} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-pop-cyan flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer z-10 relative">
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EcosystemHub;