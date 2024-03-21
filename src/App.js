import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(false);

  const handlePause = () => {
    setPause(!pause);
  };

  /**
   *  @function handleStart
   *  @description this function uses for the start the stop watch
   */
  const handleStart = () => {
    setStart(true);
    if (pause) {
      setPause(false);
    }
  };

  // TODO this function is for stoping the stopwatch
  const handleStop = () => {
    setStart(false);
    setTimer(0);
  };

  useEffect(() => {
    let stopWatchTime;
    if (start && !pause) {
      stopWatchTime = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(stopWatchTime);
  },[start,pause]);

  return (
    <div className="App">
      <div className="container">
        <div className="timer">
          <span className="digits">
            {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
          </span>
          <span className="digits">
            {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
          </span>
          <span className="digits mili-sec">
            {("0" + ((timer / 10) % 100)).slice(-2)}
          </span>
        </div>
        <div className="lowe-container">
          <button className="btn success" onClick={handleStart}>
            Start
          </button>
          <button className="btn warning" onClick={handlePause}>
            Pause
          </button>
          <button className="btn error" onClick={handleStop}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
