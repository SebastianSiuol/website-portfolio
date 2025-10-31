import { useState } from "react";

import "./NavBar.css";

import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    function menuBurger() {
        setMenuOpen((i) => !i);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content-links">
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

                <div className="navbar-content-menu">
                    <a href="#home" className="logo">
                        Torio's Portfolio
                    </a>
                    <div>
                        <GiHamburgerMenu
                            onClick={menuBurger}
                            className="burger-menu"
                        />
                    </div>
                </div>

                <ul className={`menu-nav-links ${menuOpen ? "open" : ""}`}>
                {/* <ul className={`menu-nav-links open`}> */}
                    <li>
                        <a href="#home" onClick={menuBurger}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={menuBurger}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={menuBurger}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={menuBurger}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
