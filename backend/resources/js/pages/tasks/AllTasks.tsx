import { useEffect } from "react";
import { Link, Route, useParams } from "react-router-dom";

import { TaskList } from "../../components/Tasks/TaskList";
import { LoadingSpinner } from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getAllTasks } from "../../api/task-api";
import { NoTasksFound } from "../../components/Tasks/NoTasksFound";
import { NewTaskForm } from "../../components/Tasks/NewTaskForm";

export const AllTasks = () => {
    const taskThemeId = useParams<{ taskThemeId: string }>().taskThemeId;

    const {
        sendRequest,
        status,
        data: loadedTodo,
        error,
    } = useHttp(getAllTasks, true);

    useEffect(() => {
        sendRequest(taskThemeId);
    }, [sendRequest, taskThemeId]);

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

    return (
        <>
            <TaskList todos={loadedTodo}></TaskList>
            <Route path="/tasks" exact>
                <div className="centerd">
                    <Link className="btn--flat" to="/tasks/new-task">
                        やることを追加
                    </Link>
                </div>
            </Route>
            <Route path="/tasks/new-task">
                <NewTaskForm></NewTaskForm>
                <Link className="btn--flat" to="/tasks">
                    閉じる
                </Link>
            </Route>
        </>
    );
};
