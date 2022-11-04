import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css";
import Admin from "./Admin";
import CreateEmp from "./CreateEmp";
import EmpActs from "./EmpActs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path='/registro' element={<CreateEmp />} />
          <Route path="/empleado/:id" element={<EmpActs />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
