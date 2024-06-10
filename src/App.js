import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Prompt from "./components/Prompt";
import Timer from "./components/Timer";
import PrepForm from "./components/PrepForm";
import NextButton from "./components/NextButton";
import prompts from "./prompts"; // 日本語のお題をインポート

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#e6ffe6",
    borderRadius: "8px",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
}));

function App() {
  const classes = useStyles();
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [usedPrompts, setUsedPrompts] = useState([]);
  const [timer, setTimer] = useState(300); // 5分 = 300秒
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [prepContent, setPrepContent] = useState({
    point: "",
    reason: "",
    example: "",
    restatePoint: "",
  });

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimerRunning]);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const nextPrompt = () => {
    let availablePrompts = prompts.filter(
      (prompt) => !usedPrompts.includes(prompt)
    );
    if (availablePrompts.length === 0) {
      setUsedPrompts([]);
      availablePrompts = prompts;
    }
    const randomPrompt =
      availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
    setCurrentPrompt(randomPrompt);
    setUsedPrompts((prev) => [...prev, randomPrompt]);
    setTimer(300); // タイマーをリセット
    setIsTimerRunning(false);
    setPrepContent({
      point: "",
      reason: "",
      example: "",
      restatePoint: "",
    });
  };

  useEffect(() => {
    nextPrompt();
  }, []);

  return (
    <Container className={classes.container}>
      <Prompt currentPrompt={currentPrompt} />
      <Timer timer={timer} startTimer={startTimer} />
      <PrepForm prepContent={prepContent} setPrepContent={setPrepContent} />
      <NextButton nextPrompt={nextPrompt} />
    </Container>
  );
}

export default App;
