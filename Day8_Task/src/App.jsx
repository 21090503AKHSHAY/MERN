import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import SignUp from './Componenets/SignUp';
import Login from "./Componenets/Login";
import NavBar from "./Componenets/NavBar";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <NavBar onLogout = {handleLogout}/>}
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<SignUp onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </>
        ) : (
          <>
            {/* <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="chocolate" page="gallery" />} />
            <Route path="/contact" element={<Contact />} /> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;