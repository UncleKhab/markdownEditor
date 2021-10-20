import { useContext, useRef } from "react";
import UiContext from "../context/ui-context";
import MarkdownSanitized from "../components/MarkdownSanitized";
import RawInputArea from "../components/RawInputArea";
import UiControls from "../components/UiControls";
import ToolBar from "../components/ToolBar";
import LinkModal from "../components/LinkModal";

const Home = () => {
  const uiCtx = useContext(UiContext);
  const textAreaRef = useRef(null);

  return (
    <div>
      {uiCtx.state.linkModal.show && <LinkModal />}
      <div className="h-screen no-scrollbar overflow-scroll">
        <main className="w-full h-full flex-1 flex no-scrollbar flex-grow">
          <UiControls />
          <div className="">
            {uiCtx.state.showTools && <ToolBar textArea={textAreaRef} />}
          </div>
          {uiCtx.state.showEditor && <RawInputArea textAreaRef={textAreaRef} />}
          {uiCtx.state.showOutput && <MarkdownSanitized />}
        </main>
      </div>
    </div>
  );
};

export default Home;
