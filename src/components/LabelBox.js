import { useTranslation } from "react-i18next";
import cx from "classnames";

import "styles/LabelBox.scss";

function LabelBox({ className, onclick, children, title = "" }) {
  const { t } = useTranslation();

  return (
    <div className={cx("label-box", className)}>
      {children}
      <div className="curtains">
        <div className="curtain-up">{title}</div>
        <div className="curtain-down">
          <button className="show-more" onClick={onclick}>
            {t("show-more")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LabelBox;
