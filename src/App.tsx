import { useEffect, useState } from "react";
import Particles, { initParticlesEngine} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


// Imports
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Section Imports
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


import "./App.css";

function App() {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
        { init && <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "#111",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "attract",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        attract: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                    resize: true,
                },
                particles: {
                    color: {
                        value: "#fff",
                    },
                    links: {
                        color: "#666",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        value: 10,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 3 },
                    },
                },
            }}
        />
}
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
