import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../Button";
import { Input } from "../Input";
import { Spinner } from "../Spinner";
import { validateEmail } from "./utils/validateEmail";
import { validatePassword } from "./utils/validatePassword";
import { BAD_EMAIL, LOGIN_ERROR } from "./constants";

import styles from "./AuthForm.scss";

export interface AuthFormValues {
  email: string;
  password: string;
}

export const AuthForm: FC<{ setSigned: (signed: boolean) => void }> = ({
  setSigned,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState(false);

  const onSubmit = (data: AuthFormValues) => {
    setError(false);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = data.email === BAD_EMAIL;

        if (shouldFail) {
          reject();
        } else {
          resolve(data);
        }
      }, 3000);
    })
      .then(() => {
        setSigned(true);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <form className={styles.Root} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className={styles.Heading}>Sign in</h1>
      <div className={styles.Fields}>
        <Input
          label="Email"
          id="email"
          type="email"
          error={errors.email?.message}
          disabled={isSubmitting}
          {...register("email", { validate: validateEmail })}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          error={errors.password?.message}
          disabled={isSubmitting}
          {...register("password", { validate: validatePassword })}
        />
      </div>
      {error && <div className={styles.Error}>{LOGIN_ERROR}</div>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Spinner /> : <span>Sign in</span>}
      </Button>
    </form>
  );
};
