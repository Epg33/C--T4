import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Admin from './Admin'

function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Admin />}/>
        </Routes>
    </BrowserRouter>   
    <h1 className="text-red-600">Hello World</h1>
   </>
  )
}

export default App
