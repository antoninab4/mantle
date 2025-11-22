import React from 'react';
import { LucideIcon } from "lucide-react";

// --- Navigation ---
export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

// --- User & Gamification ---
export interface UserState {
  name: string;
  xp: number;
  level: number;
  streak: number;
  completedLessonIds: string[];
  isRegistered: boolean;
}

export interface UserProfile {
    xp: number;
    level: number;
    streak: number;
    completedLessons: string[];
    hearts: number;
}

export interface Rank {
  name: string;
  minXp: number;
  color: string;
  icon: string;
}

// --- Content: Course ---
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string; // Shown after answering
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  duration: string;
  difficulty: 'Novice' | 'Intermediate' | 'Expert';
  
  // Content
  theoryContent?: React.ReactNode;
  practicalContent?: React.ReactNode; // Optional step-by-step guide
  
  // Mixed support for different component versions
  content?: React.ReactNode;
  practicalSteps?: React.ReactNode;
  isPractical?: boolean;

  // Assessment
  quiz?: QuizQuestion[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: Lesson[];
  unlockXp: number; // XP required to unlock this module
}

// --- Content: Ecosystem ---
export interface EcosystemCampaign {
  id: string;
  title: string;
  description: string;
  apy?: string;
  tags: string[];
  link: string;
  status: 'Active' | 'Ended' | 'Coming Soon';
  platform: string;
}