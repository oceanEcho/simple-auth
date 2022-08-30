import React from "react";

import { AuthForm } from "./components/AuthForm";

import styles from "./App.scss";

export const App = () => {
  return (
    <section className={styles.App}>
      <AuthForm />
    </section>
  );
};
