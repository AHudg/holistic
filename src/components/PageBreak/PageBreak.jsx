import bee from "../../assets/beeCutout.png";

import "./pagebreak.css";

function PageBreak({ textColor }) {
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
      <img src={bee} className="pageBreakBee"></img>
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
