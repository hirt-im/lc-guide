export default function getCursorPosition(element){
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(element);
    clonedRange.setEnd(range.endContainer, range.endOffset);
    let cursorPosition = clonedRange.toString().length;
    return cursorPosition;
}
