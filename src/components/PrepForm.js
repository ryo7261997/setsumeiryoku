import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: theme.spacing(2),
    width: "100%",
  },
}));

const PrepForm = ({ prepContent, setPrepContent }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrepContent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <TextField
        name="point"
        label="Point（主張）"
        variant="outlined"
        multiline
        className={classes.textField}
        value={prepContent.point}
        onChange={handleChange}
        placeholder="主張を入力してください"
      />
      <TextField
        name="reason"
        label="Reason（理由）"
        variant="outlined"
        multiline
        className={classes.textField}
        value={prepContent.reason}
        onChange={handleChange}
        placeholder="理由を入力してください"
      />
      <TextField
        name="example"
        label="Example（例）"
        variant="outlined"
        multiline
        className={classes.textField}
        value={prepContent.example}
        onChange={handleChange}
        placeholder="例を入力してください"
      />
      <TextField
        name="restatePoint"
        label="Point（再主張）"
        variant="outlined"
        multiline
        className={classes.textField}
        value={prepContent.restatePoint}
        onChange={handleChange}
        placeholder="再主張を入力してください"
      />
    </>
  );
};

export default PrepForm;
