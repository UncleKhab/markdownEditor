import { useContext } from "react";
import MarkdownContext from "../context/markdown-context";

import { ClipboardListIcon } from "@heroicons/react/outline";

const splitString = (ref, text) => {
  const selectionStart = ref.current?.selectionStart;
  const currentContent = text;
  const beforeCursor = currentContent.substring(0, selectionStart);
  const afterCursor = currentContent.substring(selectionStart);
  return { beforeCursor, afterCursor };
};
const ToolBar = (props) => {
  const contentCtx = useContext(MarkdownContext);
  const { textArea } = props;
  const addContent = (contentType) => () => {
    let newString = "";
    const { beforeCursor, afterCursor } = splitString(
      textArea,
      contentCtx.text
    );
    if (contentType === "h1")
      newString = `${beforeCursor} # This is a heading ${afterCursor}`;

    contentCtx.updateText(newString);
  };

  return (
    <div className="text-white bg-gray-900 py-2 px-1 flex">
      <button
        className="hover:text-blue-500 hover:bg-gray-300 p-1 font-bold"
        onClick={addContent("h1")}
      >
        H1
      </button>
      {/* <button className="hover:text-blue-500 hover:bg-gray-300 p-1">
        <ClipboardListIcon fontSize="md" width="25" onClick={addList} />
      </button> */}
    </div>
  );
};

export default ToolBar;
