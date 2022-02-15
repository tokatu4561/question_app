import React, { useState, useEffect, useReducer } from "react";

import { TaskThemeType } from "../types/taskTheme";
import { TaskThemeContext } from "./task-theme-context";
import { getAllTaskThemes } from "../api/task-theme-api";

export const TaskThemeProvider = (props) => {
    useEffect(() => {
        const api = async () => {
            const taskThemes = await getAllTaskThemes();
            allUpdateHandler(taskThemes);
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
            const updatedTotalAmount =
                state.totalAmount + action.item.price * action.item.amount;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            //追加するアイテムがすでに存在しているならば上書きする、そうでなければ新規に追加する
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
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

    const addItemToCartHandler = (item) => {
        dispatchThemeAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchThemeAction({ type: "REMOVE", id: id });
    };

    const themeContext = {
        items: themeState.items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <TaskThemeContext.Provider value={themeContext}>
            {props.children}
        </TaskThemeContext.Provider>
    );
};
