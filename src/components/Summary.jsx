import PropTypes from "prop-types";

const Summary = ({ state }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl p-8">Summery Of Your Text</h1>
      <p>Nummber of words : {state.numWords}</p>
      <p>Number of charecters : {state.numChars}</p>
      <p>Reading Time : {state.readTime}</p>

      <h1 className="text-2xl p-4">Preview Document</h1>
      <div className="m-auto w-11/12 pt-2">
      <textarea
        value={state.text}
        type="text"
        className="w-full rounded-sm border-2 border-black h-40 outline-none"
      ></textarea>
      </div>

    </div>
  );
};

Summary.propTypes = {
  state: PropTypes.object,
};

export default Summary;
