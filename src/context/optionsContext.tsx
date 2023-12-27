import { createContext, useContext, useReducer } from "react";
import { HandOption, IOptions, IOptionsContext, Props } from "./optionsContextTypes";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa";
import { initialState } from "./initialContextValues";
import scoreReducer from "../reducers/scoreReducer";

const options: IOptions[] = [
  { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
  { name: HandOption.paper, icon: <FaRegHandPaper size={60} /> },
  { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> },
];

const OptionsContext = createContext<IOptionsContext>({
  options: [],
  state: initialState,
  dispatch: () => { },  // TO DO
});

export function OptionsProvider(props: Props) {
  // reducer to update state when are game events are fired
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  const contextValue = {
    options, // options: options
    state,
    dispatch,
  };

  return (
    <OptionsContext.Provider value={contextValue}>
      {props.children}
    </OptionsContext.Provider>
  );
}

// Custom hook to retrieve the context
export function useOptions(): IOptionsContext {
  const context = useContext(OptionsContext);
  return context;
}
