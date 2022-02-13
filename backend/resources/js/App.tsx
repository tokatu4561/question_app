import React, { useState, useEffect, useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { LoginPage } from "./pages/Auth/LoginPage";
import { NotFound } from "./pages/NotFound";
import { AllTasks } from "./pages/tasks/AllTasks";
import { AuthContext } from "./store/auth-context";

// import { Cart } from "./components/Cart/Cart";
// import { Header } from "./components/Layout/Header";
// import { Layout } from "./components/Layout/Layout";
// import { SideBar } from "./components/Layout/SideBar";
// import { Meals } from "./components/Meals/Meals";
// import { AllTodos } from "./Pages/AllTodos";
// import { NewTodo } from "./Pages/NewTodo";
// import { NotFound } from "./Pages/NotFound";
// import { TodoDetail } from "./Pages/TodoDetail";
// import { CartProvider } from "./store/CartProvider";

export const App = () => {
    const ctx = useContext(AuthContext);

    return (
        <Layout>
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
        </Layout>
    );
};

function About() {
    return <h2>About</h2>;
}
