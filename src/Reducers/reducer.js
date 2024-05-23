export const initialState = {
  text: "",
  numWords: 0,
  numChars: 0,
  readTime: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEXT": {
      const updatedNumberOfWords = action.payload
        .split(" ")
        .filter((ele) => ele.length !== 0).length
      return {
        ...state,
        numChars: action.payload.length,
        numWords: updatedNumberOfWords,
        readTime: 0.008 * updatedNumberOfWords,
        text: action.payload,
      };
    }
    case "UPPERCASE":
      return {
        ...state,
        text: state.text.toUpperCase(),
      };
    case "LOWERCASE":
      return {
        ...state,
        text: state.text.toLowerCase(),
      };
    case "CLEAR":
      return initialState;

    case "REMOVE_SPACE":
      return {
        ...state,
        text:  state.text.replace(/\s+/g, ' ').trim(),
      };

    default:
      return state;
  }
};
