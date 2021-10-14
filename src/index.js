import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { MarkdownContextProvider } from "./context/markdown-context";
import { UiContextProvider } from "./context/ui-context";
ReactDOM.render(
  <UiContextProvider>
    <MarkdownContextProvider>
      <App />
    </MarkdownContextProvider>
  </UiContextProvider>,
  document.getElementById("root")
);
