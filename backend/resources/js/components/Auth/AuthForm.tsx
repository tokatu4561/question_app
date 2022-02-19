import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../node_modules/axios/index";

import { login } from "../../api/auth-api";
import { useAuthUser } from "../../hooks/use-auth-user";
import { User } from "../../types/user";

import { LoadingSpinner } from "../UI/LoadingSpinner";

export const AuthForm = () => {
    const { authUser, onLogin } = useAuthUser();

    const [enteredEmail, setEnterdEmail] = useState<string>("");
    const [enteredPassword, setEnterdPassword] = useState<string>("");

    const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEnterdEmail(e.target.value);
    };
    const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEnterdPassword(e.target.value);
    };

    const submitLoginForm = async (e) => {
        e.preventDefault();
        const authData = { email: enteredEmail, password: enteredPassword };
        const { data } = await axios.post<User>("/login", authData);

        if (data) {
            onLogin(data);
        }
    };

    if (status == "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <section className="my-12 mx-auto p-4 w-11/12 max-w-xl rounded bg-teal-500 text-center shadow">
            <form onSubmit={submitLoginForm}>
                <div className="mb-2">
                    <label
                        className="mb-2 block font-bold text-white"
                        htmlFor="email"
                    >
                        ログインID
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={changeEmailHandler}
                        className="p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="mb-2 block font-bold text-white"
                        htmlFor="password"
                    >
                        パスワード
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="p-2 rounded"
                        value={enteredPassword}
                        onChange={changePasswordHandler}
                        required
                    />
                </div>
                <div className="mt-3 flex flex-col items-center">
                    <button
                        type="submit"
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                        ログイン
                    </button>
                </div>
            </form>
        </section>
    );
};
