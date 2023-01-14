import { useReducer } from "react";
import React from 'react';

export type InputAction =
  | { type: 'INPUT', value: any }
  | { type: 'BLUR' }
  | { type: 'RESET' }

export type InputState = {
  value: string;
  isTouched: boolean;
}

export type ValidateValue = (value: any) => boolean;

const inputStateReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, value: action.value };
    case "BLUR":
      return { ...state, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      return state;
  }
};

const useInput = (validateValue: ValidateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    value: "",
    isTouched: false,
  });

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurtHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    valueChangeHandler,
    inputBlurtHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default useInput;
