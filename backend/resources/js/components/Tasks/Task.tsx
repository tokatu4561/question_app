import { Link } from "react-router-dom";

import { TaskType } from "../../types/task";

export const Task = (props: TaskType & { onChangeIsDone }) => {
    return (
        <li className="m-4 p-4 flex justify-between items-end bg-teal-200 shadow rounded">
            <figure className="m-0 p-0 w-10/12">
                <blockquote className="text-left text-2xl text-gray-50">
                    <p>{props.title}</p>
                </blockquote>
                <figcaption className="italic">{props.title}</figcaption>
            </figure>

            <input
                id={`check-box${props.id}`}
                className="check-box"
                type="checkbox"
                onChange={function () {
                    props.onChangeIsDone(props.id);
                }}
                checked={props.isDone}
            />
            <label htmlFor={`check-box${props.id}`}></label>
        </li>
    );
};
