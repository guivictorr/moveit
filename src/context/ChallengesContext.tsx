import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookie from 'js-cookie';

import challenges from '../data/challenges.json';
import LevelUpModal from '../components/LevelUpModal';

interface IChallengesProvider {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface IChallengesContext {
  levelUp(): void;
  startNewChallenge(): void;
  resetChallenge(): void;
  completeChallenge(): void;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  experienceToNextLevel: number;
  level: number;
}

export const ChallengesContext = createContext({} as IChallengesContext);

export default function ChallengesProvider({
  children,
  ...rest
}: IChallengesProvider) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const experienceToNextLevel = ((level + 1) * 4) ** 2;

  useEffect(() => {
    Cookie.set('level', String(level));
    Cookie.set('currentExperience', String(currentExperience));
    Cookie.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp`,
        icon: `favicon.png`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
        level,
      }}
    >
      {children}
      {isLevelUpModalOpen && (
        <LevelUpModal level={level} action={closeLevelUpModal} />
      )}
    </ChallengesContext.Provider>
  );
}
