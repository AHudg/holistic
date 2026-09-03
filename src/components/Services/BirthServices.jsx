import "./outletservices.css";
import { Link } from "react-router-dom";

function BirthServices({ }) {
  return <div>
        <div className="consultation">
          <h3>Offering Free Pregnancy Consultations!</h3>

          <p>
            Let's meet up and see if we are a good fit for each other! This is
            just a time to get to know each other more on a personal level. We
            can discuss my birth philosophy and your birth desires- but we don't
            get into the weeds quite yet.
          </p>
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
            The Quilt Package <span>$2100-$2660</span>
          </h3>
          <p>
            This service is great for first time mothers, or mothers of multiples that want
            some extra support throughout postpartum as well. The postpartum support in this
            package ranges between 5-9 days of help, each shift being 4 hours long, and spread
            between 2-3 weeks. This fee also contains the birth fee. If you wanted more 
            postpartum support than this, please visit the <Link to="/services/postpartum">
            postpartum doula services here</Link> to read more.
          </p>

          <p>This includes:</p>
          <ul>
            <li>
              2-3 weeks of daytime postpartum support: baby care, preparing light meals, housekeeping, and running any errands;
              the goal is to take things off your plate so that you can focus on recovering, resting, and healing in postpartum.
            </li>
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
            The Stitch Package <span>$1400</span>
          </h3>
          <p>
            This service is great for those who postpartum help is not needed and are only requesting birth support.
          </p>

          <p>This includes:</p>
          <ul>
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
        <p>If you are a repeat mom who feels as if you may not need as much support, reach out to me and we can customize a package.</p>
        </div>
      </div>
}

export default BirthServices;