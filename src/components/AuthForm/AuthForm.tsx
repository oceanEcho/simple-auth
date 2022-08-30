import React from "react";

import { Button } from "../Button";
import { Input } from "../Input";

import styles from "./AuthForm.scss";

export const AuthForm = () => {
  return (
    <form className={styles.AuthForm}>
      <h1>Sign in</h1>
      <Input type="text" />
      <Input type="password" />
      <Button>Submit</Button>
    </form>
  );
};
