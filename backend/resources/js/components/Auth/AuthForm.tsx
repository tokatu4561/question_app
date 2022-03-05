import { ChangeEvent, useState } from "react";
import axios from "../../../../node_modules/axios/index";

import { useAuthUser } from "../../hooks/use-auth-user";
import { useInput } from "../../hooks/use-input";
import { User } from "../../types/user";
import { Card } from "../UI/Card";
import { LoadingSpinner } from "../UI/LoadingSpinner";

const isFiveOrMore = (value: string) => value.trim().length >= 5;

export const AuthForm = () => {
    const { onLogin } = useAuthUser();

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: changeEmailHandler,
        inputBlurHandler: blurEmailHandler,
        reset: resetEmail,
    } = useInput(isFiveOrMore);

    const {
        value: enterdPassword,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: changePasswordHandler,
        inputBlurHandler: blurPasswordHandler,
        reset: resetPassword,
    } = useInput(isFiveOrMore);

    let formIsValid = false;

    if (emailIsValid && passwordIsValid) {
        formIsValid = true;
    }

    //ログインフォーム送信時のエラーとローディング状態
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const submitLoginForm = async (e) => {
        e.preventDefault();
        const authData = { email: enteredEmail, password: enterdPassword };

        setIsLoading(true);
        try {
            const { data } = await axios.post<User>("login", authData);
            if (data) {
                setIsError(false);
                onLogin(data);
            }
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
            resetEmail();
            resetPassword();
        }
    };

    if (isLoading) {
        return (
            <div className="h-screen">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto mt-16">
            <Card>
                <form
                    className="text-center text-stone-800"
                    onSubmit={submitLoginForm}
                >
                    {isError && (
                        <p className="text-red-500">ログインできませんでした</p>
                    )}
                    <div className="mb-2">
                        <label className="mb-2 block font-bold" htmlFor="email">
                            ログインID
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={enteredEmail}
                            onChange={changeEmailHandler}
                            onBlur={blurEmailHandler}
                            className="p-2 border border-stone-700 rounded"
                            required
                        />
                        {emailHasError && (
                            <p className="text-red-500">
                                　５文字以上のログインIDを入力してください
                            </p>
                        )}
                    </div>
                    <div className="mb-2">
                        <label
                            className="mb-2 block font-bold"
                            htmlFor="password"
                        >
                            パスワード
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="p-2 border border-stone-700 rounded"
                            value={enterdPassword}
                            onChange={changePasswordHandler}
                            onBlur={blurPasswordHandler}
                            required
                        />
                        {passwordHasError && (
                            <p className="text-red-500">
                                ５文字以上のパスワードを入力してください
                            </p>
                        )}
                    </div>
                    <div className="mb-2">
                        <p className="text-xs">
                            [テストユーザー]
                            <br />
                            ログインID: test@test.com
                            <br />
                            パスワード: test1234
                        </p>
                    </div>
                    <div className="mt-3 flex flex-col items-center">
                        <button
                            type="submit"
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow disabled:opacity-25"
                            disabled={!formIsValid}
                        >
                            ログイン
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};
