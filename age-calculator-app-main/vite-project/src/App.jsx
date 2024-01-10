import { useState } from "react";
import icon_arrow from "./assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState([]);
  const [age, setAge] = useState({
    ageYear: "--",
    ageDays: "--",
    ageMonths: "--",
  });

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
    } else if (birthday == "Invalid Date") {
      errorMessages["day"] = "Must be a valid day";
      errorMessages["month"] = "Must be a vaild month";
      errorMessages["year"] = "Must be in the past";
      setErrors(errorMessages);
    } else {
      // otherwise caculate age
      // calculate different in years, months and days
      let ageYear = today.getFullYear() - birthday.getFullYear();
      let ageMonths = today.getMonth() - birthday.getMonth();
      let ageDays = today.getDate() - birthday.getDate();

      // adjust for negative values
      if (ageDays < 0) {
        const lastMonthDays = new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        ).getDate();
        ageDays += lastMonthDays;
        ageMonths--;
      }

      if (ageMonths < 0) {
        ageMonths += 12;
        ageYear--;
      }

      setAge({ ageMonths, ageYear, ageDays });
      setErrors([]);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <div className={`col ${errors["day"] ? "errors" : ""}`}>
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
            {errors ? <p className="errors">{errors["day"]}</p> : <></>}
        </div>

          <div className={`col ${errors["month"] ? "errors" : ""}`}>
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
            {errors ? <p className="errors">{errors["month"]}</p> : <></>}
        </div>

          <div className={`col ${errors["year"] ? "errors" : ""}`}>
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
            {errors ? <p className="errors">{errors["year"]}</p> : <></>}
          </div>
        </div>

        <button type="submit">
          <img src={icon_arrow} className="btn" alt="submit button" />
        </button>
      </form>

      <div className="results">
        <h1>
          <span className="accent">{age.ageYear}</span> years
        </h1>
        <h1>
          <span className="accent">{age.ageMonths}</span> months
        </h1>
        <h1>
          <span className="accent">{age.ageDays}</span> days
        </h1>
      </div>
    </div>
  );
}

export default App;
