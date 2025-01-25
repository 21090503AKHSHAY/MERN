import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import UseCallback from "./components/UseCallBack";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo";


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

            <Route path="/use-reducer" element={<UseReducer />} />
            <Route path="/use-ref" element={<UseRef />} />
            <Route path="/use-memo" element={<UseMemo />} />
            <Route path="/use-callback" element={<UseCallback />} />
            
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;