import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserState } from './types';
import { getUserState, saveUserState } from './utils/storage';
import MainLayout from './components/layout/MainLayout';
import WelcomeScreen from './components/onboarding/WelcomeScreen';
import CourseMap from './components/learning/CourseMap';
import EcosystemHub from './components/ecosystem/EcosystemHub';
import ProfileView from './components/profile/ProfileView';
import WingsHub from './components/community/WingsHub';

const App: React.FC = () => {
  const [user, setUser] = useState<UserState>(getUserState());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const stored = getUserState();
      setUser(stored);
      setIsLoading(false);
  }, []);

  const handleRegistration = (name: string) => {
      const newUser: UserState = {
          ...user,
          name: name,
          isRegistered: true,
          xp: 0,
          level: 1
      };
      setUser(newUser);
      saveUserState(newUser);
  };

  const handleUserUpdate = (updatedUser: UserState) => {
      setUser(updatedUser);
  };

  if (isLoading) return <div className="min-h-screen bg-pop-bg" />;

  if (!user.isRegistered) {
      return <WelcomeScreen onComplete={handleRegistration} />;
  }

  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<CourseMap user={user} onUpdateUser={handleUserUpdate} />} />
          <Route path="/ecosystem" element={<EcosystemHub />} />
          <Route path="/profile" element={<ProfileView user={user} />} />
          <Route path="/community" element={<WingsHub />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default App;