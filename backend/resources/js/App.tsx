import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "../../node_modules/axios/index";

import { Layout } from "./components/Layout/Layout";
import { LoginPage } from "./pages/Auth/LoginPage";
import { NotFound } from "./pages/NotFound";
import { AllTasks } from "./pages/tasks/AllTasks";

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
    const [isShowCart, setIsShowCart] = useState(false);

    const showCartHandler = () => {
        setIsShowCart(true);
    };

    const hideCartHandler = () => {
        setIsShowCart(false);
    };

    useEffect(() => {
        axios
            .post("login", {
                email: "test@test.com",
                password: "test1234",
            })
            .then((response) => {
                console.log(response);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }, []);

    return (
        <Layout>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/todos" exact>
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
