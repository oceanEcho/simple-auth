import React, { FC, InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Input.scss";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className = "",
  ...props
}) => {
  return <input className={cn(styles.Input, className)} {...props} />;
};
