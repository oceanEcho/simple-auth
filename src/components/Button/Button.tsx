import React, { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

import styles from "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button type={type} className={cn(styles.Button, className)} {...props}>
      {children}
    </button>
  );
};
