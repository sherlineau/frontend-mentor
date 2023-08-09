import "./App.css";
import sedan from "./assets/images/icon-sedans.svg";
import suv from "./assets/images/icon-suvs.svg";
import luxury from "./assets/images/icon-luxury.svg";

function App() {
  return (
    <div className="container">
      <div className="section">
        <div className="card left">
          <div>
            <img src={sedan} alt="icon depicting sedans" />
            <h1>SEDANS</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <button className="button ">Learn More</button>
        </div>
        <div className="card center">
          <div>
            <img src={suv} alt="icon depicting suvs" />
            <h1>SUVS</h1>
            <p>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
          </div>
          <button className="button">Learn More</button>
        </div>
        <div className="card right">
          <div>
            <img src={luxury} alt="icon depicting luxury" />
            <h1>LUXURY</h1>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
          </div>
          <button className="button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
