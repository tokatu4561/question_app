import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { addTaskTheme } from "../../api/task-theme-api";

import useHttp from "../../hooks/use-http";
import { useTaskTheme } from "../../hooks/use-task-theme";
import { LoadingSpinner } from "../UI/LoadingSpinner";

type props = {
    themeId: string;
    onAddTask: (title: string, themeId: string) => void;
    isLoading: boolean;
};

export const NewThemeForm = (props) => {
    const { addItem } = useTaskTheme();

    //タスク新規追加のAPI
    const { sendRequest, status, error } = useHttp(addTaskTheme, false);

    const textInputRef = useRef<HTMLInputElement>(null);

    function submitFormHandler(event) {
        event.preventDefault();

        const themeId = uuid();
        const enteredText = textInputRef.current.value;
        const themeData = { id: themeId, name: enteredText };

        sendRequest(themeData);
        addItem(themeData);
    }

    if (error) {
        return <p className="">{error}</p>;
    }

    if (status === "pending") {
        return <LoadingSpinner />;
    }

    return (
        <>
            <form onSubmit={submitFormHandler}>
                <div className="mb-2">
                    <label
                        className="font-bold text-center mb-2"
                        htmlFor="title"
                    >
                        リストの新規作成
                    </label>
                    <input
                        ref={textInputRef}
                        className="form-control
                            block
                            w-full
                            p-4
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="例:打ち合わせの件"
                    ></input>
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="btn">
                        作成
                    </button>
                    <button type="submit" className="btn">
                        追加する
                    </button>
                </div>
            </form>
        </>
    );
};
