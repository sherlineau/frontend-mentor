import React from "react";
import icon_success from "../assets/images/icon-success.svg";

const Success = (props) => {
  const { onSubmitProp } = props;

  return (
    <div className="white-background">
      <div className="success">
        <div>
          <img
            src={icon_success}
            alt="orange checkmark"
            className="success-icon"
          />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span style={{ fontWeight: 700 }}>ash@loremcompany.com</span>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <button onClick={(e) => onSubmitProp(false)}>Dismiss message</button>
      </div>
    </div>
  );
};

export default Success;
