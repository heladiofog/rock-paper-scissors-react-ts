import styles from './App.module.css';
import ScoreBoard from './sections/ScoreBoard';
import GameControls from './sections/GameControlsSection';

// import './App.css'

function App() {

  return (
    <div className={styles.container}>
      <header className={styles.titleContainer}>
        <h1>Rock, Paper, Scissors</h1>
        <p>React TS game by @tezcasoft!</p>
      </header>
      <main>
        {/* main components for the game */}
        <ScoreBoard />
        <GameControls />
      </main>
    </div>
  );
}

export default App;
