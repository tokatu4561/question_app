import { Fragment, useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

import { addTask } from "../../api/task-api";
import useHttp from "../../hooks/use-http";
import { NewTaskForm } from "./NewTaskForm";
import { Task } from "./Task";
import { v4 as uuid } from "uuid";

const sortTodos = (tasks, ascending) => {
    return tasks.sort((taskA, taskB) => {
        if (ascending) {
            return taskA.id > taskB.id ? 1 : -1;
        } else {
            return taskA.id < taskB.id ? 1 : -1;
        }
    });
};

type props = {
    tasks: [];
    themeId: string;
};

export const TaskList = (props) => {
    const [isShowTaskForm, setIsShowTaskForm] = useState(false);

    const [tasks, setTasks] = useState(props.tasks);

    const { sendRequest, status, error } = useHttp(addTask, false);

    const history = useHistory();
    const location = useLocation();

    const queryPrams = new URLSearchParams(location.search);
    //タスクの昇順、降順切り替え
    const isSortingAsc = queryPrams.get("sort") === "asc";

    useEffect(() => {
        setTasks((currentTasks) => {
            return sortTodos(currentTasks, isSortingAsc);
        });
    }, [isSortingAsc]);

    const changeSortingHandler = useCallback(() => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAsc ? "desc" : "asc"}`,
        });
    }, [location, isSortingAsc]);

    // タスクの実施済みチェックを切り替える
    const changeTaskIsDone = (id: number) => {
        // setTasks();
    };

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
        sendRequest({ taskId, title, themeId });

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

    const deleteTask = () => {
        const deleteTaskIds = tasks.map((task) => {
            return task.isDone && task.id;
        });

        console.log(deleteTaskIds);
    };

    return (
        <Fragment>
            <div className="pb-4 mb-8 border-b-4 border-inherit">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={changeSortingHandler}
                >
                    {isSortingAsc ? "降順" : "昇順"}に並び替え
                </button>
            </div>
            <ul className="list-none m-0 p-0">
                {tasks.length > 0 &&
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            onChangeIsDone={changeTaskIsDone}
                        />
                    ))}
            </ul>
            {!isShowTaskForm && (
                <button className="btn" onClick={startAddTaskHandler}>
                    やることを追加
                </button>
            )}
            {isShowTaskForm && (
                <>
                    <NewTaskForm
                        themeId={props.themeId}
                        onAddTask={addNewTask}
                        isLoading={status == "pending"}
                    ></NewTaskForm>
                    <button onClick={endAddTaskHandler}>閉じる</button>
                </>
            )}
        </Fragment>
    );
};
