import React, { useState, useEffect, useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import { getUser } from "./api/auth-api";

import { Layout } from "./components/Layout/Layout";
import { LoadingSpinner } from "./components/UI/LoadingSpinner";
import { LoginPage } from "./pages/Auth/LoginPage";
import { NotFound } from "./pages/NotFound";
import { AllTasks } from "./pages/AllTasks";
import useHttp from "./hooks/use-http";
import { TaskThemeProvider } from "./store/TaskThemesProvider";
import { AllTrashTasks } from "./pages/AllTrashTasks";
import { useAuthUser } from "./hooks/use-auth-user";
import { User } from "./types/user";
import axios from "../../node_modules/axios/index";

export const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { authUser, onLogin } = useAuthUser();

    //すでにサーバー側でログイン済みの場合はログインした状態にする
    useEffect(() => {
        setIsLoading(true);

        const login = async () => {
            try {
                const response = await axios.get<User>("/api/user");
                const userData = response.data;

                if (userData) {
                    onLogin(userData);
                }

                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        login();
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <TaskThemeProvider>
            <Layout>
                <Switch>
                    <Route path="/login">
                        {authUser && <Redirect to="/themes/1" />}
                        <LoginPage />
                    </Route>
                    {!authUser && <Redirect to="/login" />}
                    <Route path="/themes/:taskThemeId">
                        <AllTasks />
                    </Route>
                    <Route path="/trash">
                        <AllTrashTasks />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Layout>
        </TaskThemeProvider>
    );
};
