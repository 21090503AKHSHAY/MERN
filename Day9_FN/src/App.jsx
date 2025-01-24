import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
 import "./App.css";
import NavBar from "./Components/Hooks/NavBar";
import UseEffect from "./Components/Hooks/UseEffect";
import UseState from "./Components/Hooks/UseState";


function App() {

  return (
    <BrowserRouter>
    <NavBar /> 

           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-state" element={<UseState />} />
            <Route path="/use-effect" element={<UseEffect />} />
        
      </Routes>
    </BrowserRouter>

  );
}

function Home() {
  return (
    <h1> Home page </h1>
  )
}


export default App;