import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../store/auth-context";

type props = {
    onClickShow: () => void;
};

export const Navigation = (props: props) => {
    const ctx = useContext(AuthContext);

    return (
        <header className="flex p-8 justify-between h-12 items-center bg-teal-500">
            <div className="">
                <button
                    onClick={props.onClickShow}
                    className="relative h-5 w-6"
                >
                    <span className="top-0 w-8 h-1 inline-block transition-all absolute right-0 bg-black"></span>
                    <span className="top-3 w-8 h-1 inline-block transition-all absolute right-0 bg-black"></span>
                    <span className="top-6 w-8 h-1 inline-block transition-all absolute right-0 bg-black"></span>
                </button>
            </div>
            <nav>
                <ul className="flex p-0 m-0 list-none">
                    {ctx.isLoggedIn && (
                        <li className="ml-4 text-2xl">
                            <NavLink
                                className="text-teal-200"
                                to="/tasks"
                                activeClassName="text-teal-100"
                            >
                                　Todo一覧
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};
