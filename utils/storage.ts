import { UserState } from '../types';

const STORAGE_KEY = 'wings_mantle_academy_v2';

const DEFAULT_STATE: UserState = {
    name: '',
    xp: 0,
    level: 1,
    streak: 1,
    completedLessonIds: [],
    isRegistered: false
};

export const getUserState = (): UserState => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : DEFAULT_STATE;
    } catch (e) {
        console.error("Failed to load state", e);
        return DEFAULT_STATE;
    }
};

export const saveUserState = (state: UserState) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error("Failed to save state", e);
    }
};

export const resetAccount = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
};

export const calculateLevel = (xp: number): number => {
    return Math.floor(xp / 500) + 1;
};
