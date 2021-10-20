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
        className="resize-none no-scrollbar outline-none px-5 py-3 h-full overflow-scroll w-full pb-96"
        value={contentCtx.text}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default RawInputArea;
