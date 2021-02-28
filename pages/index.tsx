import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ChallengesProvider from '../src/context/ChallengesContext';
import CountdownProvider from '../src/context/CountdownContext';

import styles from '../src/styles/pages/Home.module.scss';

import ExperienceBar from '../src/components/ExperienceBar';
import Profile from '../src/components/Profile';
import CompletedChallenges from '../src/components/CompletedChallenges';
import Countdown from '../src/components/Countdown';
import ChallengeBox from '../src/components/ChallengeBox';

interface IHome {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: IHome) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <CountdownProvider>
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
      </CountdownProvider>
    </ChallengesProvider>
  );
}
