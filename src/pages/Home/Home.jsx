// import Hero from "../../assets/HeroPhoto3.jpg";
import Wave from "../../components/WaveSVG/WaveSVG";
import Katherine from "../../assets/Katherine.jpg";
import flowerFrame from "../../assets/FlowerFrame.png";
import "./home.css";
import "../../components/WaveSVG/waveSVG.css";

function Home({}) {
  return (
    <div id="homePage">
      <section>
        <div className="heroWords fadeIn">
          <span className="italics">Welcome!</span>
          <p>I can't wait to meet you.</p>
          <a href="/contact">Book Now!</a>
        </div>
        <div className="hero"></div>
        <Wave classProp={"wave bottomPosition flip"} fill={"sageFill"} />
      </section>

      <section className="whatDoula">
        <div className="bee beeOne"></div>
        <h2 className="italics">What is a Doula?</h2>
        <p>
          Doula is the professional name for someone who is your support—
          educationally, mentally, emotionally, and at times physically! There
          are two types of doulas: birth doulas and postpartum doulas. I am a
          certified birth doula who is excited to walk alongside you through
          your pregnancy and labor. My passion is to provide education to help
          make informed decisions regarding your birth plan. Pregnancy and labor
          can be overwhelming, and no one should have to sift through the
          information alone. Doulas work with your partner to create an
          environment where you feel safe, comfortable, and in charge of your
          birth.
        </p>
      </section>

      <section className="whyDoula">
        <div className="bee beeTwo"></div>
        <Wave classProp={"wave relative"} fill={"sageFill"} />
        <h2 className="italics">Why a Doula?</h2>
        <p>
          Research has shown that having a doula in your birth can decrease your
          stress during pregnancy and positively impact the labor process.
          Doulas make a great advocate for birth plans and are on your team.
          Doulas can offer that extra support to make your birth experience that
          much more enjoyable and ensure that you feel empowered and prepared
          for birth. Whether you are a first time mom or are looking for a
          different birth experience, doulas are here to help you through
          pregnancy and labor.
          <br /> <br />
          Doulas can help to decrease your chances of ending up in a cesarean
          section, to avoid complications during birth, to lessen the risk of
          instrumental vaginal deliveries, and to decrease likelihood of
          dissatisfaction with the birth experience.
        </p>
        <div className="bee beeThree"></div>
      </section>

      <section className="banner">
        <Wave classProp={"wave"} fill={"meadowFill"} />
        <div className="bannerPhoto"></div>
        <Wave classProp={"wave bottomPosition flip"} fill={"crumbleFill"} />
      </section>

      <section className="serviceBanner">
        <div>
          <div className="lilly"></div>
          <div className="serviceWords">
            <h2>
              <a href="/services" className="italics">
                Services
              </a>
            </h2>
            <p>
              I offer multiple packages to accomadate all my future mommas and
              their families. Whether it is for only the labor or for the full
              pregnancy, I aim to support you every step of the way. Interested
              in learning more of what I have to offer?
            </p>
            <a href="/services" className="italics">
              View the packages!
            </a>
          </div>
        </div>
      </section>

      <section className="aboutBanner">
        <div className="multiWaves multiCherryCrumbleSVG"></div>
        <h2 className="italics">Meet Your Future Doula</h2>
        <div className="aboutCluster">
          <img src={flowerFrame} alt="Flower Frame" className="leftFrame"></img>
          <img src={Katherine} alt="Katherine" className="homeAboutPhoto"></img>
          <img
            src={flowerFrame}
            alt="Flower Frame"
            className="rightFrame"
          ></img>
        </div>
        <p>
          Howdy! I'm Katherine, a proud birth doula and homemaker! I'm so
          thrilled that you've found your way here, and would love to be by your
          side during your journey. I am a second generation Aggie who graduated
          from Texas A&M in 2024 with a degree in Community Health; I have
          always loved education and the human body, and I knew that I needed...
          <a href="/about" className="italics">
            Read More.
          </a>
        </p>
        <div className="multiWaves multiCherrySageSVG flip"></div>
      </section>

      <section className="faqBanner">
        <h2 id="faqHeader">Have Questions?</h2>
        <p>
          Inquiries to your general questions can typically be found at our FAQ
          page <a href="/faqs">here.</a>
        </p>
      </section>
    </div>
  );
}

export default Home;
