import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";

export const AuthForm = () => {
    const authCtx = useContext(AuthContext);
    const [enteredEmail, setEnterdEmail] = useState<string>("");
    const [enteredPassword, setEnterdPassword] = useState<string>("");

    const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEnterdEmail(e.target.value);
    };
    const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEnterdPassword(e.target.value);
    };

    const submitLoginForm = (e) => {
        e.preventDefault();
        authCtx.onLogin(enteredEmail, enteredPassword);
    };

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
                        value={enteredPassword}
                        onChange={changePasswordHandler}
                        required
                    />
                </div>
                <div className="mt-3 flex flex-col items-center">
                    <button
                        type="submit"
                        className="bg-teal-300  hover:bg-teal-200 text-white font-bold py-2 px-4 border-b-4 border-teal-600 hover:border-teal-300 rounded"
                    >
                        　ログイン
                    </button>
                    <button
                        type="button"
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                        アカウントを作成
                    </button>
                </div>
            </form>
        </section>
    );
};
