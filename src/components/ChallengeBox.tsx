import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.scss';

export default function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext);
  const { amount, description, type } = activeChallenge;

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengesActive}>
          <header>Ganhe {amount} xp</header>
          <main>
            <img src={`icons/${type}.svg`} alt="Desafio" />
            <strong>Novo desafio</strong>
            <p>{description}</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengesNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level0-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
