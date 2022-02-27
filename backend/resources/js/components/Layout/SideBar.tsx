import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

import { useAuthUser } from "../../hooks/use-auth-user";
import { useTaskTheme } from "../../hooks/use-task-theme";

const Backdrop = (props) => {
    const cssClasses = [
        "fixed top-0 left-0 w-full h-screen bg-black transition-all duration-500 cursor-pointer",
        props.show ? "z-10 opacity-50" : "opacity-0 hidden",
    ];
    return <div className={cssClasses.join(" ")} onClick={props.onClose} />;
};

const portalElement = document.getElementById("overlays");

const SideBarOverlay = (props) => {
    const { onLogout } = useAuthUser();

    const { items } = useTaskTheme();

    const cssClasses = [
        "fixed top-0 left-0 z-20 transition-all duration-300",
        props.show ? "translate-x-0" : "-translate-x-full",
    ];

    return (
        <div className={cssClasses.join(" ")}>
            <div className="relative bg-stone-50 dark:bg-gray-800">
                <div className="flex flex-col sm:flex-row sm:justify-around">
                    <div className="w-72 h-screen">
                        <nav className="mt-10 px-6">
                            <NavLink
                                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
                                to="/trash"
                                activeClassName="bg-gray-100 dark:bg-gray-600"
                            >
                                <i className="fas fa-trash-alt"></i>
                                <span className="mx-4 text-md font-normal text-blue-500">
                                    ゴミ箱
                                </span>
                            </NavLink>
                            <button
                                onClick={onLogout}
                                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                            >
                                <i className="fa-solid fa-right-from-bracket text-blue-500"></i>
                                <span className="mx-4 text-md font-normal">
                                    ログアウト
                                </span>
                            </button>
                            <div className="text-gray-300 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                                作成したリスト
                                <button
                                    onClick={props.onShowEditTheme}
                                    className="ml-20 hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 p-2 justify-aroundtransition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200"
                                >
                                    編集
                                </button>
                            </div>
                            <div className="overflow-y-auto max-h-80">
                                {items.map((theme) => (
                                    <NavLink
                                        className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
                                        to={`/themes/${theme.id}`}
                                        key={theme.id}
                                        activeClassName="bg-gray-100 dark:bg-gray-600"
                                    >
                                        <i className="fa-solid fa-list-check text-blue-500"></i>
                                        <span className="mx-4 text-md font-normal">
                                            {theme.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                            <button
                                onClick={props.onShowNewTheme}
                                className="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
                            >
                                <span className="mx-4 text-md font-normal">
                                    新しいリストを追加
                                </span>
                            </button>
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
                <Backdrop show={props.show} onClose={props.onCloseMenu} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <SideBarOverlay
                    show={props.show}
                    onShowNewTheme={props.onShowNewThemeModal}
                    onShowEditTheme={props.onShowEditThemeModal}
                />,
                portalElement
            )}
        </>
    );
};
