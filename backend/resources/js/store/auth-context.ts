import React, { Dispatch, SetStateAction } from "react";
import { User } from "../types/user";

type AuthContext = {
    authUser: User | null;
    onLogin: (user: User) => void;
    onLogout: () => void;
};

export const AuthContext = React.createContext<AuthContext>({
    authUser: null,
    onLogin: (user) => {},
    onLogout: () => {},
});
