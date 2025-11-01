import RevealOnScroll from "../utils/RevealOnScroll";
import "./Contact.css";

import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



function Contact() {
    return (
        <RevealOnScroll>
            <section id="contact" className="section">
                <div className="section-content">
                    <h1 className="header font-bold mb-4">Contact</h1>
                    <div id="card">
                        <div className="contact-info-grid">
                            <div id="contact-text">
                                <h2 className="text-[1.2rem] font-bold my-2">Want to connect? I'd love to hear from you!</h2>
                                <p>Whether you have a project in mind, want to collaborate, or just want to say hello, don't hesitate to reach out. I typically respond within 24 hours. </p>
                            </div>
                            <div>
                                <div className="social-card">
                                    <SiGmail />
                                    <p>slm.torio30@gmail.com</p>
                                </div>
                                 <div className="social-card">
                                    <FaLinkedin />
                                    <p>Sebastian Louis Torio</p>
                                </div>
                                <div className="social-card">
                                    <FaFacebook />
                                    <p>Sebastian Louis Torio</p>
                                </div>
                                 <div className="social-card">
                                    <FaLocationDot />
                                    <p>Fairview, Quezon City</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
}

export default Contact;
