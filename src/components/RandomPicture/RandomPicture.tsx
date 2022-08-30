import React from "react";

import styles from "./RandomPicture.scss";

export const RandomPicture = () => {
  return (
    <figure className={styles.Root}>
      <img
        width={320}
        height={280}
        className={styles.Image}
        src="https://random.imagecdn.app/320/280"
        alt="Random picture"
      />
    </figure>
  );
};
