import { useEffect } from "react";

import { TaskList } from "../../components/Tasks/TaskList";
import { LoadingSpinner } from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getAllTodos } from "../../api/api";
import { NoTasksFound } from "../../components/Tasks/NoTasksFound";

export const AllTasks = () => {
    const {
        sendRequest,
        status,
        data: loadedTodo,
        error,
    } = useHttp(getAllTodos, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status == "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centerd focused">{error}</p>;
    }

    if (status === "completed" && (!loadedTodo || loadedTodo.length === 0)) {
        return <NoTasksFound />;
    }

    return <TaskList todos={loadedTodo}></TaskList>;
};
