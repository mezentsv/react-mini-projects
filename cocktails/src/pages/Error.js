import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>oops! it's a cul-de-sac</h1>
      </div>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </section>
  );
};

export default Error;
