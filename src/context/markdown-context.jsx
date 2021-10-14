import { createContext, useState, useEffect } from "react";

const initialState = {
  text: "",
  updateText: () => {},
};

const MarkdownContext = createContext(initialState);

export const MarkdownContextProvider = (props) => {
  const [text, setText] = useState("");
  const savedContent = localStorage.getItem("content");
  useEffect(() => {
    if (savedContent) {
      setText(savedContent);
      return;
    }
    setText("# Welcome to markdown-editor");
  }, []);
  const updateText = (value) => {
    setText(value);
    localStorage.setItem("content", value);
  };
  return (
    <MarkdownContext.Provider value={{ text: text, updateText: updateText }}>
      {props.children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownContext;
