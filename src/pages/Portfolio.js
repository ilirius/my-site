import LabelBox from "components/LabelBox";

// import earu from "assets/png/portfolio/ea-b2c.png";
// import amtel from "assets/png/portfolio/amtel.png";
// import metaco from "assets/png/portfolio/metaco.png";
import mi from "assets/jpg/portfolio/mi-small.jpg";

import { ReactComponent as AmtelLogo } from "assets/svg/portfolio/amtel-logo.svg";
import { ReactComponent as EuroAutoLogo } from "assets/svg/portfolio/euroauto-logo.svg";
import { ReactComponent as EuroAutoOLOLogo } from "assets/svg/portfolio/euroauto-olo-logo.svg";
import { ReactComponent as MetacoLogo } from "assets/svg/portfolio/metaco-logo.svg";

// -----
import "styles/PortfolioSection.scss";

function Portfolio() {
  const showModal = () => {
    console.log("!!!111!!!");
  };

  return (
    <>
      <h1 className="page-title">Портфолио</h1>
      <div className="section-describe">
        <div>
          <LabelBox title="Euroauto.ru" onclick={showModal} className="label-box--euroauto">
            <EuroAutoLogo />
          </LabelBox>

          <LabelBox title="Мессенджер EuroAuto" onclick={showModal} className="label-box--euroauto">
            <EuroAutoOLOLogo />
          </LabelBox>
        </div>

        <div style={{ position: "relative", marginLeft: "-30px" }}>
          <LabelBox title="Amtel.club" onclick={showModal} className="label-box--amtel__club">
            <AmtelLogo />
          </LabelBox>
          <LabelBox title="Metaco.parts" onclick={showModal} className="label-box--metaco__parts">
            <MetacoLogo />
          </LabelBox>
        </div>
        <div style={{ position: "relative", marginLeft: "-30px" }}>
          <LabelBox title="Этот сайт-портфолио" onclick={showModal}>
            <img src={mi} alt="" style={{ top: "-29px", position: "relative" }} width="270px" />
          </LabelBox>
        </div>
      </div>
      <div>
        <div className="modal-header">modal-header</div>
        <div className="modal-body">modal-body</div>
      </div>
    </>
  );
}

export default Portfolio;
