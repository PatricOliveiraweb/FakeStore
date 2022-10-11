import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <figure>
        <img src="./banner.jpg" alt="" />
      </figure>
      <figcaption>
        <h2>Welcome to Store, the best department Store !</h2>
      </figcaption>
    </section>
  );
};

export default Banner;
