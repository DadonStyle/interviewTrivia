import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../contexts/ScoreContext";
import { getShuffledQuestions } from "../../utils/util";

import Question from "../question/Question";
import "./Questionary.scss";
import { QuestionType } from "../../constants/types";

const QuestionaryContainer = () => {
  const questions = getShuffledQuestions();
  return <Questionary questions={questions} />;
};

interface QuestionaryProps {
  questions: QuestionType[];
}

const Questionary = ({ questions }: QuestionaryProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const { score, setScore } = useScore();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const onOptionSelect = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    if (questionIndex > questions.length) navigate("/review");

    if (questions[questionIndex].answer === selectedOption) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }

    setSelectedOption("");
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Box className="questionary-container">
      <Typography sx={{ color: "#A76AE4" }} variant="h3">
        Question
      </Typography>
      <Typography paragraph>
        Score: {score}
      </Typography>
      <Question question={questions[questionIndex]} onOptionSelect={onOptionSelect} />
      <Button type="submit" onClick={handleSubmit}>Next</Button>
    </Box>);
};

export default QuestionaryContainer;
