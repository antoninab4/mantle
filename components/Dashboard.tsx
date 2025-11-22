import React from 'react';
import { Card3D, Button3D, ProgressBar, Badge } from './ui/GameUI';
import { User, Zap, Trophy, Target, Flame } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock user data (in a real app, fetch from context/storage)
  const stats = {
      xp: 1250,
      level: 3,
      nextLevelXp: 1500,
      streak: 5,
      rank: "Mantle Explorer",
      achievements: [
          { icon: "🥚", name: "First Steps", unlocked: true },
          { icon: "🥩", name: "Staker", unlocked: true },
          { icon: "🚀", name: "To The Moon", unlocked: false },
          { icon: "🧠", name: "Big Brain", unlocked: false },
      ]
  };

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      
      {/* Hero Profile Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Avatar Card */}
          <div className="w-full md:w-1/3">
              <Card3D className="text-center relative overflow-hidden" color="cyan">
                  <div className="w-32 h-32 mx-auto bg-pop-bg rounded-full border-4 border-pop-cyan flex items-center justify-center mb-4 shadow-3d">
                      <User size={64} className="text-pop-cyan" />
                  </div>
                  <h2 className="text-2xl font-black text-white mb-1">CryptoStudent</h2>
                  <Badge variant="solid" color="cyan">{stats.rank}</Badge>
                  
                  <div className="mt-6 flex justify-center gap-4">
                      <div className="text-center">
                          <div className="text-2xl font-black text-pop-yellow flex items-center justify-center gap-1">
                              <Flame fill="currentColor" size={24}/> {stats.streak}
                          </div>
                          <div className="text-xs text-gray-400 font-bold uppercase">Streak</div>
                      </div>
                      <div className="text-center">
                          <div className="text-2xl font-black text-pop-purple flex items-center justify-center gap-1">
                              <Trophy fill="currentColor" size={24}/> {stats.level}
                          </div>
                          <div className="text-xs text-gray-400 font-bold uppercase">Level</div>
                      </div>
                  </div>
              </Card3D>
          </div>

          {/* Stats & Progress */}
          <div className="w-full md:w-2/3 space-y-6">
              <Card3D>
                  <div className="flex justify-between items-end mb-2">
                      <h3 className="text-xl font-black text-white uppercase">Текущий Уровень</h3>
                      <span className="text-pop-cyan font-bold">{stats.xp} / {stats.nextLevelXp} XP</span>
                  </div>
                  <ProgressBar percentage={(stats.xp / stats.nextLevelXp) * 100} color="bg-pop-cyan" />
                  <p className="text-sm text-gray-400 mt-4">
                      Вам нужно еще <strong>{stats.nextLevelXp - stats.xp} XP</strong> чтобы достичь уровня 4. 
                      Пройдите урок в "Курсе Архитектора", чтобы получить опыт.
                  </p>
                  <div className="mt-6">
                     <Button3D fullWidth variant="green">Продолжить обучение</Button3D>
                  </div>
              </Card3D>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.achievements.map((ach, i) => (
                      <div key={i} className={`bg-pop-card border-2 ${ach.unlocked ? 'border-pop-yellow' : 'border-pop-gray opacity-50'} rounded-2xl p-4 text-center`}>
                          <div className="text-4xl mb-2 grayscale-0">{ach.icon}</div>
                          <div className={`text-xs font-bold uppercase ${ach.unlocked ? 'text-white' : 'text-gray-500'}`}>{ach.name}</div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Daily Quests */}
      <h3 className="text-2xl font-black text-white uppercase">Задания дня</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
              { title: "Пройти 1 урок", reward: "50 XP", done: true },
              { title: "Ответить верно на 5 вопросов", reward: "20 XP", done: false },
              { title: "Поделиться в Twitter", reward: "100 XP", done: false }
          ].map((quest, i) => (
              <Card3D key={i} className={quest.done ? 'opacity-50' : ''}>
                  <div className="flex justify-between items-start mb-2">
                      <Target className={quest.done ? 'text-pop-green' : 'text-white'} />
                      <Badge color="yellow">{quest.reward}</Badge>
                  </div>
                  <h4 className="font-bold text-white mb-4">{quest.title}</h4>
                  {quest.done ? (
                      <Button3D fullWidth disabled variant="gray">Выполнено</Button3D>
                  ) : (
                      <Button3D fullWidth variant="purple">Начать</Button3D>
                  )}
              </Card3D>
          ))}
      </div>

    </div>
  );
};

export default Dashboard;