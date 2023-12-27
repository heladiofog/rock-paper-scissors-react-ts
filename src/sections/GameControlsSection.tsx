import styles from './GameControlsSection.module.css';
import HandSelector from '../components/HandSelector';
import { useOptions } from '../context/optionsContext';

const GameControlsSection = () => {
  const optionsContext = useOptions();

  const HandOptions = optionsContext.options.map((option, index) => (
    <HandSelector 
      key={`${index}-${option.name}`}
      name={option.name}
      icon={option.icon}
      handChoiceIndex={index}
    />
  ));
  // do we have access to state here? :O
  // console.log(optionsContext);

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

