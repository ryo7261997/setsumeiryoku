import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  timer: {
    margin: theme.spacing(2),
    fontSize: "2rem",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Timer = ({ timer, startTimer }) => {
  const classes = useStyles();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={startTimer}
      >
        開始
      </Button>
      <Typography className={classes.timer}>{formatTime(timer)}</Typography>
    </>
  );
};

export default Timer;
