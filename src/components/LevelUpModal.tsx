import styles from '../styles/components/LevelUpModal.module.scss';

interface ILevelUpModal {
  action(): void;
  level: number;
}

export default function LevelUpModal({ action, level }: ILevelUpModal) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={action}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
