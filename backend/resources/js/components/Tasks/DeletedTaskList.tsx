import { Fragment, useCallback, useEffect, useState } from "react";

import { forceDeleteTask } from "../../api/task-api";
import useHttp from "../../hooks/use-http";
import { TaskType } from "../../types/task";
import { DeletedTask } from "./DeletedTask";

type props = {
    tasks: TaskType[];
};

export const DeletedTaskList = (props: props) => {
    const [tasks, setTasks] = useState<TaskType[]>(
        props.tasks ? props.tasks : []
    );

    const {
        sendRequest: deleteRequest,
        status: deleteStatus,
        error: deleteError,
    } = useHttp(forceDeleteTask);

    const {
        sendRequest: restoreRequest,
        status: restoreStatus,
        error: restoreError,
    } = useHttp(forceDeleteTask);

    // タスクを完全に削除する（フォースデリート）
    const deleteTask = () => {
        if (window.confirm("完全に削除されますがよろしいですか？")) {
            deleteRequest();
        }
        setTasks([]);
    };

    //タスクを復元する
    const restoreTask = (taskId: string) => {
        restoreRequest(taskId);

        setTasks((currentTasks) => {
            const updatedTasks = currentTasks.filter(
                (task) => task.id !== taskId
            );

            return updatedTasks;
        });
    };

    return (
        <>
            <div className="pb-4 mb-8 border-b-4 border-inherit">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={deleteTask}
                >
                    ゴミ箱をからにする
                </button>
            </div>
            <ul className="list-none m-0 p-0">
                {tasks.length > 0 &&
                    tasks.map((task) => (
                        <DeletedTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            themeId={task.themeId}
                            onRestoreTask={restoreTask}
                        />
                    ))}
            </ul>
        </>
    );
};
