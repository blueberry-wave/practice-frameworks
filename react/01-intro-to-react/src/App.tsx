// import { useState } from 'react'
import { Routes , Route } from "react-router";
import './App.css'
import Home from "./Home";
import AnotherScreen from "./AnotherScreen";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Routes>
          <Route path ="/" element={<Home/>}>
          </Route>
          <Route path ="/1" element={<AnotherScreen/>}>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
