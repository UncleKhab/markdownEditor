import { useContext } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import MarkdownContext from "../context/markdown-context";
import UiContext from "../context/ui-context";

import { XCircleIcon } from "@heroicons/react/solid";

const MarkdownSanitized = () => {
  const contentCtx = useContext(MarkdownContext);
  const uiCtx = useContext(UiContext);
  return (
    <div
      className={`no-scrollbar px-5 py-3 overflow-scroll h-full bg-gray-200 prose flex-1 relative`}
    >
      <ReactMarkdown children={contentCtx.text} remarkPlugins={[remarkGfm]} />
      {!uiCtx.state.showEditor && (
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

export default MarkdownSanitized;
