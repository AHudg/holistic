import bee from "../../assets/beeCutout.png";
import "./faqs.css";

function FAQs({}) {
  let iterator = -1;
  const questions = [
    "What's a Doula",
    "Why a Doula",
    "What packages are offered",
    "I can't afford a doula, what can I do to support my baby and my health?",
    "What's a prenatal meeting?",
    "How the 2 week postpartum check-ins work?",
    "Does insurance cover doulas?",
    "Do you offer payment plans?",
    "What can I expect the day of?",
  ];
  const answers = [
    "Doula is the professional name for someone who is your support— educationally, mentally, emotionally, and at times physically! My heart behind this profession is to provide education for my families to make informed decisions about and for their birth plan. Pregnancy and labor can be overwhelming, and no one should have to sift through the information alone. Doulas work with your partner, not against them, to create an environment where you feel safe, comfortable, and in charge of your birth. I believe birth was designed by God, and it belongs to women. This can look like providing education to the family, answering questions, hip squeezes, counter pressure, offering different position ideas for you and your partner to use during labor, connecting you to local providers for your needs, or just keeping you hydrated and fed as you go through the birth process. There are two types of doulas: birth doulas and postpartum doulas. I am a certified birth doula who is excited to walk alongside you through your pregnancy and labor, but I do not offer postpartum doula services. It is important to mention that doulas are non-medical professionals and do not offer medical advice or practices.",
    "Research has shown that having a doula in your birth can decrease your stress during pregnancy and positively impact the labor process. Doulas make a great advocate for birth plans and are on your team. Doulas can offer that extra support to make your birth experience that much more enjoyable and ensure that you feel empowered and prepared for birth. Whether you are a first time mom or are looking for a different birth experience, doulas are here to help you through pregnancy and labor. Can decrease your chances of ending up in a cesarean section or complications during birth. Fewer women end in epidural, fewer women have instrumental vaginal deliveries, and decrease likelihood of dissatisfaction with the birth experience.",
    "-labor day only plan -full pregnancy plan: walking through pregnancy + labor -education consultations",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nulla quis. Suscipit maiores commodi sequi unde, cum fugit saepe, dolor iure explicabo eveniet maxime laboriosam cumque. Vel, neque ab!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nulla quis. Suscipit maiores commodi sequi unde, cum fugit saepe, dolor iure explicabo eveniet maxime laboriosam cumque. Vel, neque ab!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nulla quis. Suscipit maiores commodi sequi unde, cum fugit saepe, dolor iure explicabo eveniet maxime laboriosam cumque. Vel, neque ab!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nulla quis. Suscipit maiores commodi sequi unde, cum fugit saepe, dolor iure explicabo eveniet maxime laboriosam cumque. Vel, neque ab!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nulla quis. Suscipit maiores commodi sequi unde, cum fugit saepe, dolor iure explicabo eveniet maxime laboriosam cumque. Vel, neque ab!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nulla quis. Suscipit maiores commodi sequi unde, cum fugit saepe, dolor iure explicabo eveniet maxime laboriosam cumque. Vel, neque ab!",
  ];

  const handleExpand = function (event) {
    const targetName = event.target.name;
    const selectAnswer = document.getElementById(targetName);
    console.log(selectAnswer.offsetHeight);
    if (selectAnswer.getAttribute("data-status") === "closed") {
      selectAnswer.className += " answerSelected";
      selectAnswer.setAttribute("data-status", "open");
    } else {
      selectAnswer.className = "answer";
      selectAnswer.setAttribute("data-status", "closed");
    }
  };

  return (
    <section className="faqSection">
      <div>
        <img src={bee} className="faqBackground"></img>
      </div>
      <div className="faqHeader">
        <h2>FAQs</h2>
        <h3>Frequently Asked Questions.</h3>
        <h3>Here are some common questions about Tender Touch.</h3>
      </div>

      <div>
        {questions.map((question) => {
          iterator++;
          return (
            <div key={"question" + iterator} className="faq">
              <div>
                <h4>{question}</h4>
                <label htmlFor={"expandCheckbox" + iterator}>
                  <input
                    type="checkbox"
                    name={"expandCheckbox" + iterator}
                    className="expandCheckbox"
                    onClick={handleExpand}
                  ></input>
                  <i className="fa-solid fa-plus fa-lg"></i>
                </label>
              </div>
              <p
                className="answer"
                id={"expandCheckbox" + iterator}
                data-status="closed"
              >
                {answers[iterator]}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQs;
