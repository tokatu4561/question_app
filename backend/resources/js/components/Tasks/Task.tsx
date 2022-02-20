import { useRef } from "react";

import { TaskType } from "../../types/task";

export const Task = (props: TaskType & { onChangeTaskDelete }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = () => {
        //チェックボックスにチェックがついていれば削除処理実行
        if (inputRef.current.checked) {
            props.onChangeTaskDelete(props.id);
        }
    };

    return (
        <li className="m-4 p-4 flex justify-between items-end bg-stone-200 shadow rounded">
            <div className="m-0 p-0 w-10/12">
                <p className="text-left text-2xl text-gray-50">{props.title}</p>
            </div>

            <input
                id={`check-box${props.id}`}
                className="check-box cursor-pointer"
                type="checkbox"
                ref={inputRef}
                onChange={onChangeHandler}
            />
            <label htmlFor={`check-box${props.id}`}></label>
        </li>
    );
};
