import { useEffect, useState } from "react";
import axios from "axios";
import dice from './assets/images/icon-dice.svg'
import './app.css'
import mobile_divider from './assets/images/pattern-divider-mobile.svg'
import desktop_divider from './assets/images/pattern-divider-desktop.svg'

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
          <p className="advice-id">ADVICE #{data.id}</p>
          <p className="advice-text">{`"${data.advice}"`}</p>
          <img 
          src={desktop_divider}
          srcSet={`${mobile_divider} 375px, ${desktop_divider} 1000px`}
          sizes="(max-width: 375px) 375px, 1000px"
          className="divider" 
          />
          <div className="dice">
          <img src={dice} alt="random advice button" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
