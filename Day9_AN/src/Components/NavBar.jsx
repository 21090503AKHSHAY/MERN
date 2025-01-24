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
            {/* <li><Link to="/" className="Link">Home</Link></li>
            <li><Link to="/about" className="Link">About</Link></li>
            <li><Link to="/gallery" className="Link">Gallery</Link></li>
            <li><Link to="/contact" className="Link">Contact</Link></li> */}
            <div onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
              <span >Hooks</span>
              {dropdown?(
                <ol>
                <li><Link to="/use-state">useState</Link></li>
                <li><Link to="/use-effect">useEffect</Link></li>
                <li><Link to="/useeffect-api">useEffectApi</Link></li>
                <li><Link>useRef</Link></li>
              </ol>
              ):("")}
              
            </div>
            <li><Link to="/" className="Link" onClick={onLogout}>Logout</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar