import { useState } from 'react'
import icon_arrow from './assets/images/icon-arrow.svg'

function App() {
  const [ day, setDay ] = useState("DD")
  const [ month, setMonth ] = useState("MM")
  const [ year, setYear ] = useState("YYYY")

  const handleSubmit = (e) => {
    e.preventDefault();
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
          value={day}
        />

        <label htmlFor="month" className="form-label">
          MONTH
        </label>
        <input
          type="text"
          name="month"
          id="month"
          value={month}
        />

        <label htmlFor="year" className="form-label">
          YEAR
        </label>
        <input
          type="text"
          name="year"
          id="year"
          value={year}
        />
        <button type="submit">
          <img src={icon_arrow} className="btn" alt="submit button" />
        </button>
      </form>
    </div>
  );
}

export default App;
