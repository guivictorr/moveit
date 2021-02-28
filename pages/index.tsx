import styles from '../src/styles/pages/Home.module.scss';

import ExperienceBar from '../src/components/ExperienceBar';
import Profile from '../src/components/Profile';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div className={styles.leftContainer}>
          <Profile />
        </div>
        <div />
      </section>
    </div>
  );
}
