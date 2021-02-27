import styles from '../styles/components/ExperienceBar.module.scss';

export default function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '60%' }} />
        <span className={styles.currentExperience} style={{ left: '60%' }}>
          375 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
