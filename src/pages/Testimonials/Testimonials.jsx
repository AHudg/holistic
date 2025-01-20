import { useRef } from "react";
import "./testimonial.css";

function Testimonials({}) {
  const targetRef = useRef(null);
  const formScroll = (event) => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="testSection">
      <h2>Tender Remarks</h2>
      <h3>Touching Testimonials from Families We've Cared For</h3>
      <h4>
        Leave Yours
        <span onClick={formScroll}> Here</span>
      </h4>
      <div className="testContainer">
        <div className="testBlurb">
          <div className="quotations quoteTop"></div>
          <p>
            We're so grateful for Katherine and all her support during, before
            and after our son's birth! I was really nervous as a first time mom
            with a lot of anxiety, and she really helped my husband and I
            prepare and had a lot of great insight and information on how to do
            so. During the birth she was so kind and attentive and even though
            in the moment I didn't always want to move positions or things like
            that, I'm so glad she made me do it because I'm certain it helped
            move things along and is a huge reason I had the best birth I could.
            She was also just a wonderful and comforting presence and was so
            helpful guiding my husband on what to do and keeping us calm, as
            well as knowing some of the hospital staff and working so well with
            the nurses, being willing to update our families in the waiting room
            etc. We are so grateful for her insight and help understanding
            everything and her commitment to helping us make informed choices
            without seeming biased. If we're still close by when we have another
            baby I won't hesitate to have her with us again as I'm certain we
            would not have had such a smooth and relatively intervention free
            birth without her! Thanks so much again for everything!
          </p>
        </div>
        <div className="testBlurb">
          <div className="quotations quoteTop"></div>
          <p>
            A true blessing from God. Words can’t fully capture how grateful I
            am for my Katherine. She was truly a gift during one of the most
            important times in my life. Her knowledge and unwavering support
            gave me the confidence to make decisions that felt right for me and
            my baby. I signed my delivery contract after 35 weeks, unsure if it
            would even make a difference, but those few weeks changed
            everything. She saved me from an unnecessary induction and was by my
            side every step of the way during delivery. Because of her, I was
            able to have the vaginal birth I had prayed for. She worked so
            beautifully with the hospital staff it felt like she was the missing
            piece in my delivery team. After seeing the impact she had during
            delivery, I knew I needed her for postpartum care as well. Each day,
            she reminded me to take care of myself—not just physically, but
            emotionally and mentally, too. She brought a sense of calm and
            reassurance that I didn’t even know I needed. Looking back, hiring
            her was the best decision I made during my pregnancy. She will
            always hold a special place in my heart for the role she played in
            bringing my baby into the world.
          </p>
        </div>
        <div className="testBlurb">
          <div className="quotations quoteTop"></div>
          <p>
            Katherine Ellis 100%. It was her first hospital birth, it was my
            third baby so I am not new to the scene-- but she was EXTREMELY
            knowledgeable and was not hesitant to stop me or nurses to
            educate/advocate. I highly recommend her!
          </p>
        </div>
        <div className="testBlurb">
          <div className="quotations quoteTop"></div>
          <p>
            I didn’t have a doula with my first birth, so I wasn’t sure about
            hiring one for my second because I don’t enjoy having too many
            people around when I’m in pain. However, Katherine was super
            supportive and could read me my body language during when I needed
            her support or when I needed space. She made sure I was drinking
            water, she showed my husband some pressure points that really helped
            my back, and overall was a great addition to my birth! I would
            definitely recommend her as a doula!!
          </p>
        </div>
      </div>
      <form
        ref={targetRef}
        name="testimonial"
        method="post"
        aria-label="Testimonial Form"
      >
        <input type="hidden" name="form-name" value="contact"></input>

        <h5>We'd love to hear from you.</h5>
        <h6>
          Leave your testimonial below to be featured on the website and to help
          us get our name out there as a trusted and reliable doula service!
        </h6>

        <div className="testForm">
          <label htmlFor="firstNameTest">First Name:</label>
          <input type="text" id="firstNameTest" name="firstNameTest"></input>

          <label htmlFor="lastNameTest">Last Name:</label>
          <input type="text" name="lastNameTest"></input>

          <label htmlFor="emailTest">Email:</label>
          <input type="text" id="emailTest" name="emailTest"></input>

          <label htmlFor="phoneTest">Phone:</label>
          <input type="text" id="phoneTest" name="phoneTest"></input>

          <label htmlFor="messageTest">Testimonial:</label>
          <input type="textarea" id="messageTest" name="messageTest"></input>
        </div>

        <button type="submit" className="testBtn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Testimonials;
