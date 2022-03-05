import { useRef } from "react";
import { useInput } from "../../hooks/use-input";

import { Card } from "../UI/Card";
import { LoadingSpinner } from "../UI/LoadingSpinner";

type props = {
    themeId: string;
    onAddTask: (title: string, themeId: string) => void;
    onEndAddTask: () => void;
    isLoading: boolean;
};

const isNotEmpty = (value: string) => value.trim() !== "";

export const NewTaskForm = (props: props) => {
    const {
        value: enteredText,
        isValid,
        hasError,
        valueChangeHandler: changeTextHandler,
        inputBlurHandler: blurTexrHandler,
    } = useInput(isNotEmpty);

    function submitFormHandler(event) {
        event.preventDefault();

        props.onAddTask(enteredText, props.themeId);
    }

    if (props.isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <Card>
                {hasError && (
                    <p className="text-red-500">何か入力してください</p>
                )}
                <form className="relative" onSubmit={submitFormHandler}>
                    <div className="mb-2">
                        <textarea
                            onChange={changeTextHandler}
                            onBlur={blurTexrHandler}
                            className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
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
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="例:朝ごはんを食べる"
                        ></textarea>
                    </div>
                    <div className="text-left">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="bg-stone-600 hover:bg-stone-800 text-white font-semibold mr-4 py-2 px-4 border border-stone-600 rounded shadow disabled:opacity-25"
                        >
                            追加する
                        </button>
                        <button
                            type="button"
                            onClick={props.onEndAddTask}
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        >
                            キャンセル
                        </button>
                    </div>
                </form>
            </Card>
        </>
    );
};
