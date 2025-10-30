import RevealOnScroll from "../util/RevealOnScroll";

// Frontend Icons
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

// Backend Icons
import { FaPhp, FaPython, FaLaravel  } from "react-icons/fa";
import { SiDjango, SiMysql, SiPostgresql, SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";


// Other/Miscellanious Icons
import { FaGitSquare, FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import "./About.css";
import TechStackCard from "../components/TechStackCard";

function About() {
    const frontendTechs = [
        { name: "React", icon: <FaReact className="tech-icon" /> },
        { name: "HTML", icon: <FaHtml5 className="tech-icon" /> },
        { name: "CSS", icon: <FaCss3Alt className="tech-icon" /> },
        { name: "TypeScript", icon: <SiTypescript className="tech-icon" /> },
        { name: "JavaScript", icon: <FaJs className="tech-icon" /> },
    ];

    const backendTechs = [
        { name: "REST API", icon: <TbApi className="tech-icon" /> },
        { name: "Python", icon: <FaPython className="tech-icon" /> },
        { name: "Django", icon: <SiDjango className="tech-icon" /> },
        { name: "DRF", icon: <SiDjango className="tech-icon" /> },
        { name: "PHP", icon: <FaPhp className="tech-icon" /> },
        { name: "Laravel", icon: <FaLaravel className="tech-icon" /> },
        { name: "MySQL", icon: <SiMysql className="tech-icon" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="tech-icon" /> },
    ];

    const otherTools = [
      { name: "Git", icon: <FaGitSquare className="tech-icon" /> },
      { name: "GitHub", icon: <FaGithub  className="tech-icon" /> },
      { name: "Jira", icon: <SiJira className="tech-icon" /> },
      { name: "PostMan", icon: <SiPostman className="tech-icon" /> },
    ]

    return (
        <RevealOnScroll>
            <section id="about" className="section">
                <div className="section-content">
                    <h1 className="header">About Me</h1>
                    <div className="card">
                        <p>
                            I am a full-stack developer with an experience in developing web applications and innovative solutions.
                            <br />
                            Have proficient and fundamental knowledge on the technologies below:
                        </p>
                    </div>

                    <h1 className="sub-header">Technology Stack:</h1>

                    <div className="tech-stack">
                        <TechStackCard cardName={"Frontend"} techStack={frontendTechs} />

                        <TechStackCard cardName={"Backend"} techStack={backendTechs} />

                        <TechStackCard cardName={"Other tools"} techStack={otherTools} />

                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
}

export default About;
