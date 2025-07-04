import "./error.css";

function Error({}) {
  return (
    <div className="errorPage">
      <h2>404</h2>
      <p>
        It seems you have gotten lost somewhere along the way, or that this page
        is currently broken. Either way, there is nothing to see here!
      </p>
      <p>
        Let's navigate back to <a href="/">home</a> and try again!
      </p>
    </div>
  );
}

export default Error;
