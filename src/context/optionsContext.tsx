import { createContext, useContext } from "react";
import { HandOption, IOptions, IOptionsContext, Props } from "./optionsContextTypes";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa";
import { initialState } from "./initialContextValues";

const options: IOptions[] = [
  { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
  { name: HandOption.paper, icon: <FaRegHandPaper size={60} /> },
  { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> },
];

const OptionsContext = createContext<IOptionsContext>({
  options: [],
  state: initialState,
});

export function OptionsProvider(props: Props) {
  const contextValue = {
    options // options: options
  };

  return (
    <OptionsContext.Provider value={contextValue}>
      {props.children}
    </OptionsContext.Provider>
  );
}

// Custom hook to retrieve the context
export function useOptions() {
  const context = useContext(OptionsContext);
  return context;
}
