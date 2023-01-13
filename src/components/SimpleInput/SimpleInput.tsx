import { IoLocationSharp } from 'react-icons/io5';
import classes from './SimpleInput.module.css';
import useInput from "../../hooks/useInput";
import React from 'react'

interface Props {
  onSubmitForm: (q: string) => Promise<void>;
}

export const SimpleInput = ({ onSubmitForm }: Props) => {
  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangedHandler,
    inputBlurtHandler: cityBlurHandler,
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;
  if (cityIsValid) formIsValid = true;

  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!cityIsValid) {
      return;
    }
    onSubmitForm(city);
  };

  const cityInputClasses = cityInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`${classes['form-control']} ${cityInputClasses}`}>
        <div className={classes["control__label"]}>
          <label htmlFor="name">Busca el codigo de la ciudad por nombre</label>
          <IoLocationSharp size={20} />
        </div>
        <input
          type="text"
          id="city"
          onChange={cityChangedHandler}
          onBlur={cityBlurHandler}
          value={city}
        />
        {cityInputHasError && (
          <p className={classes['form-control__error-text']}>El campo es requerido!</p>
        )}
      </div>
      <div className={classes['form-actions']}>
        <button disabled={!formIsValid}>Buscar</button>
      </div>
    </form>
  )
}