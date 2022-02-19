import { useContext, useEffect, useState } from "react";
import { NavLink, Route, useParams } from "react-router-dom";
import { getDeletedTasks } from "../api/task-api";
import { DeletedTaskList } from "../components/Tasks/DeletedTaskList";

import { NoTasksFound } from "../components/Tasks/NoTasksFound";

import useHttp from "../hooks/use-http";

export const AllTrashTasks = () => {
    const {
        sendRequest,
        status,
        data: loadedTask,
        error,
    } = useHttp(getDeletedTasks, true);

    useEffect(() => {
        sendRequest();
    }, []);

    if (error) {
        return <p className="centerd focused">{error}</p>;
    }

    if (status === "completed" && (!loadedTask || loadedTask.length === 0)) {
        return <NoTasksFound />;
    }

    console.log(loadedTask);

    return (
        <>
            <DeletedTaskList tasks={loadedTask} />
        </>
    );
};
