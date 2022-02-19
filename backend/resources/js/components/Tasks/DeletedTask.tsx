import { TaskType } from "../../types/task";

// type props = TaskType & { onClickTaskDelete: (id: string) => void };

export const DeletedTask = (props) => {
    const onClickHandler = (id: string) => {
        if (window.confirm("削除しますか")) {
            props.onClickTaskDelete(id);
        }
    };

    return (
        <li
            className="m-4 p-4 flex justify-between items-end bg-teal-300 hover:bg-teal-100 shadow rounded"
            onClick={function () {
                onClickHandler(props.id);
            }}
        >
            <div className="m-0 p-0 w-10/12">
                <p className="text-left text-2xl text-gray-50">{props.title}</p>
            </div>
        </li>
    );
};
