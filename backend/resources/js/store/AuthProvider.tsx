import React, { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./auth-context";

import { logout } from "../api/auth-api";
import { User } from "../types/user";

export const AuthContextProvider = (props: { children: ReactNode }) => {
    const [authUser, setAuthUser] = useState<User | null>(null);

    const onLogout = () => {
        logout();
        setAuthUser(null);
    };

    const onLogin = (user) => {
        setAuthUser(user);
    };

    return (
        <AuthContext.Provider value={{ authUser, onLogin, onLogout }}>
            {props.children}
        </AuthContext.Provider>
    );
};
