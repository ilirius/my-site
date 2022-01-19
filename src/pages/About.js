import { Suspense, lazy, memo, useEffect } from "react";
import cx from "classnames";
import { Container, Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

import avatars from "assets/jpg/61w3aNNXTww-350.jpg";

import "styles/about.background.scss";
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
          <div className={cx("app-background", "bg-about")}>
            <ul className="circles">
              {new Array(25).fill(1).map((i, k) => (
                <li key={k}></li>
              ))}
            </ul>
          </div>
        </LayoutBackground>
      </Suspense>
      {/* <Container fluid> */}
      <Container>
        <h1 className="block-title">{t("about.pageHeader")}</h1>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Row>
              <Col xl={6} lg={6} md={6} sm={6} xs={12} className="label-wrap">
                <div className="label-box" />
                <h2>Fast</h2>
                <p>Fast load times and lag free interaction, my highest priority.</p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={12} className="label-wrap">
                <div className="label-box" />
                <h2>Responsive</h2>
                <p>My layouts will work on any device, big or small.</p>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Row>
              <Col xl={6} lg={6} md={6} sm={6} xs={12} className="label-wrap">
                <div className="label-box" />
                <h2>Intuitive</h2>
                <p>Strong preference for easy to use, intuitive UX/UI.</p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={12} className="label-wrap">
                <div className="label-box" />
                <h2>Dynamic</h2>
                <p>Websites don't have to be static, I love making pages come to life.</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="skills-wrapper">
          <Col xs={5} md={5}>
            <img src={avatars} alt="Avatars" />
            <h3>Кто этот парень?</h3>
            {/* Who's this guy? */}
            <p>{t("about.article.part1")}</p>
            <p>{t("about.article.part2")}</p>
          </Col>
          <Col xs={7} md={7}>
            skills
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default memo(About);
