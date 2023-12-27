import { useState } from 'react';
import { useOptions } from '../context/optionsContext';
import { OptionActionKind } from '../reducers/scoreReducerTypes';
import styles from './HandSelector.module.css';

interface Props {
  name: string;
  icon: JSX.Element;
  handChoiceIndex: number;
}

const HandSelector: React.FC<Props> = ({ name, icon, handChoiceIndex }) => {
  const [handPressed, setHandPressed] = useState<boolean>(false);
  const optionsContext = useOptions();

  const { dispatch, state } = optionsContext;
  const selectedHandIndex = state.playerHand; // current selected option

  const selectOption = (selectedOption: number) => {
    dispatch({
      type: OptionActionKind.UPDATE_PLAYER_CHOICE,
      payload: selectedOption
    });
    setHandPressed(true);
    // console.log(`The selected option's index is: ${selectedOption}`);
  };

  // console.log({state});
  return (
    <>
      <button
        className={`${styles.choiceButton} ${
          handPressed && handChoiceIndex === selectedHandIndex ? styles.activeChoice : ''
        }`}
        onClick={() => selectOption(handChoiceIndex)}
      >
        {name}
        {icon}
      </button>
    </>
  );
};

export default HandSelector;
