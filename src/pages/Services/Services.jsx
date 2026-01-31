import "./services.css";
import { NavLink, Outlet } from "react-router-dom";

function Services({}) {
  return (
    <section className="serviceSection">
      <div className="serviceHeader">
        <h2>Packages & Fees</h2>
        <div className="serviceToggle" role="tablist" aria-label="Services">
          <NavLink to="birth" className={({ isActive }) => `toggleBtn ${isActive ? "serviceMenu activeService" : "serviceMenu"}`}>
            Birth Doula
          </NavLink>
          <NavLink to="postpartum" className={({ isActive }) => `toggleBtn ${isActive ? "serviceMenu activeService" : "serviceMenu"}`}>
            Postpartum Doula
          </NavLink>
          <NavLink to="meals" className={({ isActive }) => `toggleBtn ${isActive ? "serviceMenu activeService" : "serviceMenu"}`}>
            Meals
          </NavLink>
        </div>
      </div>

        <Outlet />
      
      <p>
        I am happy to discuss payment plans if needed. I am a doula because I
        love what I do, so please reach out if you are wanting to discuss
        different payment options.
      </p>
      <p>If you’re here on behalf of a family member, I do offer gift certificates to pay for a mom to have postpartum care! Please reach out and we can get that set up! </p>
    </section>
  );
}

export default Services;
