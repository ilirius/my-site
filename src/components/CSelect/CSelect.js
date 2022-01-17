// import { useState } from "react";
import "styles/c-select.scss";

function CSelect() {
  //   const [checked, changeChecked] = useState(true);

  return (
    <div className="select-box">
      <div className="select-box__current" tabIndex="1">
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="0"
            value="ru"
            name="Ben"
            defaultChecked={true}
          />
          <p className="select-box__input-text">RU</p>
        </div>
        <div className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id="1"
            value="en"
            name="Ben"
            defaultChecked={false}
          />
          <p className="select-box__input-text">EN</p>
        </div>
        <img
          className="select-box__icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </div>
      <ul className="select-box__list">
        <li>
          <label className="select-box__option" htmlFor="0" aria-hidden="aria-hidden">
            RU
          </label>
        </li>
        <li>
          <label className="select-box__option" htmlFor="1" aria-hidden="aria-hidden">
            EN
          </label>
        </li>
      </ul>
    </div>
  );
}

export default CSelect;
