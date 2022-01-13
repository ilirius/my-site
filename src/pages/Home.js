import { useTranslation, Trans } from "react-i18next";
import cx from "classnames";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "styles/home.module.css";

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("home.title");
  }, [t]);

  return (
    <div className={styles.content_home}>
      <div className={styles.cover_overlay} />
      <div className={styles.home_container}>
        <div className={styles.name_block}>
          <div className={styles.name_block__container}>
            <h1>
              <Trans i18nKey="home.article.part1">
                <span>Hi, I'm</span>
              </Trans>
            </h1>
          </div>
        </div>
        <div className={styles.menu_blocks}>
          <div className={cx(styles.menu_block, styles.empty)} />
          <Link to="/about/" className={styles.menu_blocks__links} title="Resume">
            <span className={cx(styles.menu_block, styles.links_block__about)}>
              <span className={styles.block_container}>{t("mainMenu.about")}</span>
            </span>
          </Link>
          <Link to="/portfolio/" className={styles.menu_blocks__links}>
            <span className={cx(styles.menu_block, styles.links_block__portfolio)}>
              <span className={styles.block_container}>{t("mainMenu.portfolio")}</span>
            </span>
          </Link>
          <Link to="/skills/" className={styles.menu_blocks__links}>
            <span className={cx(styles.menu_block, styles.links_block__what_can_i_do)}>
              <span className={styles.block_container}>{t("mainMenu.what_can_i_do")}</span>
            </span>
          </Link>
          <div className={cx(styles.menu_block, styles.empty_2)} />
          <Link to="/contact/" className={styles.menu_blocks__links}>
            <span className={cx(styles.menu_block, styles.links_block__contact)}>
              <span className={styles.block_container}>{t("mainMenu.contact")}</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
