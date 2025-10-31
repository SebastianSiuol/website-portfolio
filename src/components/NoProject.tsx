import { Link } from "react-router";

function NoProject() {
    return (
        <>
            <div className="m-6 text-red-400 font-semibold">
                ❌ No project found with that ID.
            </div>
            <Link
                to="/"
                className="view-project border border-[#333] rounded-lg text-[#e8e8e8] text-sm px-3 py-2 hover:bg-[#222] transition-all duration-200"
            >
                {" "}
                Return to Home{" "}
            </Link>
        </>
    );
}

export default NoProject;
