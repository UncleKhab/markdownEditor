import { useContext } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import MarkdownContext from "../context/markdown-context";
import UiContext from "../context/ui-context";
const RawInputArea = (props) => {
  const contentCtx = useContext(MarkdownContext);
  const uiCtx = useContext(UiContext);
  const handleTextChange = (e) => {
    contentCtx.updateText(e.target.value);
  };
  return (
    <div className="flex-1 relative">
      <textarea
        ref={props.textAreaRef}
        className="resize-none no-scrollbar outline-none px-5 py-3 h-full overflow-scroll w-full"
        value={contentCtx.text}
        onChange={handleTextChange}
      />
      {!uiCtx.state.showOutput && (
        <button
          className="absolute top-3 right-3 hover:text-blue-500"
          onClick={() => uiCtx.dispatch({ type: "resetUi" })}
        >
          <XCircleIcon width="30" fontSize="md" />
        </button>
      )}
    </div>
  );
};

export default RawInputArea;
