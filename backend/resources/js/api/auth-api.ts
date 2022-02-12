import axios from "../../../node_modules/axios/index";
import { User } from "../types/user";

export const getUser = async () => {
    const { data } = await axios.get<User>("api/user");
    return data;
};

export const login = async (email: string, password: string) => {
    const { data } = await axios.post<User>("/login", { email, password });

    return data;
};

export const loout = async () => {
    const { data } = await axios.post("logout");

    return data;
};
