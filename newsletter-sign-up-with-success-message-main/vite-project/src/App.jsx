import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [success, setSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  // TODO test form change on submit props is working correctly

  return (
    <div className="main">
      {/* using state to check if form has been submitted successfully -> if true change form to success message 
      
      default state behavior false: form should show 
      when state is changed to true: success page is shown
      */}
      {success ?  <div /> : <Form onSubmitProp={onSubmit} />}
    </div>
  );
}

export default App;
