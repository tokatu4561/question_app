import React, { useEffect, useReducer } from "react";

import { TaskThemeType } from "../types/taskTheme";
import { TaskThemeContext } from "./task-theme-context";
import { getAllTaskThemes } from "../api/task-theme-api";

export const TaskThemeProvider = (props) => {
    useEffect(() => {
        const api = async () => {
            const tasks = await getAllTaskThemes();
            allUpdateHandler(tasks);
        };

        api();
    }, []);

    let defaultThemeState: { items: TaskThemeType[] } = {
        items: [],
    };

    const themeReducer = (state, action) => {
        if (action.type === "ALL") {
            return { items: action.items };
        }

        if (action.type === "ADD") {
            const updatedItems = state.items.concat(action.item);

            return { items: updatedItems };
        }

        if (action.type === "REMOVE") {
            //     const existingCartItemIndex = state.items.findIndex(
            //         (item) => item.id === action.id
            //     );
            //     const existingItem = state.items[existingCartItemIndex];
            //     const updatedTotalAmount = state.totalAmount - existingItem.price;
            //     let updatedItems;
            //     //削除するアイテムの残り量(amount)が0になる場合はカートから完全に削除する
            //     if (existingItem.amount === 1) {
            //         updatedItems = state.items.filter(
            //             (item) => item.id !== action.id
            //         );
            //     } else {
            //         const updatedItem = {
            //             ...existingItem,
            //             amount: existingItem.amount - 1,
            //         };
            //         updatedItems = [...state.items];
            //         updatedItems[existingCartItemIndex] = updatedItem;
            //     }
            //     return { items: updatedItems, totalAmount: updatedTotalAmount };
        }

        return defaultThemeState;
    };

    const [themeState, dispatchThemeAction] = useReducer(
        themeReducer,
        defaultThemeState
    );

    const allUpdateHandler = (items) => {
        dispatchThemeAction({ type: "ALL", items: items });
    };

    const addTaskThemeHandler = (item) => {
        dispatchThemeAction({ type: "ADD", item: item });
    };

    const removeTaskThemeHandler = (id) => {
        dispatchThemeAction({ type: "REMOVE", id: id });
    };

    const themeContext = {
        items: themeState.items,
        addItem: addTaskThemeHandler,
        removeItem: removeTaskThemeHandler,
    };

    return (
        <TaskThemeContext.Provider value={themeContext}>
            {props.children}
        </TaskThemeContext.Provider>
    );
};
