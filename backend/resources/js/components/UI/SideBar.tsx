import ReactDOM from "react-dom";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../store/auth-context";
import { TaskThemeContext } from "../../store/task-theme-context";

const Backdrop = (props) => {
    const cssClasses = [
        "fixed top-0 left-0 w-full h-screen bg-black transition-all duration-500",
        props.show ? "z-10 opacity-50" : "opacity-0 hidden",
    ];
    return <div className={cssClasses.join(" ")} onClick={props.onClose} />;
};

const portalElement = document.getElementById("overlays");

const SideBarOverlay = (props) => {
    const authCtx = useContext(AuthContext);

    const taskThemeCtx = useContext(TaskThemeContext);

    const cssClasses = [
        "fixed top-0 left-0 z-20 transition-all duration-300",
        props.show ? "translate-x-0" : "-translate-x-full",
    ];

    return (
        <div className={cssClasses.join(" ")}>
            <div className="relative bg-white dark:bg-gray-800">
                <div className="flex flex-col sm:flex-row sm:justify-around">
                    <div className="w-72 h-screen">
                        <nav className="mt-10 px-6 ">
                            <NavLink
                                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
                                to="/login"
                                activeClassName="bg-gray-100 dark:bg-gray-600"
                            >
                                <span className="mx-4 text-lg font-normal">
                                    ログイン
                                </span>
                                <span className="flex-grow text-right"></span>
                            </NavLink>
                            <NavLink
                                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
                                to="/tasks"
                                activeClassName="bg-gray-100 dark:bg-gray-600"
                            >
                                <span className="mx-4 text-lg font-normal">
                                    やること一覧
                                </span>
                                <span className="flex-grow text-right"></span>
                            </NavLink>
                            <button
                                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                                onClick={authCtx.onLogout}
                            >
                                <span className="mx-4 text-lg font-normal">
                                    ログアウト
                                </span>
                                <span className="flex-grow text-right"></span>
                            </button>
                            {taskThemeCtx.items.map((theme) => (
                                <NavLink
                                    className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
                                    to={`/themes/${theme.id}`}
                                    key={theme.id}
                                    activeClassName="bg-gray-100 dark:bg-gray-600"
                                >
                                    <span className="mx-4 text-lg font-normal">
                                        {theme.name}
                                    </span>
                                    <span className="flex-grow text-right"></span>
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SideBar = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop show={props.show} onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <SideBarOverlay show={props.show} />,
                portalElement
            )}
        </>
    );
};
