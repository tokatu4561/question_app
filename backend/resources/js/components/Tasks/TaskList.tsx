import { Fragment, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Task } from "./Task";

const sortTodos = (tasks, ascending) => {
    return tasks.sort((taskA, taskB) => {
        if (ascending) {
            return taskA.id > taskB.id ? 1 : -1;
        } else {
            return taskA.id < taskB.id ? 1 : -1;
        }
    });
};

export const TaskList = (props) => {
    const [tasks, setTasks] = useState(props.todos);
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

    const changeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAsc ? "desc" : "asc"}`,
        });
    };

    // タスクの実施済みチェックを切り替える
    const changeTaskIsDone = (id: number) => {
        setTasks((currentTasks) => {
            //状態が変化した(実施済み、もしくは未実施になった)タスクを取得する
            const targetTaskIndex = currentTasks.findIndex(
                (task) => task.id === id
            );
            const targetTask = currentTasks[targetTaskIndex];

            const updatedTasks = [...currentTasks];
            const updatedTask = {
                ...targetTask,
                is_done: !targetTask.is_done,
            };

            updatedTasks[targetTaskIndex] = updatedTask;
            return updatedTasks;
        });
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
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        isDone={task.is_done}
                        onChangeIsDone={changeTaskIsDone}
                    />
                ))}
            </ul>
        </Fragment>
    );
};
