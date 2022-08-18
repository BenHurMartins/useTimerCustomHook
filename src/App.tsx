import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useTimer from "./useTimer";

function App() {
  const timeLeft = useTimer(Date.now() + 1000 * 60 * 60 * 38);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Days left: {timeLeft.days}</p>
        <p>
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </p>
      </header>
    </div>
  );
}

export default App;
