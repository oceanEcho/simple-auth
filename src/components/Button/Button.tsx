import React, { ButtonHTMLAttributes, FC, forwardRef, Ref } from "react";
import cn from "classnames";

import styles from "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps & { ref?: Ref<HTMLButtonElement> }> =
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, type = "button", className, ...props }, ref) => {
      return (
        <button
          type={type}
          className={cn(styles.Root, className)}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      );
    }
  );
