import { Suspense, lazy, memo, useEffect } from "react";
import cx from "classnames";
import { Container, Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

import styles from "styles/about.module.css";
import "styles/about.css";

const LayoutBackground = lazy(() => import("components/LayoutBackground"));

function About() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("about.title");
  }, [t]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      {/* <Container fluid> */}
      <Container>
        <h1>{t("about.pageHeader")}</h1>
        <article>
          <Row>
            <Col>{t("about.article.part1")}</Col>
          </Row>
        </article>
        <article>
          <Row>
            <Col>
              <a href="https://github.com/ilirius/" target="_blank" rel="noreferrer">
                {t("about.article.part2")}
              </a>
            </Col>
          </Row>
        </article>
        <article>
          <Row>
            <Col>{t("about.article3.part1")}</Col>
          </Row>
        </article>
      </Container>
    </>
  );
}

export default memo(About);
