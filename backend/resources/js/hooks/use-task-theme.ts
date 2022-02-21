import { useContext } from "react";
import { TaskThemeContext } from "../store/task-theme-context";

export const useTaskTheme = () => useContext(TaskThemeContext);
