import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { LoginPage } from "./pages/Auth/LoginPage";
import { TaskPage } from "./pages/todos/index";

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

    return (
        <Layout>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <TaskPage></TaskPage>
                </Route>
            </Switch>
        </Layout>
    );
};

function About() {
    return <h2>About</h2>;
}
