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

      {data.map((i, index) => {
        return <CategoryScore data={i} key={index} />;
      })}
    </>
  );
}

export default App;
