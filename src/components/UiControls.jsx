import { useContext } from "react";
import UiContext from "../context/ui-context";
import {
  EyeIcon,
  PencilAltIcon,
  MenuIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
const UiControls = () => {
  const uiCtx = useContext(UiContext);

  const toggleEditor = () => {
    uiCtx.dispatch({ type: "onlyEditor" });
  };
  const toggleOutput = () => {
    uiCtx.dispatch({ type: "onlyOutput" });
  };

  return (
    <div className="flex flex-col bg-gray-200 cursor-pointer text-gray-600">
      <button
        className="hover:text-blue-500 hover:bg-gray-300 p-1"
        onClick={() => uiCtx.dispatch({ type: "toggleTools" })}
      >
        <MenuIcon fontSize="md" width="25" />
      </button>
      <button
        className="hover:text-blue-500 hover:bg-gray-300 p-1"
        onClick={toggleOutput}
      >
        <EyeIcon fontSize="md" width="25" />
      </button>
      {!uiCtx.state.showOutput && (
        <button
          className="hover:text-blue-500 hover:bg-gray-300 p-1"
          onClick={() => uiCtx.dispatch({ type: "resetUi" })}
        >
          <XCircleIcon width="25" fontSize="md" />
        </button>
      )}

      {uiCtx.state.showOutput && (
        <button className="hover:text-blue-500 hover:bg-gray-300 p-1">
          <PencilAltIcon fontSize="md" width="25" onClick={toggleEditor} />
        </button>
      )}
    </div>
  );
};

export default UiControls;
