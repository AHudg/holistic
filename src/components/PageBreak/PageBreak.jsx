import bee from "../../assets/beeCrumbleCutout.png";
import { useLocation } from "react-router-dom";

import "./pagebreak.css";

function PageBreak({ textColor }) {
  let currentLocale = useLocation().pathname.split("/")[1];

  if (!currentLocale) {
    currentLocale = "home";
  }

  const beeClassMapping = {
    services: "pageBreakBee meadowBee",
    home: "pageBreakBee",
    about: "pageBreakBee",
    faqs: "pageBreakBee",
    contact: "pageBreakBee",
    default: "pageBreakBee cherryBee",
  };

  const beeClass = beeClassMapping[currentLocale] || beeClassMapping.default;

  return (
    <div className="pageBreak">
      <div>
        <div
          className="leftPageBreak"
          style={{ backgroundColor: textColor }}
        ></div>
        <div
          className="leftPageBreak"
          style={{ backgroundColor: textColor }}
        ></div>
      </div>

      <img src={bee} alt="Bee Decoration" className={beeClass}></img>

      <div>
        <div
          className="rightPageBreak"
          style={{ backgroundColor: textColor }}
        ></div>
        <div
          className="rightPageBreak"
          style={{ backgroundColor: textColor }}
        ></div>
      </div>
    </div>
  );
}

export default PageBreak;
