import PropTypes from "prop-types";
import toast from "react-hot-toast";

const TextUtils = ({ state, dispatch }) => {
  const handleTextChange = (e) => {
    dispatch({
      type: "UPDATE_TEXT",
      payload: e.target.value,
    });
  };

  const handleCopy = () => {
    if (state.text.trim() === "") return toast.error("Cant copy empty");
    navigator.clipboard.writeText(state.text);
    toast.success("Copied to clipboard");
  };

  console.log(state);
  return (
    <div className="text-center pt-16">
      
      <p className="text-2xl p-2">Enter Your Text Here:</p>
      <div className="m-auto w-11/12">
        <textarea
          type="text"
          className="w-full rounded-sm border-2 border-black h-40 outline-none"
          value={state.text}
          onChange={handleTextChange}
        />
      </div>
      <div className="flex gap-10 justify-center py-10">
        <button
          onClick={() => dispatch({ type: "UPPERCASE" })}
          className="button-37"
        >
          Convert Uppercase
        </button>
        <button
          onClick={() => dispatch({ type: "LOWERCASE" })}
          className="button-37"
        >
          Convert Lowercase
        </button>
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="button-37"
        >
          Clear Text
        </button>
        <button onClick={handleCopy} className="button-37">
          Copy to clipboard
        </button>
        <button
          onClick={() => dispatch({ type: "REMOVE_SPACE" })}
          className="button-37"
        >
          Remove extr Spaces
        </button>
      </div>
    </div>
  );
};

TextUtils.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};

export default TextUtils;
