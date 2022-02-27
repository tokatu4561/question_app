import { NavLink } from "react-router-dom";
import { DummyTask } from "../components/Tasks/DummyTask";
import { useTaskTheme } from "../hooks/use-task-theme";

const DummyTaskTheme = [
    {
        id: 1,
        title: "タスク毎のチェックボタンを押すと、そのタスクが削除されます",
    },
    {
        id: 2,
        title: "左上の三本線のボタンからタスクリストの追加・編集・削除、ゴミ箱ページの閲覧ができます",
    },
    {
        id: 3,
        title: "ゴミ箱ページから、削除したタスクの復元ができます",
    },
    {
        id: 4,
        title: "ゴミ箱ページから、「ゴミ箱を空にする」ボタンを押すとタスクは完全に削除されます",
    },
];

export const Welcom = () => {
    const { items } = useTaskTheme();

    return (
        <>
            <div className="flex items-center border-b-4 border-inherit border-gray-400 overflow-x-scroll">
                {items.map((theme) => (
                    <NavLink
                        className="hover:text-gray-800 hover:bg-gray-100 p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 min-w-fit text-gray-600 dark:text-gray-400 rounded"
                        to={`/themes/${theme.id}`}
                        key={theme.id}
                        activeClassName="bg-gray-100 dark:bg-gray-600"
                    >
                        <span className="mx-4 text-lg font-normal">
                            {theme.name}
                        </span>
                    </NavLink>
                ))}
            </div>
            <ul className="list-none m-0 p-0">
                {DummyTaskTheme.map((task) => (
                    <DummyTask key={task.id} id={task.id} title={task.title} />
                ))}
            </ul>
        </>
    );
};
