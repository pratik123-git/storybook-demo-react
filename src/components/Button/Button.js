import React from "react";
import "./Button.css";

const Button = ({ childern, ...rest }) => {
  return (
    <button className="button" {...rest}>
      Demo Here
    </button>
  );
};

export default Button;
