import React, { FC, forwardRef, InputHTMLAttributes, Ref } from "react";
import cn from "classnames";

import styles from "./Input.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  cтotainerClassName?: string;
}

export const Input: FC<InputProps & { ref?: Ref<HTMLInputElement> }> =
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        id,
        label,
        error,
        disabled,
        className = "",
        cтotainerClassName = "",
        ...props
      },
      ref
    ) => {
      return (
        <div className={cn(styles.Root, cтotainerClassName)}>
          {label && (
            <label
              className={cn(styles.Label, {
                [styles.Disabled]: disabled,
              })}
              htmlFor={id}
            >
              {label}
            </label>
          )}
          <input
            className={cn(styles.Field, { [styles.Error]: !!error }, className)}
            id={id}
            disabled={disabled}
            ref={ref}
            {...props}
          />
          {error && (
            <span role="alert" className={styles.ErrorMessage}>
              {error}
            </span>
          )}
        </div>
      );
    }
  );
