import { useState } from "react";
import icon_arrow from "./assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState([]);
  const [age, setAge] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = {
      month: parseInt(month),
      day: parseInt(day),
      year: parseInt(year),
    };
    const errorMessages = {};
    const today = new Date();
    const birthday = new Date(`${month} ${day} ${year}`);

    // first check if birthday is a valid date

    if (birthday == "Invalid Date") {
      errorMessages["day"] = "Must be a valid day";
      errorMessages["month"] = "Must be a vaild month";
      errorMessages["year"] = "Must be in the past";
      setErrors(errorMessages);
    }

    // if it is a valid birthday, then run other validations
    else {
      // checks for empty field and if its a number
      Object.keys(date).forEach((key) => {
        if (date[key].length == 0) {
          errorMessages[key] = "This is required";
        }
        if (isNaN(date[key])) {
          errorMessages[key] = "Must be a number";
        }
      });

      if (date["month"] < 0 || date["month"] > 12) {
        errorMessages["month"] = "Must be a vaild month";
      }

      // checks if valid year, has to be before current dates year
      if (date["year"] > today.getFullYear()) {
        errorMessages["year"] = "Must be in the past";
      }

      //
      const getDaysInMonth = new Date(year, month, 0).getDate();
      if (day < 1 || day > getDaysInMonth) {
        errorMessages["day"] = "Must be a valid day";
      }

      // if any errors were generated => set errors 
      if (Object.keys(errorMessages).length > 0) {
        setErrors(errorMessages);
      } 

      // otherwise caculate age
      else {

      //
      }

    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="day" className="form-label">
          DAY
        </label>
        <input
          type="text"
          name="day"
          id="day"
          onChange={(e) => setDay(e.target.value)}
          value={day}
          placeholder="DD"
        />

        <label htmlFor="month" className="form-label">
          MONTH
        </label>
        <input
          type="text"
          name="month"
          id="month"
          onChange={(e) => setMonth(e.target.value)}
          value={month}
          placeholder="MM"
        />

        <label htmlFor="year" className="form-label">
          YEAR
        </label>
        <input
          type="text"
          name="year"
          id="year"
          onChange={(e) => setYear(e.target.value)}
          value={year}
          placeholder="YYYY"
        />
        <button type="submit">
          <img src={icon_arrow} className="btn" alt="submit button" />
        </button>
      </form>
    </div>
  );
}

export default App;
