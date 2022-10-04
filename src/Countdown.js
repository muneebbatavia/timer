import React from "react";

const Countdown = ({
  timer,
  setTimer,
  pauseTimer,
  isStart,
  setIsStart,
  count,
}) => {
  return (
    <>
      <h1>{timer >= 0 ? `Countdown : ${timer}` : "Countdown Ended"}</h1>

      <button
        style={{
          backgroundColor: "green",
          color: "white",
          width: 100,
          height: 50,
          marginLeft: 150,
        }}
        onClick={() => pauseTimer()}
      >
        {isStart ? "Stop" : "Start"}
      </button>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
          width: 100,
          height: 50,
          marginLeft: 30,
        }}
        onClick={() => setIsStart(false) + setTimer(count)}
      >
        Reset
      </button>
    </>
  );
};

export default Countdown;
