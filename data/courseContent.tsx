import React from 'react';
import { CourseModule } from '../types';
import { Layers, Coins, Globe } from 'lucide-react';
import { MODULE_1_LESSONS } from './modules/module1';
import { MODULE_2_LESSONS } from './modules/module2';
import { MODULE_3_LESSONS } from './modules/module3';

export const COURSE_MODULES: CourseModule[] = [
    {
        id: "module-1",
        title: "Модуль 1: Архитектура",
        description: "Mantle Network, EigenDA и Модульность.",
        icon: <Layers size={32} />,
        unlockXp: 0,
        lessons: MODULE_1_LESSONS
    },
    {
        id: "module-2",
        title: "Модуль 2: Мастерство DeFi",
        description: "mETH, FBTC и стратегии доходности.",
        icon: <Coins size={32} />,
        unlockXp: 400,
        lessons: MODULE_2_LESSONS
    },
    {
        id: "module-3",
        title: "Модуль 3: RWA и Будущее",
        description: "Акции США, Governance и Необанкинг.",
        icon: <Globe size={32} />,
        unlockXp: 1200,
        lessons: MODULE_3_LESSONS
    }
];