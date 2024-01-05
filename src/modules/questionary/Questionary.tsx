import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../contexts/ScoreContext";
import { getQuestions, randomIndex } from "../../utils/util";

import Question from "../question/Question";
import "./Questionary.scss";
import { QuestionType } from "../../constants/types";

const Questionary = () => {
  const questions = getQuestions();
  const index = randomIndex(questions);
  const navigate = useNavigate();
  const { score, setScore } = useScore();
  const [cache, setCache] = useState<number[]>([index]);
  const [randomQuestion, setRandomQuestion] = useState<QuestionType>(
    questions[index]
  );

  const onOptionSelect = (selectedOption: string) => {
    if (cache.length >= questions.length) {
      navigate("/review");
    }

    let index;
    do {
      index = randomIndex(questions);
    } while (cache.includes(index) && cache.length < questions.length);

    if (randomQuestion.answer === selectedOption) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }

    setCache([...cache, index]);
    setRandomQuestion(questions[index]);
  };

  return (
    <Box className="questionary-container">
      <Typography sx={{ color: "#A76AE4" }} variant="h3">
        Question
      </Typography>
      <Typography paragraph>
        Score: {score}
      </Typography>
      <Question question={randomQuestion} onOptionSelect={onOptionSelect} />
    </Box>);
};

export default Questionary;
