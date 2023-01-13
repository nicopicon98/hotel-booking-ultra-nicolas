import { ValidateValue } from "../types/ValidateValueType";
import { InputAction } from "../types/InputActionType";
import { InputState } from "../types/InputStateType";
import { useReducer } from "react";
import React from 'react';

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
