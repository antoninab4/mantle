import { CourseModule } from '../types';
import { MODULE_1_LESSONS } from './modules/module1';
import { MODULE_2_LESSONS } from './modules/module2';
import { MODULE_3_LESSONS } from './modules/module3';
import { Cpu, Coins, Globe } from 'lucide-react';
import React from 'react';

export const COURSE_MODULES: CourseModule[] = [
    {
        id: "m1",
        title: "Модуль 1: Архитектура",
        description: "Узнайте, как Mantle масштабирует Ethereum.",
        icon: React.createElement(Cpu, { size: 32 }),
        lessons: MODULE_1_LESSONS,
        unlockXp: 0
    },
    {
        id: "m2",
        title: "Модуль 2: Мастер DeFi",
        description: "Зарабатывайте на стейкинге и фарминге.",
        icon: React.createElement(Coins, { size: 32 }),
        lessons: MODULE_2_LESSONS,
        unlockXp: 200 // Need 200 XP to unlock
    },
    {
        id: "m3",
        title: "Модуль 3: RWA & Future",
        description: "Связь реального мира и крипты.",
        icon: React.createElement(Globe, { size: 32 }),
        lessons: MODULE_3_LESSONS,
        unlockXp: 400 // Need 400 XP to unlock
    }
];