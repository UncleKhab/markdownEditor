import { useContext } from "react";

import UiContext from "../context/ui-context";
import MarkdownContext from "../context/markdown-context";

const LinkModal = () => {
  const uiCtx = useContext(UiContext);
  const markdownContext = useContext(MarkdownContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.type);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    uiCtx.dispatch({ type: "closeModal" });
  };
  return (
    <div className="absolute w-full h-screen z-50 flex items-center justify-center backdrop-filter backdrop-blur bg-gray-500 bg-opacity-40">
      <form className="margin-auto flex-col w-1/2" onSubmit={handleSubmit}>
        <div>
          <p>Add {uiCtx.state.linkModal.tag.type}</p>
          <input
            id="linkInput"
            type="text"
            className="px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-green-700 py-2 px-4 text-white font-bold rounded-md hover:bg-green-600"
          >
            Add
          </button>
          <button
            onClick={cancelHandler}
            className="bg-red-700 py-2 px-4 text-white font-bold rounded-md hover:bg-red-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkModal;
