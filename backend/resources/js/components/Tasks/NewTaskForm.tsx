import { useRef, useState } from "react";

import { Card } from "../UI/Card";
import { LoadingSpinner } from "../UI/LoadingSpinner";

type props = {
    themeId: string;
    onAddTask: (title: string, themeId: string) => void;
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

    const cssClasses = [
        "bg-black text-white fixed bottom-0 left-50 z-20 transition-all duration-300",
        props.isLoading ? "translate-y-0" : "-translate-y-full",
    ];

    return (
        <>
            <div className={cssClasses.join(" ")}>保存中...</div>
            <Card>
                <form
                    onFocus={formFocusedHandler}
                    className="relative"
                    onSubmit={submitFormHandler}
                >
                    <div className="mb-2">
                        <label className="font-bold mb-2" htmlFor="title">
                            やること
                        </label>
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
                    <div className="text-right">
                        <button type="submit" className="btn">
                            追加する
                        </button>
                    </div>
                </form>
            </Card>
        </>
    );
};
