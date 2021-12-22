import React from "react";
import cx from "classnames";

import styles from "../styles/about.module.css";

function About() {
  return (
    <>
      <div className={cx("app-background", styles.background)}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="container">About</div>
    </>
  );
}

export default React.memo(About);
