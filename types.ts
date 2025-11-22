import React from 'react';
import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

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

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  duration: string;
  difficulty: 'Novice' | 'Intermediate' | 'Expert';
  content?: React.ReactNode;
  practicalSteps?: React.ReactNode;
  isPractical?: boolean;
  quiz?: QuizQuestion[];
  // Legacy support fields
  theoryContent?: React.ReactNode;
  practicalContent?: React.ReactNode;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: Lesson[];
  unlockXp: number;
}

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