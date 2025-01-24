import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import UseEffectAPI from "./Components/Hooks/UseEffectAPI";
import UseReducer from "./Components/Hooks/UseReducer";
// Import other components if required
// import NavBar from "./Components/NavBar";
// import SignUp from "./Components/SignUp";
// import Login from "./Components/Login";

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
      {/* Uncomment and use the NavBar if necessary */}
      {/* {isAuthenticated && <NavBar onLogout={handleLogout} />} */}
      <Routes>
        {/* Routes for unauthenticated users */}
        {!isAuthenticated ? (
          <>
            {/* Uncomment and update these components if needed */}
            {/* <Route path="/" element={<SignUp onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}
          </>
        ) : (
          // Routes for authenticated users
          <>
            {/* Uncomment and update these components if needed */}
            {/* <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="chocolate" page="gallery" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/use-state" element={<UseState />} />
            <Route path="/use-effect" element={<UseEffect />} /> */}
            <Route path="/useeffect-api" element={<UseEffectAPI />} />
            <Route path="/use-reducer" element={<UseReducer />} />
          </>
        )}
        {/* Fallback for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
