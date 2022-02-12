import { Link } from "react-router-dom";

export const NoTasksFound = () => {
    return (
        <div className="flex justify-center items-center flex-column m-auto h-80">
            <p className="font-bold text-3xl">No quotes found!</p>
            <Link to="new-todo" className="btn">
                Add a Quote
            </Link>
        </div>
    );
};
