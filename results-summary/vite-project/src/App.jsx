import "./App.css";
import { useEffect, useState } from "react";
import CategoryScore from "./components/CategoryScore";

function App() {
  const [data, setData] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    getData();
    getAvg();
  });

  const getData = async () => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const getAvg = () => {
    let totalScore = 0;
    data.map((i) => (totalScore += i.score));
    setAverage(Math.floor(totalScore / data.length));
  };

  return (
    <div className="container">
      <div className="container-center">
        <div className="left">
          <h2>Your Result</h2>

          <div className="circle">
            <h1 className="average-score">{average}</h1>
            <span>of 100</span>
          </div>

          <h2>Great</h2>

          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="right">
          <h3>Summary</h3>
          <div className="categories">
            {data.map((i, index) => {
              return <CategoryScore data={i} key={index} />;
            })}
          </div>
          <div className="button">
            <button >Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
