import { Suspense, lazy } from "react";

import { useTranslation, Trans } from "react-i18next";
import cx from "classnames";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-grid-system";

// import CSelect from "components/CSelect";
import styles from "styles/home.module.css";

import cubStylesBg from "styles/cub.background.module.css";

const LayoutBackground = lazy(() => import("components/LayoutBackground"));

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("home.title");
  }, [t]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <div className={styles.content_home}>
        <div className={styles.cover_overlay} />
        <Container fluid>
          {/* <Row> */}
          <div className={cx(styles.block_decoration, styles.main_block)}>
            <div className={styles.mb_container}>
              <h1>
                <Trans i18nKey="home.article.part1">
                  <span>Hi, I'm</span> Ivan Gavrilov
                </Trans>
              </h1>
              <h2>Front-End Developer</h2>
            </div>
          </div>
          <div className={styles.menu_blocks}>
            <Link to="about/" title={t("mainMenu.about")}>
              <span
                className={cx(styles.block_decoration, styles.menu_block, styles.menu_block__about)}
              >
                <span className={styles.block_container}>
                  <h2 className={styles.block_container_item}>{t("mainMenu.about")}</h2>
                </span>
              </span>
            </Link>
            <Link to="portfolio/" title={t("mainMenu.portfolio")}>
              <span
                className={cx(
                  styles.block_decoration,
                  styles.menu_block,
                  styles.menu_block__portfolio
                )}
              >
                <span className={styles.block_container}>
                  <h2 className={styles.block_container_item}>{t("mainMenu.portfolio")}</h2>
                </span>
              </span>
            </Link>
            <Link to="skills/" title={t("mainMenu.skills")}>
              <span
                className={cx(
                  styles.block_decoration,
                  styles.menu_block,
                  styles.menu_block__skills
                )}
              >
                <span className={styles.block_container}>
                  <h2 className={styles.block_container_item}>{t("mainMenu.skills")}</h2>
                </span>
              </span>
            </Link>
            <Link to="contact/" title={t("mainMenu.contact")}>
              <span
                className={cx(
                  styles.block_decoration,
                  styles.menu_block,
                  styles.menu_block__contact
                )}
              >
                <span className={styles.block_container}>
                  <h2 className={styles.block_container_item}>{t("mainMenu.contact")}</h2>
                </span>
              </span>
            </Link>
          </div>
          <div>
            <div className={cx(styles.block_decoration, styles.empty)} />
            <div className={cx(styles.block_decoration, styles.empty_2)}>
              {/* <span className={styles.block_container}> */}
              {/* <h2 className={styles.block_container_item}> */}
              {/* <CSelect /> */}
              {/* </h2> */}
              {/* </span> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
