import ToolBarButton from "./ToolBarButton";
import ICONS_ARRAY from "../helpers/ToolBarIcons";

const ToolBar = ({ textArea }) => {
  return (
    <div className="text-white bg-gray-600 py-2 px-1 flex-col h-full">
      {ICONS_ARRAY.map((item, index) => (
        <ToolBarButton
          key={`${item.type}--${index}`}
          item={item}
          textArea={textArea}
        />
      ))}
    </div>
  );
};

export default ToolBar;
