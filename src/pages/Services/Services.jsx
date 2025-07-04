import "./services.css";

function Services({}) {
  return (
    <section className="serviceSection">
      <div className="serviceHeader">
        <h2>Packages & Fees</h2>
        <div className="consultation">
          <h3>Offering Free Pregnancy Consultations!</h3>

          <p>
            Let's meet up and see if we are a good fit for each other! This is
            just a time to get to know each other more on a personal level. We
            can discuss my birth philosophy and your birth desires- but we don't
            get into the weeds quite yet.
          </p>
        </div>
      </div>

      <div className="packageContainer">
        <div className="package">
          <h3>
            Birth Plan Consultation <span>$60</span>
          </h3>

          <p>
            Navigating pregnancy and forming a birth plan can be overwhelming
            and confusing, lets chat about your goals and what you are desiring
            for this baby! This two hour session can look like whatever you want
            it to be, but some common topics we discuss are:
          </p>
          <ul>
            <li>determining where you want to give birth</li>
            <li>finding a care provider that aligns with your goals</li>
            <li>discussing different pain management options</li>
            <li>discussing childbirth education classes</li>
            <li>discussing interventions</li>
            <li>connecting you to resources</li>
            <li>and so much more.</li>
          </ul>

          <p className="bottomBlurb">
            This time is for you, so I encourage you to bring your birth partner
            and come with questions!
          </p>
        </div>

        <div className="package">
          <h3>
            Full Service Doula Package <span>$1200</span>
          </h3>
          <p>
            This service is great for first time mothers, or mothers who feel
            that they want to have a different experience after a challenging
            pregnancy experience.
          </p>

          <ul>
            <p>This includes:</p>
            <li>
              2-3 prenatal meetings to discuss and plan for birth and postpartum
            </li>
            <li>
              availability virtually 24/7 via phone call/texting/emails
              throughout your entire pregnancy
            </li>
            <li>
              on call two weeks prior to the due date until the baby arrives
            </li>
            <li>
              breastfeeding education and connecting to lactation consultants if
              needed
            </li>
            <li>
              discussing mental health throughout pregnancy and connecting you
              to resources needed
            </li>
            <li>2 hour postpartum care</li>
            <li>1 postpartum visit at the client's convenience</li>
            <li>
              up to 2 weeks virtual postpartum check ins and answering questions
              if needed!
            </li>
          </ul>

          <p className="bottomBlurb">
            If your labor allows, I will also happily take photos as we go
            through the labor process.
          </p>
        </div>

        <div className="package">
          <h3>
            Labor Only Doula Package <span>$1000</span>
          </h3>
          <p>
            This is a great option for experienced moms who just need some extra
            hands the day of.
          </p>

          <ul>
            <p>This includes:</p>
            <li>1 prenatal meeting</li>
            <li>on call 2 weeks before the due date until the baby arrives</li>
            <li>continuous labor support</li>
            <li>breastfeeding support if needed postpartum</li>
            <li>
              2 weeks postpartum care to connect you to lactation consultants
            </li>
            <li>mental health resources or any other care you may need.</li>
          </ul>

          <p className="bottomBlurb">
            If your labor allows, I will be happy to take some photos of your
            birth as well.
          </p>
        </div>

        <div className="package">
          <h3>
            Postpartum Doula Support
          </h3>
          <p>
            I offer two postpartum care options tailored to your needs:</p>
            <span className="postService">Daytime Support - $35/hour</span>
            <span className="postService">Overnight Support - $45/hour</span>
            <p>Think of this as a blend of everything you need wrapped into one: a maid, a cook, a listening ear, and someone to hold your baby so you can finally rest.
          </p>

          <ul>
            <p>Postpartum support is completely personalized to you. Some of the ways I help include:</p>
            <li>Washing bottles or pump parts</li>
            <li>Doing laundry and light tidying</li>
            <li>Preparing meals and snacks</li>
            <li>Caring for baby while you nap or shower</li>
            <li>Accompanying you to appointments for an extra set of hands</li>
            <li>Offering lactaction support and gentle guidance</li>
          </ul>

          <ul>
            <p>Each package includes:</p>
            <li>A customized postpartum planning document</li>
            <li>Education on postpartum mental health</li>
            <li>Support for feeding (bottle or breast)</li>
            <li>Encouragement, empathy, and someone in your corner cheering you on</li>
          </ul>

          <p className="bottomBlurb">
            Postpartum is a sacred time for rest, nourishment, and support. I'm here to help you experience all three.
          </p>
        </div>
      </div>
      <p>
        I am happy to discuss payment plans if needed. I am a doula because I
        love what I do, so please reach out if you are wanting to discuss
        different payment options.
      </p>
    </section>
  );
}

export default Services;
