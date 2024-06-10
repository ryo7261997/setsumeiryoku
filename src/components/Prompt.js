import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  prompt: {
    margin: theme.spacing(2),
    fontSize: "1.5rem",
    textAlign: "center",
  },
}));

const Prompt = ({ currentPrompt }) => {
  const classes = useStyles();
  return <Typography className={classes.prompt}>{currentPrompt}</Typography>;
};

export default Prompt;
