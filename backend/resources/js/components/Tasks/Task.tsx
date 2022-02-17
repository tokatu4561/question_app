import { TaskType } from "../../types/task";

export const Task = (props: TaskType & { onChangeIsDone }) => {
    return (
        <li className="m-4 p-4 flex justify-between items-end bg-teal-200 shadow rounded">
            <div className="m-0 p-0 w-10/12">
                <p className="text-left text-2xl text-gray-50">{props.title}</p>
            </div>

            <input
                id={`check-box${props.id}`}
                className="check-box"
                type="checkbox"
                onChange={function () {
                    props.onChangeIsDone(props.id);
                }}
            />
            <label htmlFor={`check-box${props.id}`}></label>
        </li>
    );
};
