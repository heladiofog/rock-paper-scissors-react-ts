import styles from './ScoreBoars.module.css';

const ScoreBoard = () => {
  return (
    <>
    {/* Score board section */}
      <section className={styles.scoreContainer}>
        {/* TO DO: refactor this score component */}
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Player:</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Player:</p>
        </div>
      </section>
      {/* Results board section */}
      <section className={styles.resultsSection}>
        <div className={styles.playerHand}>
          Player Hand
        </div>
        <div className={styles.informationColumn}>
          Information column
        </div>
        <div className={styles.computerHand}>
          Computer Hand
        </div>
      </section>
    </>
  );
};

export default ScoreBoard;
