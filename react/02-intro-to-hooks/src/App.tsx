import React from "react";
import { Routes, Route } from "react-router-dom";
import UsingCallback from "./pages/using-callback";
import UsingReducer from "./pages/using-reducer";

function App() {
  return (
    <>
      <Routes>
        <Route path="using-reducer" element={<UsingReducer />}></Route>
        <Route path="using-callback" element={<UsingCallback />}></Route>
      </Routes>
    </>
  );
}

export default App;
