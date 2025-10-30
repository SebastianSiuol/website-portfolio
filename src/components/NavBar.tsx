import "./Navbar.css";

function Navbar() {

    return (
        <nav className="navbar-container">
            <div className="navbar">
                <a href="#home" className="logo">
                    Torio's Portfolio
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
