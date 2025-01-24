import { useState } from "react";
// import "./NavBar.css"
import {Link} from "react-router-dom";

const NavBar = (onLogout) => {
  var [dropdown,setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(dropdown => !dropdown);
  }
  return (
    <header>
      <nav>
        <ul>
              <li><Link to="/" className="Link">Home</Link></li>
            
            
                <li><Link to="/use-state">useState</Link></li>
                <li><Link to="/use-effect">useEffect</Link></li>
                <li><Link>useRef</Link></li>
        </ul>
    
      </nav>
    </header>
  )
}

export default NavBar