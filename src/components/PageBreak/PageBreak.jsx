import bee from "../../assets/beeCrumbleCutout.png";
import { useLocation } from "react-router-dom";

import "./pagebreak.css";

function PageBreak({ textColor }) {
  let currentLocale = useLocation().pathname.split("/")[1];

  if (!currentLocale) {
    currentLocale = "home";
  }

  let beeClass;
  switch (currentLocale) {
    case "services":
      beeClass = "pageBreakBee meadowBee";
      break;
    case "home":
      beeClass = "pageBreakBee";
      break;
    case "about":
      beeClass = "pageBreakBee";
      break;
    case "faqs":
      beeClass = "pageBreakBee";
      break;
    case "contact":
      beeClass = "pageBreakBee";
      break;
    default:
      beeClass = "pageBreakBee cherryBee";
      break;
  }
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
      <img src={bee} className={beeClass}></img>
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
