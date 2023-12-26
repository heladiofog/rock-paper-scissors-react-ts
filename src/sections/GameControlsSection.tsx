import styles from './GameControlsSection.module.css';
import HandSelector from '../components/HandSelector';
// icons
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';

const GameControlsSection = () => {
  return (
    <>
      <div className={styles.choiceButtonsContainer}>
        <HandSelector name="rock" icon={<FaRegHandRock size={60} />} />
        <HandSelector name="paper" icon={<FaRegHandPaper size={60}  />}/>
        <HandSelector name="scissors" icon={<FaRegHandScissors size={60}  />} />
      </div>
      <button className={styles.playButton}>
      Play
      </button>
    </>
  );
};

export default GameControlsSection;

