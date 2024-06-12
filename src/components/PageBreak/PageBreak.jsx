import bee from "../../assets/beeCrumbleCutout.png";
import { useLocation } from "react-router-dom";

import "./pagebreak.css";

function PageBreak({ textColor }) {
  let currentLocale = useLocation().pathname.split("/")[1];

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
      <img
        src={bee}
        className={
          currentLocale == "services"
            ? "pageBreakBee meadowBee"
            : "pageBreakBee"
        }
      ></img>
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
