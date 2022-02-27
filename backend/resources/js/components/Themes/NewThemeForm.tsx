import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { addTaskTheme } from "../../api/task-theme-api";

import useHttp from "../../hooks/use-http";
import { useTaskTheme } from "../../hooks/use-task-theme";
import { LoadingSpinner } from "../UI/LoadingSpinner";

type props = {
    onClose: () => void;
};

export const NewThemeForm = (props: props) => {
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
        return <p className="text-center">{error}</p>;
    }

    if (status === "pending") {
        return <LoadingSpinner />;
    }

    return (
        <>
            <form onSubmit={submitFormHandler}>
                <div className="mb-2">
                    <label
                        className="font-bold text-center block mb-2"
                        htmlFor="title"
                    >
                        　　新しいタスクリストを追加しましょう
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
                <div className="text-left">
                    <button
                        type="submit"
                        className="bg-stone-600 hover:bg-stone-800 text-white font-semibold mr-4 py-2 px-4 border border-stone-600 rounded shadow"
                    >
                        追加する
                    </button>
                    <button
                        type="button"
                        onClick={props.onClose}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    >
                        キャンセル
                    </button>
                </div>
            </form>
        </>
    );
};
