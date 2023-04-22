import React from "react";
import Link from "next/link";

import classes from "./Button.module.scss";

const Button = ({
  onClick,
  href,
  outline,
  empty,
  children,
  ariaLabel,
  disabled,
  type,
  scroll,
}) => {
  if (href)
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        scroll={scroll || false}
        className={`${classes.btn} ${outline && classes["btn--outline"]} ${
          empty && classes["btn--empty"]
        } `}
      >
        {children}
      </Link>
    );
  else {
    return (
      <button
        onClick={onClick}
        className={`${classes.btn} ${outline && classes["btn--outline"]} ${
          empty && classes["btn--empty"]
        } `}
        type={type || "button"}
        aria-label={ariaLabel}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};

export default Button;
