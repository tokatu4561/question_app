import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { deleteTaskTheme } from "../../api/task-theme-api";

import useHttp from "../../hooks/use-http";
import { useTaskTheme } from "../../hooks/use-task-theme";
import { LoadingSpinner } from "../UI/LoadingSpinner";

export const EditThemeForm = (props) => {
    const { items, removeItem } = useTaskTheme();

    //　タスクリスト削除のリクエスト
    const { sendRequest, status, error } = useHttp(deleteTaskTheme, false);

    function deleteTaskThemeHandler(themeId: string) {
        removeItem(themeId);
        sendRequest(themeId);
    }

    if (error) {
        return <p className="">{error}</p>;
    }

    if (status === "pending") {
        return <LoadingSpinner />;
    }

    return (
        <>
            <div className="overflow-y-auto h-96">
                {items.map((theme) => (
                    <div key={theme.id}>
                        <span className="mx-4 text-md font-normal">
                            {theme.name}
                        </span>
                        <button
                            className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
                            onClick={function () {
                                deleteTaskThemeHandler(theme.id);
                            }}
                        ></button>
                    </div>
                ))}
            </div>
        </>
    );
};
