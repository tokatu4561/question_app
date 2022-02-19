import { Fragment, useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

import { addTask, softDeleteTask } from "../../api/task-api";
import useHttp from "../../hooks/use-http";
import { NewTaskForm } from "./NewTaskForm";
import { Task } from "./Task";
import { v4 as uuid } from "uuid";
import { TaskType } from "../../types/task";
import { DeletedTask } from "./DeletedTask";

type props = {
    tasks: TaskType[];
};

export const DeletedTaskList = (props: props) => {
    const [tasks, setTasks] = useState<TaskType[]>(props.tasks);

    // タスクを完全に削除する（フォースデリート）
    const deleteTask = (id: string) => {
        setTasks((currentTasks) => {
            const updatedTasks = currentTasks.filter((task) => task.id !== id);
            return [...updatedTasks];
        });
    };

    return (
        <>
            <ul className="list-none m-0 p-0">
                {tasks.length > 0 &&
                    tasks.map((task) => (
                        <DeletedTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            themeId={task.themeId}
                            onClickTaskDelete={deleteTask}
                        />
                    ))}
            </ul>
        </>
    );
};
