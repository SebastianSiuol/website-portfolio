import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Project } from "@/util/types";
import Autoplay from "embla-carousel-autoplay"


import { Card, CardContent } from "@/components/shadcn/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel"

import './ProjectDescription.css';
import NoProject from "@/components/NoProject";

function ProjectDescription() {
    const [project, setProject] = useState<Project | null>();
    const [notFound, setNotFound] = useState(false);

    const navigate = useNavigate();
    function handleBack() {
        navigate(-1);
    }

    const params = useParams<{ projectId: string }>();

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch("/data/projects.json");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const projects: Project[] = await response.json();
                const matchedProject = projects.find(
                    (proj) => proj.id === params.projectId
                );

                setProject(matchedProject || null);

                if (matchedProject) {
                    setProject(matchedProject);
                    setNotFound(false);
                } else {
                    setNotFound(true);
                }
            } catch (error) {
                console.error("Error loading JSON:", error);
                setNotFound(true);
            }
        }

        fetchProjects();
    }, [params.projectId]);


    return (
        <>
            <section id="project-description">
                <div id="project-content" className="project">
                    {notFound ? (
                        <NoProject />
                    ) : project ? (
                        <>
                            <div>
                                <button
                                    onClick={handleBack}
                                    className="view-project border border-[#333] rounded-lg text-[#e8e8e8] text-sm  hover:bg-[#222] transition-all duration-200"
                                >
                                    Return back
                                </button>
                            </div>
                            <Carousel
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                    }),
                                ]}
                            >
                                <CarouselContent>
                                    {project.images.map((img, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card className="carousel-card">
                                                    <CardContent className="p-0">
                                                        <img src={`${img}`} />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="carousel-buttons" />
                                <CarouselNext className="carousel-buttons" />
                            </Carousel>
                            <h1 id="project-header" className=" font-bold">
                                {project?.projectName}
                            </h1>

                            <div className="mt-4">
                                <p>{project.description}</p>
                            </div>
                        </>
                    ) : (
                        <p className="mt-6 text-gray-400">Loading project...</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default ProjectDescription;
