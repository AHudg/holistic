import bee from "../../assets/beeCutout.png";

import "./pagebreak.css";

function PageBreak({}) {
  return (
    <div className="pageBreak">
      <div>
        <div className="leftPageBreak"></div>
        <div className="leftPageBreak"></div>
      </div>
      <img src={bee} className="bee"></img>
      <div>
        <div className="rightPageBreak"></div>
        <div className="rightPageBreak"></div>
      </div>
    </div>
  );
}

export default PageBreak;
