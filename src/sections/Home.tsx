import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
    const texts = ["Welcome to my Portfolio!", "Enjoy your stay!", "Hello World!"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(20);

    useEffect(() => {
        const current = texts[index % texts.length];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(current.substring(0, text.length + 1));
                if (text.length + 1 === current.length) {
                    setIsDeleting(true);
                    setSpeed(50);
                }
            } else {
                setText(current.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => prev + 1);
                    setSpeed(150);
                }
            }
        }, speed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    return (
        <section id="home" className="section">
            <div className="typewriter-container">
                <span className="typewriter-text">{text}</span>
                <span className="cursor" />
            </div>
            <h1 className="h1">I'm Sebastian Louis Torio</h1>
        </section>
    );
}

export default Home;