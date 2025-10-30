// Imports
import NavBar from "./components/NavBar";

// Section Imports
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./App.css";

function App() {

    return (
        <>
          <div id="app-container">
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
          </div>
        </>
    );
}

export default App;
