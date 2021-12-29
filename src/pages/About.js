import React from "react";
import cx from "classnames";

import LayoutBackground from "components/LayoutBackground";

import styles from "styles/about.module.css";
import "styles/about.css";

function About() {
  return (
    <>
      <LayoutBackground>
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
      </LayoutBackground>
    </>
  );
}

export default React.memo(About);
