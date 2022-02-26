import React, { useEffect, useReducer } from "react";

import { TaskThemeType } from "../types/taskTheme";
import { TaskThemeContext } from "./task-theme-context";
import { getAllTaskThemes } from "../api/task-theme-api";

export const TaskThemeProvider = (props) => {
    useEffect(() => {
        const api = async () => {
            const tasks = await getAllTaskThemes();
            allUpdateHandler(tasks);
        };

        api();
    }, []);

    let defaultThemeState: { items: TaskThemeType[] } = {
        items: [],
    };

    const themeReducer = (state, action) => {
        if (action.type === "ALL") {
            return { items: action.items };
        }

        if (action.type === "ADD") {
            const updatedItems = state.items.concat(action.item);

            return { items: updatedItems };
        }

        if (action.type === "REMOVE") {
            const updatedItems = state.items.filter(
                (item) => item.id !== action.id
            );

            return { items: updatedItems };
        }

        return defaultThemeState;
    };

    const [themeState, dispatchThemeAction] = useReducer(
        themeReducer,
        defaultThemeState
    );

    const allUpdateHandler = (items) => {
        dispatchThemeAction({ type: "ALL", items: items });
    };

    const addTaskThemeHandler = (item) => {
        dispatchThemeAction({ type: "ADD", item: item });
    };

    const removeTaskThemeHandler = (id) => {
        dispatchThemeAction({ type: "REMOVE", id: id });
    };

    const themeContext = {
        items: themeState.items,
        addItem: addTaskThemeHandler,
        removeItem: removeTaskThemeHandler,
    };

    return (
        <TaskThemeContext.Provider value={themeContext}>
            {props.children}
        </TaskThemeContext.Provider>
    );
};
