import './App.css'
import Accordian from './components/accordian'
import icon_star from './assets/images/icon-star.svg'
import { useEffect, useState } from 'react'

function App() {
  // initialize data state and fetch data from json
  const [data, setData] = useState([])

  // function to get data
  const getData = async() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(res => setData(res))
  }

  // on load, fetch data
  useEffect( ()=> {
    getData()
  })


  return (
    <>
      <div className="main">
        <div className="row header">
          <img src={icon_star} alt="icon of star" className='star-icon'/>
          <h1>FAQs</h1>
        </div>
        {
          data.map((i,index) =>{ return <Accordian data={i} key={index}/>})
        }
      </div>
    </>
  )
}

export default App
