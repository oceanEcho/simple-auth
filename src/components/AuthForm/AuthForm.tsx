import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../Button";
import { Input } from "../Input";
import { Spinner } from "../Spinner";
import { validateEmail } from "./utils/validateEmail";
import { validatePassword } from "./utils/validatePassword";

import styles from "./AuthForm.scss";

export interface AuthFormValues {
  email: string;
  password: string;
}

export const AuthForm = () => {
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

  const onSubmit = async (data: AuthFormValues) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
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
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Spinner /> : <span>Sign in</span>}
      </Button>
    </form>
  );
};
