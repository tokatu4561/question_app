import React, { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";
import axios from "../../../node_modules/axios/index";

import { User } from "../types/user";

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userLoggedInInformation = getUser();
    }, []);

    const getUser = async () => {
        const { data } = await axios.get<User>("api/user");
        console.log(data);
        return data;
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };

    const loginHandler = async (email: string, password: string) => {
        setIsLoggedIn(true);
        const { data } = await axios.post<User>("/login", { email, password });

        console.log(data);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
