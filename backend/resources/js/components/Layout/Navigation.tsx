import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <header className="flex p-8 justify-between h-12 items-center bg-teal-500">
            <div className="text-white text-4xl">TODO APP</div>
            <nav>
                <ul className="flex p-0 m-0 list-none">
                    <li className="ml-4 text-2xl">
                        <NavLink
                            className="text-teal-200"
                            to="/login"
                            activeClassName="text-teal-100"
                        >
                            　ログイン
                        </NavLink>
                    </li>
                    <li className="ml-4 text-2xl">
                        <NavLink
                            className="text-teal-200"
                            to="/todos"
                            activeClassName="text-teal-100"
                        >
                            　Todo一覧
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-teal-200"
                            to="/new-todo"
                            activeClassName="text-teal-100"
                        >
                            Todoを追加
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
