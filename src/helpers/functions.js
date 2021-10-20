export const textAreaSelector = (ref, text) => {
  let selection = "";
  let beforeCursor = "";
  let afterCursor = "";
  const selectionStart = ref.current?.selectionStart;
  const selectionEnd = ref.current?.selectionEnd;
  const currentContent = text;
  beforeCursor = currentContent.substring(0, selectionStart);
  console.log(selectionStart);
  console.log(selectionEnd);
  if (selectionEnd - selectionStart > 0) {
    selection = currentContent.substring(selectionStart, selectionEnd);
    afterCursor = currentContent.substring(selectionEnd);
  } else {
    afterCursor = currentContent.substring(selectionStart);
  }

  return { beforeCursor, afterCursor, selection };
};
