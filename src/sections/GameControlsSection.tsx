import styles from './GameControlsSection.module.css';
import HandSelector from '../components/HandSelector';
// icons
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa';
import { useOptions } from '../context/optionsContext';

const GameControlsSection = () => {
  const optionsContext = useOptions();

  const HandOptions = optionsContext.options.map((option, index) => (
    <HandSelector key={`${index}-${option.name}`} name={option.name} icon={option.icon} />
  ));

  return (
    <>
      <div className={styles.choiceButtonsContainer}>
        {HandOptions}
      </div>
      <button className={styles.playButton}>
        Play
      </button>
    </>
  );
};

export default GameControlsSection;

