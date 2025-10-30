import Skills from "./Skills";

type TechStackProps = {
  cardName: string;
  techStack: {
    name: string;
    icon: React.ReactElement;
  }[];
};

function TechStackCard({cardName, techStack}: TechStackProps) {
    return (
        <>
            <div className="card">
                <div>
                    <div className="card-header">{cardName}</div>
                    <div className="tech-items">
                        {techStack.map((tech, i) => {
                            return (
                                <Skills
                                    icon={tech.icon}
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
