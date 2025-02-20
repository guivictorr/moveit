import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallengesContext } from './ChallengesContext';

// eslint-disable-next-line no-undef
let countdownTimeout: NodeJS.Timeout;

interface ICountdownProvider {
  children: ReactNode;
}

interface ICountdownContext {
  hasFinished: boolean;
  isActive: boolean;
  minutes: number;
  seconds: number;
  startCountdown(): void;
  resetCountdown(): void;
}

export const CountdownContext = createContext({} as ICountdownContext);

export default function CountdownProvider({ children }: ICountdownProvider) {
  const { startNewChallenge } = useContext(ChallengesContext);
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        hasFinished,
        minutes,
        seconds,
        resetCountdown,
        startCountdown,
        isActive,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
