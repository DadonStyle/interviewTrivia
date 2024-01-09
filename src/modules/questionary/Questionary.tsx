import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { getShuffledQuestions, prepSelection } from "../../utils/util";
import Question from "../question/Question";
import { QuestionType } from "../../constants/types";
import Streak from "../../components/Streak/Streak";
import "./Questionary.scss";

const QuestionaryContainer = () => {
  const questions = getShuffledQuestions();
  return <Questionary questions={questions} />;
};

interface QuestionaryProps {
  questions: QuestionType[];
}

const Questionary = ({ questions }: QuestionaryProps) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isAnySelected, setIsAnySelected] = useState<boolean>(false);
  const [options, setOptions] = useState(prepSelection(questions[0]));
  const [streak, setStreak] = useState<number>(0);

  const handleNextQuestion = () => {
    setIsAnySelected(false);
    setQuestionIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > questions.length - 1) newIndex -= questions.length;
      setOptions(prepSelection(questions[newIndex]));
      return newIndex;
    });
  };

  const handleOptionSelection = (option: string) => () => {
    setIsAnySelected(true);
    if (option === questions[questionIndex].answer) {
      setStreak((prev) => prev + 1);
      return;
    }
    setStreak(0);
  };

  return (
    <Box className="question-section">
      <Box>
        <Streak streak={streak} />
      </Box>
      <Box className="question-header">
        <Typography variant="h3">Question</Typography>
        <Typography paragraph>{questions[questionIndex].description}</Typography>
      </Box>
      <Question
        options={options}
        correctAnswer={questions[questionIndex].answer}
        handleOnClick={handleOptionSelection}
        isAnySelected={isAnySelected}
      />
      <Button
        className="submit-button"
        type="submit"
        variant="contained"
        disabled={!isAnySelected}
        onClick={handleNextQuestion}
      >
        Next
      </Button>
    </Box>
  );
};

export default QuestionaryContainer;
