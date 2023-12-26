import styles from './HandSelector.module.css';

interface Props {
  name: string,
  icon: JSX.Element
}

const HandSelector: React.FC<Props> = ({ name, icon }) => {
  return (
    <>
      <button className={styles.choiceButton}>
        {name}
        {icon}
      </button>
    </>
  );
};

export default HandSelector;
