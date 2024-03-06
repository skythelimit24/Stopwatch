import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div>
        <Grid container sx={{justifyContent:"center",alignItems:"center"}}>
      <h1>{formatTime(time)}</h1>
      </Grid>
      <Grid container sx={{width:'250px',justifyContent:"space-between"}} >
      <Button onClick={handleStartStop} variant="contained">
        {isRunning ? "Stop" : "Start"}
      </Button>
      <Button onClick={handleReset} variant="contained">
        Reset
      </Button>
      </Grid>
    </div>
  );
};


export default Stopwatch;
