import "./Skills.css";

type SkillsProps = {
    icon: React.ReactNode;
    text: string;
};

function Skills({ icon, text }: SkillsProps) {
    return (
        <span className="skill-item">
            {icon}
            {text}
        </span>
    );
}

export default Skills;
