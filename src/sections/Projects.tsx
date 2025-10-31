import {useEffect, useState} from 'react';

import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "../util/RevealOnScroll";
import "./Projects.css";

type Project = {
    id: string;
    projectName: string;
    description: string;
    image: string;
};

function Projects() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((json) => setProjects(json))
    }, []);

    return (
        <RevealOnScroll>
            <section id="projects" className="section">
                <div className="section-content">
                    <h1 className="header font-bold">Projects</h1>
                    <div id="projects-grid">
                        {projects.map((proj, i) => {
                            return (
                                <ProjectCard
                                    id={proj.id}
                                    projectName={proj.projectName}
                                    description={proj.description}
                                    image={proj.image}
                                    key={i}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
}

export default Projects;
