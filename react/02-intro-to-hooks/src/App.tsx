import React, { useReducer } from 'react';
import Greeting from "./Greeting";

const reducer = (state: any, action: any) => {

  switch(action.type) {
    case "enteredName":
      
      if(state.enteredName === action.payload) {
        return state;
      }

      return {
         ...state,
         enteredName: action.payload 
      };
    case "message":
      return {
        ...state,
        message: `Hello, ${action.payload}`
      };
    default: 
        throw new Error("Invalid action type " + action.type);
  }
}

const initialState = {
  enteredName: "",
  message: ""
}

function App() {
  const [{message, enteredName}, dispatch] = useReducer(reducer, initialState);
  
  const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {

    dispatch({
      type: "enteredName",
      payload: e.target.value
    });

    dispatch({ 
      type: "message",
      payload: e.target.value
    })
  }

  return (
    <>
      <input value={enteredName} 
        onChange={onChangeName} />
      <Greeting message={message} />
    </>
  )
}

export default App
