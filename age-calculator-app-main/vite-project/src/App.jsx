import { useState } from 'react'
import icon_arrow from './assets/images/icon-arrow.svg'

function App() {
  const [ day, setDay ] = useState("")
  const [ month, setMonth ] = useState("")
  const [ year, setYear ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <label htmlFor="day" className="form-label">DAY</label>
            <input type="text" name="day" id="day" onChange={e=>setDay(e.target.value)} value={day} placeholder='DD'/>

            <label htmlFor="month" className="form-label">MONTH</label>
            <input type="text" name="month" id="month" onChange={e=>setMonth(e.target.value)} value={month} placeholder='MM'/>

            <label htmlFor="year" className="form-label">YEAR</label>
            <input type="text" name="year" id="year" onChange={e=>setYear(e.target.value)} value={year} placeholder='YYYY'/>
        <button type="submit">
          <img src={icon_arrow} className="btn" alt="submit button" />
        </button>
      </form>
    </div>
  );
}

export default App;
