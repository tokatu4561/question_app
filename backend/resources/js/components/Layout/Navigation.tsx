import { NavLink } from "react-router-dom";
import { useAuthUser } from "../../hooks/use-auth-user";

type props = {
    onClickShow: () => void;
};

export const Navigation = (props: props) => {
    const { authUser } = useAuthUser();

    return (
        <header className="flex p-8 justify-between h-12 items-center bg-stone-500">
            <button onClick={props.onClickShow} className="relative h-5 w-6">
                <span className="top-0 w-8 h-1 inline-block transition-all rounded-full absolute right-0 bg-black"></span>
                <span className="top-3 w-8 h-1 inline-block transition-all rounded-full absolute right-0 bg-black"></span>
                <span className="top-6 w-8 h-1 inline-block transition-all rounded-full absolute right-0 bg-black"></span>
            </button>
            <div className="text-black">タスク管理</div>
        </header>
    );
};
