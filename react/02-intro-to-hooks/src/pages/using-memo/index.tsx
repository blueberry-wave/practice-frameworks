import React, { useReducer, useState, useCallback } from "react";
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

function UsingCallback () {
  const [{ message, enteredName }, dispatch] = useReducer(reducer, initialState);
  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);

  const setCountCallback = useCallback(() => {
    const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;

    setCount(inc);
  }, [count, startCount])

  const onWelcomeBtnClick = () => {
    setCountCallback();
  }

  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  }

  console.log("using-callback-render");

  return (
    <div className="using-callback">
      <header className="App-header">
        <Greeting
          message={message}
          enteredName={enteredName}
          greetingDispatcher={dispatch}
          />
        <div style={{marginTop: '10px'}}>
          <label>Enter a number and we'll increment it</label>
          <br/>
          <input value={startCount}
            onChange={onChangeStartCount}
            style={{width: '.75rem'}}/>
          &nbsp;
          <label>{count}</label>
          <br/>
          <button onClick={onWelcomeBtnClick}>Increment Count</button>        </div>
      </header>
    </div>
            
  )
}

export default UsingCallback;