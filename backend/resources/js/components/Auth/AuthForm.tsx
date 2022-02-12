import { useState } from "react";

export const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        <section className="my-12 mx-auto p-4 w-11/12 max-w-xl rounded bg-teal-500 text-center shadow">
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form>
                <div className="mb-2">
                    <label
                        className="mb-2 block font-bold text-white"
                        htmlFor="email"
                    >
                        ログインID
                    </label>
                    <input type="email" id="email" required />
                </div>
                <div className="mb-2">
                    <label
                        className="mb-2 block font-bold text-white"
                        htmlFor="password"
                    >
                        パスワード
                    </label>
                    <input type="password" id="password" required />
                </div>
                <div className="mt-3 flex flex-col items-center">
                    <button className="bg-teal-300  hover:bg-teal-200 text-white font-bold py-2 px-4 border-b-4 border-teal-600 hover:border-teal-300 rounded">
                        {isLogin ? "Login" : "Create Account"}
                    </button>
                    <button
                        type="button"
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? "Create new account"
                            : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    );
};
