import { Link } from "react-router-dom";

type props = {
    id: string;
    title: string;
};

export const Task = (props: props) => {
    return (
        <li className="m-4 p-4 flex justify-between items-end bg-teal-200 shadow rounded">
            <figure className="m-0 p-0">
                <blockquote className="text-left text-2xl text-gray-50">
                    <p>{props.title}</p>
                </blockquote>
                <figcaption className="italic">{props.title}</figcaption>
            </figure>
            <Link
                to={`/todos/${props.id}`}
                className="bg-teal-700  hover:bg-teal-800 text-white font-bold py-2 px-4 border-b-4 border-teal-800 hover:border-teal-300 rounded"
            >
                詳細
            </Link>
        </li>
    );
};
