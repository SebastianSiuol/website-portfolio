
import './Footer.css';

import { FaGithub, FaLinkedin, FaFacebook, FaReact } from "react-icons/fa";
import { SiGmail, SiTypescript } from "react-icons/si";


function Footer () {
  return (
        <footer id="footer">
            <div id="footer-content">
                <ul id="social-links">
                    <li>
                        <a href="https://github.com/SebastianSiuol"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sebastian-louis-torio"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/sebastianoriot30/"><FaFacebook /></a>
                    </li>
                    <li>
                        <a href="mailto:slm.torio30@gmail.com"><SiGmail /></a>
                    </li>
                </ul>
                <div></div>
                <div id="rights-reserved">
                  <p className="flex">@2025 Sebastian Louis M. Torio. Powered by <FaReact /> <SiTypescript /></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;