import { useTranslation } from "react-i18next";
import cx from "classnames";

import styles from "../styles/home.module.css";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className={cx("app-background", styles.background)}>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
      </div>
      <div className="container">{t("home.title")}</div>
    </>
  );
}

export default Home;

// <Helmet
// title={t("home.title")}
// meta={[
//   {
//     name: "viewport",
//     content: "width=device-width, initial-scale=1",
//   },
//   {
//     name: "format-detection",
//     content: "telephone=no",
//   },
//   { property: "og:title", content: "" },
//   { name: "description", content: "" },
// ]}
// />
