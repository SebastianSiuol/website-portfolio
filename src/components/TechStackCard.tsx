import Skills from "./Skills";

import { FaStar } from "react-icons/fa";

import "./TechStackCard.css";

type TechStackProps = {
    cardName: string;
    techStack: {
        name: string;
        icon: React.ReactElement | null;
    }[];
    techUsed: boolean;
};

function TechStackCard({
    cardName,
    techStack,
    techUsed = false,
}: TechStackProps) {
    return (
        <>
            <div className="tech-categ-card">
                <div>
                    <div className="tech-categ-card-header">{cardName}</div>
                    <div className="tech-items">
                        {techStack.map((tech, i) => {
                            return (
                                <Skills
                                    icon={techUsed ? <FaStar className="tech-icon" /> : tech.icon}
                                    text={tech.name}
                                    key={i}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TechStackCard;
