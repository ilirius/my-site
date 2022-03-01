import { Suspense, lazy, memo } from "react";
import { useTranslation } from "react-i18next";

// images
import { ReactComponent as SpeedBlackIcon } from "assets/svg/speed_black_24dp.svg";
import { ReactComponent as CellphoneIcon } from "assets/svg/cellphone-link.svg";
import { ReactComponent as LightbulbIcon } from "assets/svg/lightbulb-outline.svg";
import { ReactComponent as RocketIcon } from "assets/svg/rocket-launch-outline.svg";
import avatars from "assets/jpg/61w3aNNXTww-350.jpg";

import "styles/about.css";
import "styles/cloud-tags-anim.scss";

// lazy component

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
  return (
    <div>
      <h1 className="page-title">{t("about.pageHeader")}</h1>
      <div>
        <div>
          <div>
            <div className="label-wrap">
              <div className="label-box">
                <SpeedBlackIcon className="svg-icon" />
              </div>
              <h2>Fast</h2>
              <p>Fast load times and lag free interaction, my highest priority.</p>
            </div>
            <div className="label-wrap">
              <div className="label-box">
                <CellphoneIcon className="svg-icon" />
              </div>
              <h2>Responsive</h2>
              <p>My layouts will work on any device, big or small.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="label-wrap">
              <div className="label-box">
                <LightbulbIcon className="svg-icon" />
              </div>
              <h2>Intuitive</h2>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
            <div className="label-wrap">
              <div className="label-box">
                <RocketIcon className="svg-icon" />
              </div>
              <h2>Dynamic</h2>
              <p>Websites don't have to be static, I love making pages come to life.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-wrapper">
        <div className="info">
          <div className="avatars">
            <img src={avatars} alt="Avatars" className="avatars__img" />
          </div>
          <h3>Кто этот парень?</h3>
          {/* Who's this guy? */}
          <p>{t("about.article.part1")}</p>
          <span>{t("about.article.part2")}</span>
        </div>
        <div>
          <h3>Факты обо мне</h3>
          <p>Первый опыт программирования был в 11 лет</p>
          <p>В 1999 самостоятельно изучил основы (HTML, CSS) и создал первый простенький сайт</p>
          <p>
            Участвовал в создании клиентской часть мессенджера подобного Telegram Web для
            использования в компании
          </p>
          <p>Изучил React + Redux и создал первое приложение на них за неделю</p>
          <p>Создал на React + Redux сложную систему заказов для использования в компании</p>

          {/* TODO: Перенести в отдельный компонент облако тегов */}
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
        </div>
      </div>
    </div>
  );
}

export default memo(About);
