import styles from '../src/styles/components/Home.module.scss';
import ExperienceBar from '../src/components/ExperienceBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
    </div>
  );
}
