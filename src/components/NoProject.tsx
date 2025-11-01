import { Link } from "react-router";

function NoProject() {
    return (
        <>
            <div className="m-6 text-red-400 font-semibold">
                ❌ No project found with that ID.
            </div>
            <Link
                to="/"
                className="view-project"
            >
                {" "}
                Return to Home{" "}
            </Link>
        </>
    );
}

export default NoProject;
