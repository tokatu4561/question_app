import { useContext, useEffect, useState } from "react";
import { NavLink, Route, useParams } from "react-router-dom";

import { TaskList } from "../components/Tasks/TaskList";
import { LoadingSpinner } from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllTasks } from "../api/task-api";
import { NoTasksFound } from "../components/Tasks/NoTasksFound";
import { TaskThemeContext } from "../store/task-theme-context";

export const AllTasks = () => {
    const { taskThemeId } = useParams<{ taskThemeId: string }>();

    const taskThemeCtx = useContext(TaskThemeContext);

    const {
        sendRequest,
        status,
        data: loadedTodo,
        error,
    } = useHttp(getAllTasks, true);

    useEffect(() => {
        sendRequest(taskThemeId);
    }, [sendRequest, taskThemeId]);

    if (error) {
        return <p className="centerd focused">{error}</p>;
    }

    if (status === "pending") {
        return <LoadingSpinner />;
    }

    return (
        <>
            <div className="flex items-center border-b-4 border-inherit border-gray-400 overflow-x-scroll">
                {taskThemeCtx.items.map((theme) => (
                    <NavLink
                        className="hover:text-gray-800 hover:bg-gray-100 p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 min-w-fit text-gray-600 dark:text-gray-400 rounded"
                        to={`/themes/${theme.id}`}
                        key={theme.id}
                        activeClassName="bg-gray-100 dark:bg-gray-600"
                    >
                        <span className="mx-4 text-lg font-normal">
                            {theme.name}
                        </span>
                    </NavLink>
                ))}
            </div>
            {status === "pending" ? (
                <div className="centered">
                    <LoadingSpinner />
                </div>
            ) : (
                <TaskList tasks={loadedTodo} themeId={taskThemeId}></TaskList>
            )}
        </>
    );
};
