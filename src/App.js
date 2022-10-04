import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import Countdown from "./Countdown";

function Counter() {
  let timeout;
  let count = 0;
  const [timer, setTimer] = useState(count);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (isStart && timer >= 0) {
      timeout = setTimeout(
        () =>
          setTimer((prevstate) => {
            return prevstate - 1;
          }),
        1000
      );
    }
  });

  function pauseTimer() {
    clearTimeout(timeout);
    setIsStart(!isStart);
  }

  function handleChange(event) {
    count = setTimer(event.target.value);
    setIsStart(false);
  }

  function resetInput(event) {
    event.target.value = "";
    setIsStart(false);
    setTimer(count);
  }

  return (
    <div
      style={{
        backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h5 style={{ marginRight: 10 }}>Enter Seconds For Countdown</h5>
      <input
        style={{
          marginRight: 150,
        }}
        type={"number"}
        min="0"
        onChange={handleChange}
        onFocus={resetInput}
      />
      <Countdown
        timer={timer}
        setIsStart={setIsStart}
        pauseTimer={pauseTimer}
        isStart={isStart}
        setTimer={setTimer}
        count={count}
      />
    </div>
  );
}

export default Counter;
