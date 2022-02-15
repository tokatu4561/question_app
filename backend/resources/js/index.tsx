import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { AuthContextProvider } from "./store/AuthProvider";
import { TaskThemeProvider } from "./store/TaskThemesProvider";

ReactDOM.render(
    <BrowserRouter>
        <AuthContextProvider>
            <TaskThemeProvider>
                <App />
            </TaskThemeProvider>
        </AuthContextProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
