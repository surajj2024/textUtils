import { initialState, reducer } from "./Reducers/reducer";
import { useReducer, useEffect } from "react";
import TextUtils from "./components/TextUtils";
import DarkMode from "./components/DarkMode";
import { Toaster } from 'react-hot-toast';
import Summary from "./components/Summary";

const darkReducer = (state, action) => {
  switch (action.type){
    case "DARK": {
      return state = !state;
    }
    default:
      return state;


  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dark, darkDispatch] = useReducer(darkReducer, false);

  useEffect(() => {
    document.body.classList.remove('dark-mode' , 'light-mode');

    dark ? document.body.classList.add('dark-mode') : document.body.classList.add('light-mode')
  }, [dark])

  return (
    <>
    <DarkMode darkDispatch={darkDispatch} curr={dark}/>
      <TextUtils state={state} dispatch={dispatch} />
      <Summary state={state}/>
      <Toaster />
    </>
  )
}

export default App

