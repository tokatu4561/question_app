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
import { AuthContext } from "./store/auth-context";
import useHttp from "./hooks/use-http";
import { AllTrashTasks } from "./pages/AllTrashTasks";

export const App = () => {
    const ctx = useContext(AuthContext);

    const { sendRequest, status, error } = useHttp(getUser);

    //すでにサーバー側でログイン済みの場合はログインした状態にする
    useEffect(() => {
        sendRequest();
    }, []);

    if (!error) {
        ctx.onLogin();
    }

    return (
        <Layout>
            {status === "pending" && <LoadingSpinner />}
            {!(status === "pending") && (
                <Switch>
                    <Route path="/login">
                        {ctx.isLoggedIn && <Redirect to="/themes/1" />}
                        <LoginPage />
                    </Route>
                    {!ctx.isLoggedIn && <Redirect to="/login" />}
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
            )}
        </Layout>
    );
};
