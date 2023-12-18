import React from "react";
import hero from "../assets/images/illustration-sign-up-desktop.svg";

const Form = (onSubmitProp) => {
    // TODO! email validation 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp(true);
  };

  return (
    <div className="row">
      <div className="col form">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="form-label">
            <p>Email address</p>
            <p className="error">Valid email required</p>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@yourcompany.com"
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="col">
        <img src={hero} className="hero-img" />
      </div>
    </div>
  );
};

export default Form;
