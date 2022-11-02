import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import Admin from "./Admin";
import CreateEmp from "./CreateEmp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path='/registro' element={<CreateEmp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
