import styles from '../src/styles/pages/Home.module.scss';

import ExperienceBar from '../src/components/ExperienceBar';
import Profile from '../src/components/Profile';
import CompletedChallenges from '../src/components/CompletedChallenges';
import Countdown from '../src/components/Countdown';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div />
      </section>
    </div>
  );
}
