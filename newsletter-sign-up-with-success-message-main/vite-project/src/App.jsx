import { useState } from "react";
import Form from "./components/Form";
import Success from "./components/Success";

function App() {
  const [success, setSuccess] = useState(false);

  const onSubmit = (isValid) => {
    setSuccess(isValid)
  };

  return (
    <div className="main">
      {/* using state to check if form has been submitted successfully -> if true change form to success message 
      
      default state behavior false: form should show 
      when state is changed to true: success page is shown
      */}
      {success ? <Success /> : <Form onSubmitProp={onSubmit} />}
    </div>
  );
}

export default App;
