import React from "react";

import classes from "./Input.module.scss";

const Input = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  value,
  error,
  required,
  textarea,
  ariaLabel,
}) => {
  const errorEl = <span className={classes.error}>{error}</span>;

  if (!textarea)
    return (
      <div className={classes.input}>
        {label && <label htmlFor={name}>{label}</label>}

        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={required || false}
          aria-label={ariaLabel}
          aria-invalid={error ? true : false}
          aria-required={required || false}
        />
        {error && errorEl}
      </div>
    );
  else
    return (
      <div className={classes.input}>
        {label && <label htmlFor={name}>{label}</label>}

        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={required || false}
          aria-label={ariaLabel}
          aria-invalid={error ? true : false}
          aria-required={required || false}
        />
        {error && errorEl}
      </div>
    );
};

export default Input;
