import { useContext } from "react";
import MarkdownContext from "../context/markdown-context";
import UiContext from "../context/ui-context";
import { textAreaSelector } from "../helpers/functions";
const ToolBarButton = (props) => {
  const { textArea, item } = props;
  const contentCtx = useContext(MarkdownContext);
  const uiCtx = useContext(UiContext);

  const addContent = () => {
    let newContent = ``;
    const { beforeCursor, afterCursor, selection } = textAreaSelector(
      textArea,
      contentCtx.text
    );
    if (!selection) {
      if (item.modal) {
        uiCtx.dispatch({ type: "openModal", tag: item });
        return;
      } else {
        newContent = `${beforeCursor} ${item.content} ${afterCursor}`;
      }
    } else {
      if (item.wrap) {
        newContent = `${beforeCursor} ${item.mark}${selection}${item.mark} ${afterCursor}`;
      } else {
        newContent = `${beforeCursor} ${item.mark}${selection} ${afterCursor}`;
      }
    }
    contentCtx.updateText(newContent);
  };
  // icon: <BoldIcon />,
  //   type: "bold",
  //   content: "**bold text here**",
  //   mark: ["**"],
  //   repeatMark: true,
  //   wrap: true,

  return (
    <div>
      <button
        className="hover:text-blue-500 hover:bg-gray-300 p-1 font-bold"
        onClick={addContent}
      >
        {item.icon}
      </button>
    </div>
  );
};

export default ToolBarButton;
