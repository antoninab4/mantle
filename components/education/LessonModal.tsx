import React from 'react';
import LessonPlayer from '../learning/LessonPlayer';
import { Lesson } from '../../types';

interface LessonModalProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: (earnedXp: number) => void;
}

const LessonModal: React.FC<LessonModalProps> = (props) => {
  return <LessonPlayer {...props} />;
};

export default LessonModal;