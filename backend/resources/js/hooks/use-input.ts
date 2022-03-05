import { useReducer } from "react";

type inputStateType = {
    value: string;
    isTouched: boolean;
};

type actionType =
    | { type: "INPUT"; value: string }
    | { type: "BLUR" }
    | { type: "RESET" };

const initialInputState: inputStateType = {
    value: "",
    isTouched: false,
};

const inputStateReducer = (state: inputStateType, action: actionType) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
        return { isTouched: true, value: state.value };
    }
    if (action.type === "RESET") {
        return { isTouched: false, value: "" };
    }

    return initialInputState;
};

export const useInput = (validateValue: (string) => {}) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: "INPUT", value: event.target.value });
    };

    const inputBlurHandler = (event) => {
        dispatch({ type: "BLUR" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};
