import AboutKatherine from "../../assets/AboutKatherine.jpeg";
import flowerField from "../../assets/FlowerField.png";

import "./about.css";

function About({}) {
  return (
    <section className="aboutSection">
      <h2>Meet Your Future Doula</h2>

      <div className="aboutFlex">
        <img
          src={AboutKatherine}
          alt="Katherine Ellis"
          className="aboutPhoto"
        />

        <div>
          <p>
          Welcome! My name is Katherine Ellis and I am a proud birth and postpartum doula and homemaker. I would like to add that my new name will be Katherine Kutchey coming Spring of 2026, so if you were referred to me by a friend and my last name is different---you are in the right spot! I was born into a small town and into a family of 8 children, and have loved being around birth and babies my whole life. My family has instilled into me a love for the slower life from a young age. I was raised with a plentiful garden in the backyard, chickens and ducks running around our orange trees, and worked alongside my brother in his generational Brahman ranch.
          </p>
          <br />

          <p>
            I am a second generation Aggie who graduated from Texas A&M in 2024
            with a degree in Community Health; I have always loved education and
            the human body, and I knew that I needed to pursue a career that
            blended my love for people and for education. I currently do not
            have a family of my own, which allows me to fully devote my time to
            my moms, with no interruptions or distractions. I am always on
            call, and I am thrilled to meet my future mamas and walk with them in
            such a sweet time of their lives.
          </p>
          <br />

          <p>
            I believe birth is a beautiful process designed by God and made for
            mothers. My biggest hope with pursuing this career is to create a
            space where women and their partners feel empowered and back in
            charge of their own birth plan and pregnancy. I believe that
            education removes fear, and there is so much misinformation behind
            birth and pregnancy. Pregnancy and birth are made to be celebrated,
            and I look forward to working with each family on creating an
            experience that leaves them excited to have their next little one.
            Although I have worked in hospital settings and graduated with a
            health degree, it is important to note that I do not offer medical
            advice or medical practice. Doulas are nonmedical support systems. I
            will connect you to someone who can help with any issues that may
            arise, and I am always here to listen.
          </p>
          <br />

          <p>
            When I am not helping mamas in labor or meeting up with them, I
            enjoy a variety of different hobbies! I love gardening, riding
            horses, and am always experimenting with new recipes in the kitchen!
            I end almost every day with my nose in a book before bed. I adore
            getting outside and will often hike with friends, go for walks, or
            start training for my next event! I have run a half marathon before,
            am currently training for a mini triathlon, and have a spartan on my
            list soon!
          </p>
        </div>
      </div>

      <img src={flowerField} alt="Flower Field" className="flowerField" />
    </section>
  );
}

export default About;
