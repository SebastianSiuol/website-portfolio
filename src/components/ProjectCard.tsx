import { Link } from "react-router";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../components/shadcn/card";

type ProjectCardProps = {
    id: string;
    image: string;
    projectName: string;
    description: string;
};

function ProjectCard({
    id,
    image,
    projectName,
    description,
}: ProjectCardProps) {
    return (
        <>
            <Card className="project-card ">
                <CardContent className="project-card-media">
                    <img
                        src={image}
                        alt={projectName}
                    />
                </CardContent>
                <CardHeader className="project-card-header flex flex-col text-[#e8e8e8]">
                    <h4 className="project-title font-semibold">
                        {projectName}
                    </h4>
                    <p className="project-desc">
                        {description}
                    </p>
                </CardHeader>
                <CardFooter className="project-card-footer px-4 pb-4 justify-end">
                    <Link
                        to={`/project/${id}`}
                        className="view-project"
                    >
                        {`View Project >`}
                    </Link>
                </CardFooter>
            </Card>
        </>
    );
}

export default ProjectCard;
