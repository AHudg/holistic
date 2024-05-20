function Hamburger({}) {
  return (
    <div>
      <div className="hamburgerMenu"></div>
      <label htmlFor="checkboxOne" className="hamburgerContainer">
        <input type="checkbox" id="checkboxOne" className="hamburgerCheckbox" />
        <div className="hamburger">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </div>
  );
}

export default Hamburger;
