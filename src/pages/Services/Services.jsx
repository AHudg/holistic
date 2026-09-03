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
          </section>
  );
}

export default Services;
