import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import "./App.css";

function App() {
  const [expiryTimestamp, setExpiryTimestamp] = useState(
    () => new Date().getTime() + 3600000 // 1 hour in milliseconds
  );

  const { seconds, minutes, hours, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
  });

  const handleRestart = () => {
    const newExpiryTimestamp = new Date().getTime() + 3600000; // 1 hour in milliseconds
    setExpiryTimestamp(newExpiryTimestamp);
    restart(newExpiryTimestamp);
  };

  return (
    <div className="App">
      <div className="timer-container">
        <h1>Timer for IELTS Practice</h1> {/* Update the heading here */}
        <div className="countdown">
          <h2>
            <span className="hours">{hours.toString().padStart(2, "0")}</span>:
            <span className="minutes">
              {minutes.toString().padStart(2, "0")}
            </span>
            :
            <span className="seconds">
              {seconds.toString().padStart(2, "0")}
            </span>
          </h2>
        </div>
        <div className="buttons">
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={resume}>Resume</button>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
