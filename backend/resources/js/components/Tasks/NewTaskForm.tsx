import { useRef, useState } from "react";

import { Card } from "../UI/Card";
import { LoadingSpinner } from "../UI/LoadingSpinner";

type props = {
    themeId: string;
    onAddTask: (title: string, themeId: string) => void;
    onEndAddTask: () => void;
    isLoading: boolean;
};

export const NewTaskForm = (props: props) => {
    const [isEntering, setIsEntering] = useState(false);

    const textInputRef = useRef<HTMLTextAreaElement>(null);

    function submitFormHandler(event) {
        event.preventDefault();
        setIsEntering(false);

        const enteredText = textInputRef.current.value;

        props.onAddTask(enteredText, props.themeId);
    }

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    if (props.isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <Card>
                <form
                    onFocus={formFocusedHandler}
                    className="relative"
                    onSubmit={submitFormHandler}
                >
                    <div className="mb-2">
                        <textarea
                            ref={textInputRef}
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
                            className="bg-stone-600 hover:bg-stone-800 text-white font-semibold mr-4 py-2 px-4 border border-stone-600 rounded shadow"
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
