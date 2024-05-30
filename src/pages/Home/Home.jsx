import Hero from "../../assets/ImageFour.jpg";
import Wave from "../../components/WaveSVG/WaveSVG";
import "./home.css";
import "../../components/WaveSVG/waveSVG.css";

function Home({}) {
  return (
    <div>
      <section className="hero">
        <img src={Hero}></img>
        <Wave classProp={"topWave"} fill={"sage"} />
      </section>
      <section className="whatDoula">
        <h2>What is a doula</h2>
        <p>
          Doula is the professional name for someone who is your
          support—educationally, mentally, emotionally, and at times physically!
          My heart behind this profession is to provide education for my
          families to make informed decisions about and for their birth plan.
          Pregnancy and labor can be overwhelming, and no one should have to
          sift through the information alone. Doulas work with your partner, not
          against them, to create an environment where you feel safe,
          comfortable, and in charge of your birth. I believe birth was designed
          by God, and it belongs to women.
        </p>
        <p>
          This can look like providing education to the family, answering
          questions, hip squeezes, counter pressure, offering different position
          ideas for you and your partner to use during labor, connecting you to
          local providers for your needs, or just keeping you hydrated and fed
          as you go through the birth process. There are two types of doulas:
          birth doulas and postpartum doulas. I am a certified birth doula who
          is excited to walk alongside you through your pregnancy and labor, but
          I do not offer postpartum doula services. It is important to mention
          that doulas are non-medical professionals and do not offer medical
          advice or practices.
        </p>
        <Wave classProp={"topWave topRelative"} fill={"meadow"} />
      </section>
      <section className="whyDoula">
        <h2>Why a doula</h2>
        <p>
          Research has shown that having a doula in your birth can decrease your
          stress during pregnancy and positively impact the labor process.
          Doulas make a great advocate for birth plans and are on your team.
          Doulas can offer that extra support to make your birth experience that
          much more enjoyable and ensure that you feel empowered and prepared
          for birth. Whether you are a first time mom or are looking for a
          different birth experience, doulas are here to help you through
          pregnancy and labor.
        </p>
        <p>
          Can decrease your chances of ending up in a cesarean section or
          complications during birth. Fewer women end in epidural, fewer women
          have instrumental vaginal deliveries, and decrease likelihood of
          dissatisfaction with the birth experience.
        </p>
      </section>
      <section className="banner">
        <Wave classProp={"meadowBottomWave"} fill={"meadow"} />
        <img src={Hero}></img>
        <Wave classProp={"topWave"} fill={"crumble"} />
      </section>
      <section className="serviceBanner">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, id
          natus atque corporis dolores voluptatum praesentium ipsa qui nemo
          culpa dolorum eum eligendi facere repellendus ea totam optio. Est,
          esse!
        </p>
      </section>
      <section className="aboutBanner">
        <div className="multiWaves multiCherryCrumbleSVG"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          molestias officia! Eum modi similique repellat laboriosam, accusantium
          quisquam expedita totam iusto, mollitia architecto vero quasi
          recusandae molestias, saepe sint harum!
        </p>
        <div className="multiWaves multiCherrySageSVG flip"></div>
      </section>
      <section className="faqBanner">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
          temporibus! Praesentium non et, magni deleniti ipsum repudiandae
          consectetur laborum delectus quibusdam nam nulla dolores! Odio,
          accusamus! Maxime eligendi cum in!
        </p>
      </section>
      {/* <section className="testimonialBanner">
        <p>Link to Testimonials?</p>
      </section> */}
    </div>
  );
}

export default Home;
