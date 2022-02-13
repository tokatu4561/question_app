import { useContext } from "react";
import axios from "../../../node_modules/axios/index";
import { AuthContext } from "../store/auth-context";
import { User } from "../types/user";

export const getUser = async () => {
    const { data } = await axios.get<User>("api/user");
    return data;
};

export const login = async (authData: { email: string; password: string }) => {
    const { data } = await axios.post<User>("login", authData);

    return data;
};

export const logout = async () => {
    const { data } = await axios.post("logout");

    return data;
};
