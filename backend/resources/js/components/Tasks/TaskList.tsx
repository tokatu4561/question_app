import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";
import { Task } from "./Task";

const sortTodos = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};

export const TaskList = (props) => {
    const history = useHistory();
    const location = useLocation();

    const queryPrams = new URLSearchParams(location.search);

    const isSortingAsc = queryPrams.get("sort") === "asc";

    const sortedTodos = sortTodos(props.todos, isSortingAsc);

    const changeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAsc ? "desc" : "asc"}`,
        });
    };

    return (
        <Fragment>
            <div className="pb-4 mb-8 border-b-4 border-inherit">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={changeSortingHandler}
                >
                    {isSortingAsc ? "降順" : "昇順"}に並び替え
                </button>
            </div>
            <ul className="list-none m-0 p-0">
                {sortedTodos.map((todo) => (
                    <Task key={todo.id} id={todo.id} title={todo.text} />
                ))}
            </ul>
        </Fragment>
    );
};
