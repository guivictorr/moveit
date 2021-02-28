import styles from '../styles/components/Profile.module.scss';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/guivictorr.png" alt="Guilherme Victor" />
      <div>
        <strong>Guilherme Victor</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
