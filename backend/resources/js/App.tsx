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
import { AllTasks } from "./pages/tasks/AllTasks";
import { AuthContext } from "./store/auth-context";

export const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const ctx = useContext(AuthContext);

    useEffect(() => {
        setIsLoading(true);
        const login = async () => {
            const user = await getUser();
            if (user) {
                ctx.onLogin();
            }
            setIsLoading(false);
        };

        login();
    }, []);

    return (
        <Layout>
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
                <Switch>
                    <Route path="/login">
                        {ctx.isLoggedIn && <Redirect to="/tasks" />}
                        <LoginPage />
                    </Route>
                    {!ctx.isLoggedIn && <Redirect to="/login" />}
                    <Route path="/tasks">
                        <AllTasks />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            )}
        </Layout>
    );
};
