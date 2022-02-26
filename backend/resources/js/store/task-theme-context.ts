import React from "react";
import { TaskThemeType } from "../types/taskTheme";

type TaskThemeContext = {
    items: TaskThemeType[];
    addItem: (item: TaskThemeType) => void;
    removeItem: (id: string) => void;
};

export const TaskThemeContext = React.createContext<TaskThemeContext>({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
});
