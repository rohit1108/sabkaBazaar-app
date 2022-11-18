import React from "react";
import "./Button.scss";

const Button = ({ className, method, children, disabled, type , dataTestId}) => {
  return (
    <button
      className={className}
      onClick={method}
      type={type}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};
export default Button;
