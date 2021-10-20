import { ReactComponent as ItalicIcon } from "../assets/Icons/italicIcon.svg";
import { ReactComponent as BoldIcon } from "../assets/Icons/boldIcon.svg";
import { ReactComponent as CheckBoxIcon } from "../assets/Icons/checkboxIcon.svg";
import { ReactComponent as CodeBlockIcon } from "../assets/Icons/codeBlock.svg";
import { ReactComponent as HorizontalRuleIcon } from "../assets/Icons/hrIcon.svg";
import { ReactComponent as ImageIcon } from "../assets/Icons/imageIcon.svg";
import { ReactComponent as LinkIcon } from "../assets/Icons/linkIcon.svg";
import { ReactComponent as OlistIcon } from "../assets/Icons/orderedListIcon.svg";
import { ReactComponent as UlistIcon } from "../assets/Icons/unorderedListIcon.svg";
import { ReactComponent as QuoteIcon } from "../assets/Icons/quoteIcon.svg";

const ICONS_ARRAY = [
  {
    icon: <ItalicIcon />,
    type: "italic",
    content: "*italic text here*",
    mark: ["*"],
    repeatMark: true,
    wrap: true,
    modal: false,
  },
  {
    icon: <BoldIcon />,
    type: "bold",
    content: "**bold text here**",
    mark: ["**"],
    repeatMark: true,
    wrap: true,
    modal: false,
  },
  {
    icon: <QuoteIcon />,
    type: "quote",
    content: "> quote here",
    mark: "> ",
    repeatMark: false,
    wrap: false,
    modal: false,
  },
  {
    icon: <CheckBoxIcon />,
    type: "checkbox",
    content: "- [ ] To check me, put x between brackets",
    mark: "- [ ] ",
    repeatMark: false,
    wrap: false,
    modal: false,
  },
  {
    icon: <CodeBlockIcon />,
    type: "codeblock",
    content: "```Your Code Here```",
    mark: "```",
    repeatMark: true,
    wrap: true,
    modal: false,
  },
  {
    icon: <HorizontalRuleIcon />,
    type: "hr",
    content: "---",
    mark: "",
    repeatMark: false,
    wrap: false,
    modal: false,
  },
  {
    icon: <OlistIcon />,
    type: "ol",
    content: `
  1. item1
  2. item2
  `,
    mark: "",
    repeatMark: false,
    wrap: false,
    modal: false,
  },
  {
    icon: <UlistIcon />,
    type: "ul",
    content: `
  - item
  - item
  `,
    mark: "- ",
    repeatMark: false,
    wrap: true,
    modal: false,
  },
  {
    icon: <ImageIcon />,
    type: "image link",
    content: "![Your Text Here]",
    mark: "",
    repeatMark: false,
    wrap: false,
    modal: true,
  },
  {
    icon: <LinkIcon />,
    type: "link",
    content: "[Tag]",
    mark: "",
    repeatMark: false,
    wrap: false,
    modal: true,
  },
];

export default ICONS_ARRAY;
