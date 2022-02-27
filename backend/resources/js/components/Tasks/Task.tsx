import { useRef } from "react";

import { TaskType } from "../../types/task";
import { Card } from "../UI/Card";

export const Task = (props: TaskType & { onChangeTaskDelete }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = () => {
        //チェックボックスにチェックがついていれば削除処理実行
        if (inputRef.current.checked) {
            props.onChangeTaskDelete(props.id);
        }
    };

    return (
        <Card>
            <li className="flex justify-around">
                <div className="m-0 p-0 w-10/12">
                    <p className="text-left text-xl">{props.title}</p>
                </div>

                <input
                    id={`check-box${props.id}`}
                    className="check-box cursor-pointer"
                    type="checkbox"
                    ref={inputRef}
                    onChange={onChangeHandler}
                />
                <label
                    className="cursor-pointer"
                    htmlFor={`check-box${props.id}`}
                ></label>
            </li>
        </Card>
    );
};
