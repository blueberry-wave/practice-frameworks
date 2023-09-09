import React from 'react';
import { Routes, Route } from "react-router-dom";
import UsingReducer from "./pages/using-reducer";

function App() {
  return (
    <>
      <Routes>
        <Route path="using-reducer" element={<UsingReducer />}>
        </Route>
      </Routes>
    </>
  )
}

export default App
