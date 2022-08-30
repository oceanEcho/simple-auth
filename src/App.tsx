import React, { useState } from "react";

import { AuthForm } from "./components/AuthForm";
import { RandomPicture } from "./components/RandomPicture";

import styles from "./App.scss";

export const App = () => {
  const [signed, setSigned] = useState(false);

  return (
    <section className={styles.App}>
      {signed ? <RandomPicture /> : <AuthForm setSigned={setSigned} />}
    </section>
  );
};
