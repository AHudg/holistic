import "./outletservices.css";
import PageBreak from "../PageBreak/PageBreak.jsx";

function MealServices({ }) {
  return <div>
    <div className="consultation">
      <h3>Manna for Mothers</h3>
      <p>Motherhood was never meant to be walked alone. From the beginning, God designed us to live in community- to lift one another up, to share our gifts, and to help carry the load. The postpartum season is one of those sacred times when the love of a village makes all the difference. Through nourishing meals, I hope to be part of your village- offering comfort, restoration and a reminder that God provides through the hands and hearts of others. Together, we can create space for you to rest, recover, and embrace this new chapter.</p>
      <br></br>
      <p>I have created a bundle of meals for you to choose what would be most helpful to you. Traditionally, these are dropped off the first 2-4 weeks of postpartum, but i am always happy to do a longer stent if that fits your needs better!</p>
    </div>

    <div className="packageContainer">
      <div className="package">
        <h3>
          Gentle Beginnings Bundle <span>$125</span>
        </h3>
        <p>
          One soup, one main dish, one light bite suitable for the first week.
        </p>
      </div>

      <div className="package">
        <h3>
        The Nourishment Bundle <span>$225</span>
        </h3>
        <p>
          Two soups, two main dishes, two light bites suitable for the first two weeks.
        </p>
      </div>

      <div className="package">
        <h3>
        Provision Package <span>$325</span>
        </h3>
        <p>
          Three soups, three main dishes, three light bites suitable for the first four weeks.
        </p>
      </div>
    </div>

    <br></br>
    <p>A la carte is available as well upon request.</p>
    <br></br>
    
    <PageBreak textColor={"var(--meadow)"}></PageBreak>

    <br></br>
    <div className="menu">
      <h3>Menu</h3>
      <p>Please note this is an example menu. Upon hiring, I will send you the seasonal menu that is currently offered.</p>
      <br></br>

      <h4>Comfort in a Cup</h4>
      <ul>
        <li>Zuppa Toscana</li>
        <li>Kitchari</li>
        <li>Italian Sausage Gnocci</li>
      </ul>
      <br></br>

      <h4>From the Table</h4>
      <ul>
        <li>Slow Braised Pot Roast with Whipped Potatoes</li>
        <li>Shepherd's Pie à l'Amour</li>
        <li>Tuscan chicken with Sunlit Cream Pasta</li>
      </ul>
      <br></br>

      <h4>Little Comforts</h4>
      <ul>
        <li>Dark Chocolate Cherry Energy Bites</li>
        <li>Peanut bUtter and Chocolate Energy Bites</li>
        <li>Matcha and Raspberry Chia Seed Pudding</li>
        <li>Vanilla Almond Bliss Bites</li>
      </ul>
      <br></br>

      <p>If there is a meal that you desire that is not listed, please reach out to me! I will hapily learn to make it from scratch for you.</p>
    </div>
  </div>
}

export default MealServices;