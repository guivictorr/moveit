import Head from 'next/head';

import styles from '../src/styles/pages/Home.module.scss';

import ExperienceBar from '../src/components/ExperienceBar';
import Profile from '../src/components/Profile';
import CompletedChallenges from '../src/components/CompletedChallenges';
import Countdown from '../src/components/Countdown';
import ChallengeBox from '../src/components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
