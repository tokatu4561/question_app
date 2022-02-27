import { useState } from "react";
import { v4 as uuid } from "uuid";

import { addTask, softDeleteTask } from "../../api/task-api";
import useHttp from "../../hooks/use-http";
import { NewTaskForm } from "./NewTaskForm";
import { Task } from "./Task";

type props = {
    tasks: [];
    themeId: string;
};

export const TaskList = (props) => {
    const [isShowTaskForm, setIsShowTaskForm] = useState(false);

    const [tasks, setTasks] = useState(props.tasks);

    //タスク新規追加のAPI
    const { sendRequest: addRequest, status, error } = useHttp(addTask, false);
    //タスク削除のAPI(ソフトデリート)
    const {
        sendRequest: deleteRequest,
        status: deleteRequestStatus,
        error: deleteRequestError,
    } = useHttp(softDeleteTask, false);

    //新規タスク追加フォームの切り替え
    const startAddTaskHandler = () => {
        setIsShowTaskForm(true);
    };
    const endAddTaskHandler = () => {
        setIsShowTaskForm(false);
    };

    //新規タスクを追加
    const addNewTask = (title: string, themeId: string) => {
        const taskId = uuid();
        addRequest({ taskId, title, themeId });

        setTasks((currentTasks) => {
            return [
                ...currentTasks,
                {
                    id: taskId,
                    title: title,
                    themeId: themeId,
                },
            ];
        });
    };

    // 実施済みフラグがついたタスクを削除する
    const deleteIsDoneTask = (id: string) => {
        deleteRequest(id);

        setTasks((currentTasks) => {
            const updatedTasks = currentTasks.filter((task) => task.id !== id);
            return [...updatedTasks];
        });
    };

    if (error) {
        return <p className="text-center">{error}</p>;
    }
    if (deleteRequestError) {
        return <p className="text-center">{deleteRequestError}</p>;
    }

    return (
        <>
            <ul className="list-none m-0 p-0">
                {tasks.length > 0 &&
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            themeId={task.themeId}
                            onChangeTaskDelete={deleteIsDoneTask}
                        />
                    ))}
            </ul>
            {!isShowTaskForm && (
                <button
                    className="bg-stone-600 hover:bg-stone-800 text-white font-semibold py-2 px-4 border border-stone-600 rounded shadow"
                    onClick={startAddTaskHandler}
                >
                    タスクを追加
                </button>
            )}
            {isShowTaskForm && (
                <>
                    <NewTaskForm
                        themeId={props.themeId}
                        onAddTask={addNewTask}
                        isLoading={status == "pending"}
                        onEndAddTask={endAddTaskHandler}
                    ></NewTaskForm>
                </>
            )}
        </>
    );
};
