import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';


function App() {

  return (

      <BrowserRouter>
      <NavBar/>
        <Routes>
          
            <Route path = "/signup" element = {<SignUp/>} />
        </Routes>
      </BrowserRouter>
     
      
    
  )
}

export default App