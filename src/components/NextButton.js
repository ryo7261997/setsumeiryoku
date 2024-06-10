import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const NextButton = ({ nextPrompt }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={nextPrompt}
    >
      次へ
    </Button>
  );
};

export default NextButton;
