import { Link } from "react-router-dom";

type props = {
    id: string;
    title: string;
    onRestore: (id: string) => void;
};

export const RestoreTaskForm = (props: props) => {
    return (
        <div>
            <p>{props.title}</p>
            <button
                onClick={function () {
                    props.onRestore(props.id);
                }}
            >
                このタスクを復元する
            </button>
        </div>
    );
};
