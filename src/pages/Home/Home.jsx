import Hero from "../../assets/ImageFour.jpg";
import Banner from "../../assets/ImageThree.jpg";
import Wave from "../../components/WaveSVG/WaveSVG";
import Katherine from "../../assets/Katherine.jpg";
import "./home.css";
import "../../components/WaveSVG/waveSVG.css";

function Home({}) {
  return (
    <div id="homePage">
      <section className="hero">
        <img src={Hero} className="hero"></img>
        <Wave classProp={"wave bottomPosition flip"} fill={"sage"} />
      </section>
      <section className="whatDoula">
        <div className="bee beeOne"></div>
        <h2>What is a doula?</h2>
        <p>
          Doula is the professional name for someone who is your support—
          educationally, mentally, emotionally, and at times physically!
          Pregnancy and labor can be overwhelming, and no one should have to
          sift through the information alone. Doulas work with your partner to
          create an environment where you feel safe, comfortable, and in charge
          of your birth.
          <br /> <br />
          There are two types of doulas: birth doulas and postpartum doulas. I
          am a certified birth doula who is excited to walk alongside you
          through your pregnancy and labor, but do not offer postpartum
          services. My passion is to provide education to help make informed
          decisions regarding your birth plan. This can look like providing
          education to the family, answering questions, hip squeezes, counter
          pressure, offering different position ideas for you and your partner
          to use during labor, connecting you to local providers for your needs,
          or just keeping you hydrated and fed as you go through the birth
          process.
        </p>
      </section>
      <section className="whyDoula">
        <div className="bee beeTwo"></div>
        <Wave classProp={"wave relative"} fill={"sage"} />
        <h2>Why a doula?</h2>
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
          section or complications during birth. Fewer women end in epidural,
          fewer women have instrumental vaginal deliveries, and decrease
          likelihood of dissatisfaction with the birth experience.
        </p>
        <div className="bee beeThree"></div>
      </section>
      <section className="banner">
        <Wave classProp={"wave"} fill={"meadow"} />
        <div className="bannerPhoto"></div>
        <Wave classProp={"wave bottomPosition flip"} fill={"crumble"} />
      </section>
      <section className="serviceBanner">
        <div>
          <div className="lilly"></div>
          <div className="serviceWords">
            <h2>
              <a href="/services">Services</a>
            </h2>
            <p>
              I offer multiple packages to accomadate all my future mommas and
              their families. Whether it is for only the labor or for the full
              pregnancy, I aim support you every step of the way. Interested in
              learning more of what I have to offer?
            </p>
            <a href="/services">View the packages!</a>
          </div>
        </div>
      </section>
      <section className="aboutBanner">
        <div className="multiWaves multiCherryCrumbleSVG"></div>
        <h2>Meet Your Future Doula</h2>
        <img src={Katherine}></img>
        <p>
          Howdy! I'm Katherine, a proud birth doula and homemaker! I'm so
          thrilled that you've found your way here, and would love to be by your
          side during your journey. I am a second generation Aggie who graduated
          from Texas A&M in 2024 with a degree in Community Health; I have
          always loved education and the human body, and I knew that I needed...
          <a href="/about">Read More.</a>
        </p>
        <div className="multiWaves multiCherrySageSVG flip"></div>
      </section>
      <section className="faqBanner">
        <h2 id="faqHeader">
          <span>F</span>requently
          <br />
          <span className="second">A</span>
          sked
          <br />
          <span className="third">Q</span>
          uestions
        </h2>
        <p>
          Inquiries can to your general questions can typically be found{" "}
          <a href="faqs">here.</a>
        </p>
      </section>
    </div>
  );
}

export default Home;
