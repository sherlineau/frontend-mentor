import { useEffect, useState } from "react";
import axios from "axios";
import dice from './assets/images/icon-dice.svg'

function App() {
  const [loading, setLoading] = useState(true);
  // data retrieved from api
  const [data, setData] = useState([]);

  // on load, get random advice from adviceslip api
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((res) => {
        setData(res.data["slip"]);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  return (
    <div className="container">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="card">
          <h1>ADVICE #{data.id}</h1>
          {`"${data.advice}"`}
          <div className="divider" />
          <img src={dice} alt="random advice button" className="dice"/>
        </div>
      )}
    </div>
  );
}

export default App;
