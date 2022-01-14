import { useTranslation, Trans } from "react-i18next";
import cx from "classnames";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import LayoutBackground from "components/LayoutBackground";
import styles from "styles/home.module.css";
import cubStylesBg from "styles/cub.background.module.css";

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("home.title");
  }, [t]);

  return (
    <>
      <LayoutBackground>
        <div className={cx("app-background", cubStylesBg.background)}>
          <div className={cubStylesBg.cube}></div>
          <div className={cubStylesBg.cube}></div>
          <div className={cubStylesBg.cube}></div>
          <div className={cubStylesBg.cube}></div>
          <div className={cubStylesBg.cube}></div>
          <div className={cubStylesBg.cube}></div>
        </div>
      </LayoutBackground>
      <>
        <div className={styles.cover_overlay} />
        {/* <div className={styles.home_container}> */}
        <div className={cx(styles.block_decoration, styles.main_block)}>
          <div className={styles.mb_container}>
            <h1>
              <Trans i18nKey="home.article.part1">
                <span>Hi, I'm</span>
              </Trans>
            </h1>
            <h2>Designer &amp; Developer</h2>
          </div>
        </div>
        <div className={styles.menu_blocks}>
          <Link to="/about/" title={t("mainMenu.about")}>
            <span
              className={cx(styles.block_decoration, styles.menu_block, styles.menu_block__about)}
            >
              <span className={styles.block_container}>
                <h2 className={styles.block_container_item}>{t("mainMenu.about")}</h2>
              </span>
            </span>
          </Link>
        </div>
        {/* </div> */}
      </>
    </>
  );
}

export default Home;
