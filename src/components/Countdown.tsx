import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/Countdown.module.scss';

export default function Countdown() {
  const {
    minutes,
    seconds,
    resetCountdown,
    startCountdown,
    hasFinished,
    isActive,
  } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled type="button" className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="white"
                />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={startCountdown}
              className={styles.countdownButton}
            >
              Iniciar um ciclo
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0V14L11 7L0 0Z" fill="white" />
              </svg>
            </button>
          )}
        </>
      )}
    </div>
  );
}
