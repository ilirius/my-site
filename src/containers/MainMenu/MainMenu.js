import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./main-menu.styles.css";

function MainMenu() {
  const [t] = useTranslation();

  return (
    <section>
      <nav className="nav">
        <input type="checkbox" className="nav__cb" id="menu-cb" />
        <div className="nav__content">
          <ul className="nav__items">
            <li className="nav__item">
              <Link rel="nofollow noreferrer" className="nav__item-text" to="/">
                {t("mainMenu.home")}
              </Link>
            </li>
            <li className="nav__item">
              <span className="nav__item-text">Works</span>
            </li>
            <li className="nav__item">
              <span className="nav__item-text">About</span>
            </li>
            <li className="nav__item">
              <span className="nav__item-text">Contact</span>
            </li>
          </ul>
        </div>
        <label className="nav__btn" htmlFor="menu-cb"></label>
      </nav>
    </section>
  );
}

export default MainMenu;
