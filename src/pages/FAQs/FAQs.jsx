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
    "explanation",
    "explanation",
    "-labor day only plan -full pregnancy plan: walking through pregnancy + labor -education consultations",
    "explanation",
    "explanation",
    "explanation",
    "explanation",
    "Explanation",
    "Explanation!",
  ];

  return (
    <section className="faqSection">
      <div className="bgContainer">
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
            <div className="faq">
              <i className="fa-solid fa-plus"></i>
              <h4 className="question">{question}</h4>
              <p className="answer">{answers[iterator]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQs;
