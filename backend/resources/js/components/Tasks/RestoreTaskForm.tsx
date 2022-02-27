type props = {
    id: string;
    title: string;
    onRestore: (id: string) => void;
};

export const RestoreTaskForm = (props: props) => {
    return (
        <div className="flex justify-between">
            <p className="py-2 justify-betweenfont-bold">{props.title}</p>
            <button
                className="bg-stone-600 hover:bg-stone-800 text-white font-semibold py-2 px-4 border border-stone-600 rounded shadow"
                onClick={function () {
                    props.onRestore(props.id);
                }}
            >
                タスクを復元する
            </button>
        </div>
    );
};
