import { createContext, useReducer } from "react";

const initialState = {
  showTools: false,
  showEditor: true,
  showOutput: true,
  linkModal: {
    show: false,
    tag: {},
  },
};
const reducer = (state, action) => {
  if (action.type === "openModal") {
    const newModal = { ...state.linkModal };
    newModal.show = true;
    newModal.tag = { ...action.tag };
    return { ...state, linkModal: newModal };
  }
  if (action.type === "closeModal") {
    const newModal = { ...initialState.linkModal };
    return { ...state, linkModal: newModal };
  }
  if (action.type === "toggleTools") {
    const showTools = !state.showTools;
    return { ...state, showTools: showTools };
  }
  if (action.type === "onlyEditor") {
    const newState = { ...state };
    newState.showTools = true;
    newState.showEditor = true;
    newState.showOutput = false;
    return newState;
  }
  if (action.type === "onlyOutput") {
    const newState = { ...state };
    newState.showEditor = false;
    newState.showOutput = true;
    return newState;
  }
  if (action.type === "resetUi") {
    const newState = { ...state };
    newState.showEditor = true;
    newState.showOutput = true;
    return newState;
  }
  return state;
};

const UiContext = createContext(initialState);

export const UiContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UiContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UiContext.Provider>
  );
};

export default UiContext;
