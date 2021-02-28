import { createContext, ReactNode, useState } from 'react';

import challenges from '../data/challenges.json';

interface IChallengesProvider {
  children: ReactNode;
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
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: IChallenge;
  experienceToNextLevel: number;
}

export const ChallengesContext = createContext({} as IChallengesContext);

export default function ChallengesProvider({ children }: IChallengesProvider) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = ((level + 1) * 4) ** 2;

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        levelUp,
        startNewChallenge,
        resetChallenge,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
