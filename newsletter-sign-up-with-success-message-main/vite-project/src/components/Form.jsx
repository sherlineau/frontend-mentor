import React, { useState } from "react";
import hero from "../assets/images/illustration-sign-up-desktop.svg";

const Form = (props) => {
  const { onSubmitProp } = props
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(undefined);

    // function used to compare user input to regular expression
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(enteredEmail);
    setValidEmail(emailRegex.test(enteredEmail));
  };

//   passes t/f to app.jsx based on valid email input
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp(validEmail);
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
            {/* error message does not appear until user starts typing, disappears when user types a valid email */}
            {validEmail == undefined ?  "" : validEmail ? "" : <p className="error">Valid email required</p>}
          </div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@yourcompany.com"
            value={email}
            onChange={handleEmailChange}
            className={validEmail ? "": `${validEmail}`}
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
