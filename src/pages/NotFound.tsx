import { Link } from "react-router";

function NotFound() {
    return (
        <>
            <section id="projects" className="section">
                <div className="section-content">
                    <h1 className="header font-bold">404 Not Found!</h1>
                    <Link
                        to="/"
                        className="view-project border border-[#333] rounded-lg text-[#e8e8e8] text-sm px-3 py-2 hover:bg-[#222] transition-all duration-200"
                    >
                        {" "}
                        Return to Home{" "}
                    </Link>
                </div>
            </section>
        </>
    );
}

export default NotFound;
