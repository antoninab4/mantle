import React from 'react';
import { BookOpen, Youtube, MessageCircle, Heart, MonitorPlay } from 'lucide-react';

export const WINGS_LINKS = [
  {
    name: "Telegram Channel",
    url: "https://t.me/WingsNodeTeam",
    description: "Новости, анонсы и комьюнити",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    name: "Knowledge Bot",
    url: "https://t.me/WingsNodeTeam_Book_bot",
    description: "База знаний по нодам и тестнетам",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@WingsNodeTeam",
    description: "Видео-гайды и обзоры экосистем",
    icon: <Youtube className="w-5 h-5" />
  },
  {
    name: "RuTube",
    url: "https://rutube.ru/channel/26028565/",
    description: "Зеркало видео контента",
    icon: <MonitorPlay className="w-5 h-5" />
  },
  {
    name: "Boosty",
    url: "https://boosty.to/wingsnodeteam",
    description: "Инсайды по проектам",
    icon: <Heart className="w-5 h-5" />
  }
];

export const LEVELS = [
    { name: "Newbie", minXp: 0, color: "text-gray-400", icon: "🥚" },
    { name: "Explorer", minXp: 500, color: "text-pop-cyan", icon: "🧭" },
    { name: "Strategist", minXp: 1200, color: "text-pop-green", icon: "🧠" },
    { name: "Mantle Architect", minXp: 2500, color: "text-pop-purple", icon: "🏛️" },
    { name: "Whale", minXp: 4000, color: "text-pop-yellow", icon: "🐳" }
];