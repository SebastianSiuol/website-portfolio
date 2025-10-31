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
                <CardContent className="p-0">
                    <img
                        src={image}
                        alt={projectName}
                        className="w-full object-fill"
                    />
                </CardContent>
                <CardHeader className="flex flex-col flex-1 px-4 pt-4 text-[#e8e8e8]">
                    <h4 className="project-title text-left text-[1.1rem] font-semibold leading-tight mb-2">
                        {projectName}
                    </h4>
                    <p className="project-desc text-left text-[0.85rem] text-[#ffffffd1]">
                        {description}
                    </p>
                </CardHeader>
                <CardFooter className="px-4 pb-4 mt-auto flex justify-end">
                    <Link
                        to={`/project/${id}`}
                        className="view-project border border-[#333] rounded-lg text-[#e8e8e8] text-sm px-3 py-2 hover:bg-[#222] transition-all duration-200"
                    >
                        {`View Project >`}
                    </Link>
                </CardFooter>
            </Card>
        </>
    );
}

export default ProjectCard;
