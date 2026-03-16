import "./Navbar.css";
import logoImage from "../assets/logo.png";


function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logoImage} alt="app logo" />
            <span className="app-name">AURA Virtual Healthcare Companion</span>
        </div>

        <div className="nav-right"> 
            <div className="nav-links">
                <a href="#">Features</a>
                <a href="#">About</a>
                 <a href="#">Testimonials</a>
                <a href="#">Contact</a>
            </div>

            <button className="start-btn">Get Started</button>
        </div>
    </nav>
  );
}

export default Navbar;