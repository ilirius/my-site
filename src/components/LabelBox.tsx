
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import cx from "classnames";

import "~/styles/LabelBox.scss";

function LabelBox({ className, onclick, children, title = "" }: {
  onclick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode
  title: string
  className?: string;
}): JSX.Element {
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

 