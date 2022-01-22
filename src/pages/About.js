import { Suspense, lazy, memo, useEffect } from "react";
import cx from "classnames";
import { Container, Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";

// images
import { ReactComponent as SpeedBlackIcon } from "assets/svg/speed_black_24dp.svg";
import { ReactComponent as CellphoneIcon } from "assets/svg/cellphone-link.svg";
import { ReactComponent as LightbulbIcon } from "assets/svg/lightbulb-outline.svg";
import { ReactComponent as RocketIcon } from "assets/svg/rocket-launch-outline.svg";
import avatars from "assets/jpg/61w3aNNXTww-350.jpg";

import "styles/about.background.scss";
import "styles/about.css";
import "styles/cloud-tags-anim.scss";

// lazy component

const LayoutBackground = lazy(() => import("components/LayoutBackground"));
const TagItem = lazy(() => import("components/TagItem"));

const tagList = [
  "Programming",
  "Cinema",
  "Graphics",
  "Cars",
  "Fantasy",
  "Fantastic",
  "IT",
  "Design",
  "Photography",
  "Mythology",
];

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
      <div className="about-container">
        <Container>
          <h1 className="block-title">{t("about.pageHeader")}</h1>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className="label-wrap">
                  <div className="label-box">
                    <SpeedBlackIcon className="svg-icon" />
                  </div>
                  <h2>Fast</h2>
                  <p>Fast load times and lag free interaction, my highest priority.</p>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className="label-wrap">
                  <div className="label-box">
                    <CellphoneIcon className="svg-icon" />
                  </div>
                  <h2>Responsive</h2>
                  <p>My layouts will work on any device, big or small.</p>
                </Col>
              </Row>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className="label-wrap">
                  <div className="label-box">
                    <LightbulbIcon className="svg-icon" />
                  </div>
                  <h2>Intuitive</h2>
                  <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className="label-wrap">
                  <div className="label-box">
                    <RocketIcon className="svg-icon" />
                  </div>
                  <h2>Dynamic</h2>
                  <p>Websites don't have to be static, I love making pages come to life.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="info-wrapper">
            <Col xs={12} md={5} className="info">
              <div className="avatars">
                <img src={avatars} alt="Avatars" className="avatars__img" />
              </div>
              <h3>Кто этот парень?</h3>
              {/* Who's this guy? */}
              <p>{t("about.article.part1")}</p>
              <span>{t("about.article.part2")}</span>
            </Col>
            <Col xs={12} md={7}>
              {/* Факты обо мне */}
              <h3>Мои интересы</h3>
              <dl className="sidebar-block sidebar-tags tags-cloud">
                <dt>Tags</dt>
                <dd className="tags">
                  <Suspense fallback={<div>Loading...</div>}>
                    {tagList.map((val, key) => (
                      <TagItem text={t(`about.tagsCloud.${val}`)} key={`tag-${key}`} />
                    ))}
                  </Suspense>
                </dd>
              </dl>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default memo(About);
