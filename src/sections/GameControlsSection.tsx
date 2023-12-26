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
        {/* {
          optionsContext.options.map((option, index) => (
            <HandSelector key={`index-${name}`} name={option.name} icon={option.icon} />
          ))
        } */}
        {/* Semi-hardcoded hand selectors...from the context */}
        {/* <HandSelector name={optionsContext.options[0].name} icon={optionsContext.options[0].icon} />
        <HandSelector name={optionsContext.options[1].name} icon={optionsContext.options[1].icon} />
        <HandSelector name={optionsContext.options[2].name} icon={optionsContext.options[2].icon} /> */}
        {/* Hardcoded hand selectors... */}
        {/* <HandSelector name="rock" icon={<FaRegHandRock size={60} />} />
        <HandSelector name="paper" icon={<FaRegHandPaper size={60}  />}/>
        <HandSelector name="scissors" icon={<FaRegHandScissors size={60}  />} /> */}
      </div>
      <button className={styles.playButton}>
      Play
      </button>
    </>
  );
};

export default GameControlsSection;

