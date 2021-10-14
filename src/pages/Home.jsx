import { useContext, useRef } from "react";
import UiContext from "../context/ui-context";
import MarkdownSanitized from "../components/MarkdownSanitized";
import RawInputArea from "../components/RawInputArea";
import UiControls from "../components/UiControls";
import ToolBar from "../components/ToolBar";

const Home = () => {
  const uiCtx = useContext(UiContext);
  const textAreaRef = useRef(null);

  return (
    <div className="h-screen no-scrollbar overflow-scroll">
      <header className="">
        {uiCtx.state.showTools && <ToolBar textArea={textAreaRef} />}
      </header>
      <main className="w-full h-full flex-1 flex no-scrollbar flex-grow">
        {uiCtx.state.showEditor && <RawInputArea textAreaRef={textAreaRef} />}
        {uiCtx.state.showEditor && uiCtx.state.showOutput && <UiControls />}
        {uiCtx.state.showOutput && <MarkdownSanitized />}
      </main>
    </div>
  );
};

export default Home;
