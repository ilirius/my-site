import { useTranslation } from "react-i18next";
import cx from "classnames";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// import LayoutBackground from "components/LayoutBackground";
import styles from "styles/home.module.css";

import { ReactComponent as Hexagon } from "assets/svg/hexagon.svg";

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("home.title");
  }, [t]);

  return (
    <>
      {/* <LayoutBackground>
        <div className={cx("app-background", styles.background)}>
          <div className={styles.cube}></div>
          <div className={styles.cube}></div>
          <div className={styles.cube}></div>
          <div className={styles.cube}></div>
          <div className={styles.cube}></div>
          <div className={styles.cube}></div>
        </div>
      </LayoutBackground> */}
      <>
        <div>
          <Hexagon className={cx(styles.hex, styles.hex__main)} />
          <Link to="about">
            <Hexagon className={styles.hex} />
          </Link>
          <Hexagon className={styles.hex} />
          <Link to="about">
            <Hexagon className={styles.hex} />
          </Link>
          <Hexagon className={styles.hex} />
          <Hexagon className={styles.hex} />
          <Hexagon className={styles.hex} />
          <Hexagon className={styles.hex} />
        </div>
      </>
    </>
  );
}

export default Home;
