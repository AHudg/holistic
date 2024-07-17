import bee from "../../assets/beeCrumbleCutout.png";
import "./faqs.css";

function FAQs({}) {
  // let iterator = -1;
  const questions = [
    "What's a Doula",
    "Why a Doula",
    "What packages are offered",
    "I can't afford a doula, what can I do to support my baby and my health?",
    "What's a prenatal meeting?",
    "How do the two week postpartum check-ins work?",
    "Do you offer payment plans?",
    "What can I expect the day of?",
  ];
  const answers = [
    "Doula is the professional name for someone who is your support— educationally, mentally, emotionally, and at times physically! There are two types of doulas: birth doulas and postpartum doulas. I am a certified birth doula who is excited to walk alongside you through your pregnancy and labor, but I do not offer postpartum doula services. It is important to mention that doulas are non-medical professionals and do not offer medical advice or practices. I believe birth was designed by God, and it belongs to women. My heart behind this profession is to provide education for my families to make informed decisions about and for their birth plan. Pregnancy and labor can be overwhelming, and no one should have to sift through the information alone. Doulas work with your partner, not against them, to create an environment where you feel safe, comfortable, and in charge of your birth.",
    "Research has shown that having a doula in your birth can decrease your stress during pregnancy and positively impact the labor process. Doulas make a great advocate for birth plans and are on your team. We can offer that extra support to make your birth experience that much more enjoyable and ensure that you feel empowered and prepared for birth. Whether you are a first time mom or are looking for a different birth experience, we are here to help you through pregnancy and labor. Doulas can also decrease your chances of ending up in a cesarean section or complications during birth. Fewer women end in epidural, fewer women have instrumental vaginal deliveries, and doulas can decrease likelihood of dissatisfaction with the birth experience.",
    "I generally offer three packages which are education consultations, the labor day only plan, or a full pregnancy plan (i.e., walking with you through the pregnancy and labor).",
    "Please reach out to me! I can direct you to different childbirth education classes that could help equip you, or we can have a consultation to discuss some other options. I want every mom to be prepared for the day of labor, not just those who can afford it! You can get in touch with me via the contact form, I'd love to chat more.",
    "The prenatal meeting is where we meet up to discuss your hopes and dreams for this birth. I can discuss in detail what I can offer you throughout pregnancy and day of labor, you can share about previous birth experiences and what you want to change or keep for this baby, or if this is your first birth: we can discuss your fears and excitements for this one! We can also talk about provider options, pain medication options if you are wanting a medicated birth, and so much more. This is a time to get to know each other so that I can learn how to best support you along your birth journey. Feel free to come with questions!",
    "Postpartum check ins can vary based on what you need! I normally check in with breastfeeding to see how that has been progressing. I also love to offer meals or some help household chores. You are welcome to reach out to me about anything mental or physical health related, but as a nonmedical professional I will most likely just connect you to someone who specializes in that field. We can discuss what you think you may want this to look like in our prenatal meeting.",
    "Yes! I can offer to split payments up to help accommodate families, and I am always open to discussing modifying packages and prices. I am a doula because I love what I do, and any family or single mom who wants education and support is a mom I want to be there for! Please feel free to reach out and we can discuss this more in depth.",
    "The day of labor is a day all about you! I will show up to the home, birth center, or hospital with all of my gear in my baby bag. You are welcome to labor alone with your partner for as long as you want, or you can call me in the early stages of labor and we walk through that as well! Birth is specific to each person, and in our prenatal meetings we can discuss what you want your day of labor to look like more in detail. I stay through the entire birth, and post baby I will typically offer to go grab food for the new couple.",
  ];

  const handleExpand = function (event) {
    const targetName = event.target.name;
    const selectAnswer = document.getElementById(targetName);
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
        <img src={bee} alt="Bee" className="faqBackground"></img>
      </div>
      <div className="faqHeader">
        <h2>FAQs</h2>
        <h3>Frequently Asked Questions.</h3>
        <h3>Here are some common questions about Tender Touch.</h3>
      </div>

      <div className="faqDiv">
        {questions.map((question, index) => {
          // iterator++;
          return (
            <div key={"question" + index} className="faq">
              <div>
                <h4>{question}</h4>
                <label htmlFor={"expandCheckbox" + index}>
                  <input
                    type="checkbox"
                    name={"expandCheckbox" + index}
                    className="expandCheckbox"
                    onClick={handleExpand}
                  ></input>
                  <i className="fa-solid fa-plus fa-lg"></i>
                </label>
              </div>
              <p
                className="answer"
                id={"expandCheckbox" + index}
                data-status="closed"
              >
                {answers[index]}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQs;
