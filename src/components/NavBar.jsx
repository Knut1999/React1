import { Link } from "react-router-dom";
import "../css/NavBar.css"


function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Knut Onsøyen</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About</Link>
        </div>
    </nav>
}

export default NavBar