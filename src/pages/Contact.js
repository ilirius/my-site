import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

// import cx from "classnames";

import "styles/contact.background.scss";

// const LayoutBackground = lazy(() => import("components/LayoutBackground"));

function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("contact.title");
  }, [t]);

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <LayoutBackground>
          <div className={cx("app-background", "bg-contact")}>
            {new Array(100).fill(1).map((i, k) => (
              <div className="div1" key={k} />
            ))}
          </div>
        </LayoutBackground>
      </Suspense> */}
      <div>
        <h1 className="block-title">{t("contact.pageHeader")}</h1>
        <article>
          <div>
            <div>1</div>
          </div>
        </article>
      </div>
    </>
  );
}

export default memo(Contact);
