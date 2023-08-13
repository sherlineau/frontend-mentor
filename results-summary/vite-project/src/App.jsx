import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    getData();
    getAvg();
  });

  const getData = async () => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const getAvg = () => {
    let totalScore = 0;
    data.map((i) => (totalScore += i.score));
    setAverage(Math.floor(totalScore / data.length));
  };

  return (
    <>
      {average}
    </>
  );
}

export default App;
