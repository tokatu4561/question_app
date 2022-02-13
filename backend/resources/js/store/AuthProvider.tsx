import React, { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";

import { logout } from "../api/auth-api";

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        logout();
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        setIsLoggedIn(true);
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
