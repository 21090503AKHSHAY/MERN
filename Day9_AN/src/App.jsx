import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect from "./Components/UseEffect";
import UseEffectAPI from "./Components/UseEffectAPI";
import NavBar from "./Components/NavBar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <NavBar onLogout={handleLogout} />}
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<div>Login Page</div>} />
          </>
        ) : (
          <>
            <Route path="/use-effect" element={<UseEffect />} />
            <Route path="/useeffect-api" element={<UseEffectAPI />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
