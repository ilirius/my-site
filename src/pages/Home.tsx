// import { Suspense, lazy } from "react";

import { useTranslation, Trans } from 'react-i18next';
import cx from 'classnames';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { ReactComponent as SelectLangRu } from 'assets/svg/ru.svg';
import { ReactComponent as ThemeLightModeIcon } from 'assets/svg/wb_sunny_black_24dp.svg';
import { ReactComponent as ThemeDarkModeIcon } from 'assets/svg/dark_mode_black_24dp.svg';

// import CSelect from "components/CSelect";
// -----
import 'styles/MainSection.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('home.title');
  }, [t]);

  return (
    <>
      <div className="cover-overlay" />
      <div className="main-contender">
        <div className="intro">
          <div className="intro-logo">IG</div>
          <div className="intro-desc">
            <h1>
              <Trans i18nKey="home.article.part1">
                <span>Hi, I'm</span> Ivan Gavrilov
              </Trans>
            </h1>
            <h2>I'm a Front-End Developer</h2>
          </div>
        </div>
        <div className="menu">
          <div className={cx('menu-item', 'menu-item--about')}>
            <h2>{t('mainMenu.about')}</h2>
          </div>
          <div className={cx('menu-item', 'menu-item--portfolio')}>
            <h2>{t('mainMenu.portfolio')}</h2>
          </div>
          <div className={cx('menu-item', 'menu-item--skills')}>
            <h2>{t('mainMenu.skills')}</h2>
          </div>
          <div className={cx('menu-item', 'menu-item--contact')}>
            <h2>{t('mainMenu.contact')}</h2>
          </div>
        </div>
        <div className="menu-tools">
          <div className="locales-changer">
            <SelectLangRu />
          </div>
          <div className="theme-changer">
            <label
              className="theme-changer__label"
              htmlFor="theme-changer-input"
              data-tooltip="Сменить тему оформления"
            >
              <input
                className="theme-changer__input"
                type="checkbox"
                id="theme-changer-input"
                data-theme-changer="data-theme-changer"
              />
              <ThemeLightModeIcon className="theme-changer__icon theme-changer__icon_light-theme" />
              <ThemeDarkModeIcon className="theme-changer__icon theme-changer__icon_dark-theme" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
