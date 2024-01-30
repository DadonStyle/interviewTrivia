import { Dispatch, SetStateAction, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, Button, Typography } from "@mui/material";
import OptionButton from "../../components/OptionButton/OptionButton";
import { QuestionType } from "../../constants/types";
import { prepSelection } from "../../utils/util";
import "./QuestionsHandler.scss";

interface QuestionsHandlerProps {
  questions: QuestionType[];
  setStreak: Dispatch<SetStateAction<number>>;
}

const QuestionsHandler = ({ questions, setStreak }: QuestionsHandlerProps) => {
  const [options, setOptions] = useState(prepSelection(questions[0]));
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isAnySelected, setIsAnySelected] = useState<boolean>(false);

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
      setStreak((prev: number) => prev + 1);
      return;
    }
    setStreak(0);
  };

  return (
    <Box className="question-handler-container">
      <Box className="question-header">
        <Typography variant="h3">Question</Typography>
        <Typography paragraph>{questions[questionIndex].description}</Typography>
      </Box>
      <List className="option-list">
        {options.map((option: string, index: number) => (
          <ListItem className="option-list-item" key={option}>
            <OptionButton
              onClick={handleOptionSelection(option)}
              text={option}
              index={index}
              isCorrectAnswer={option === questions[questionIndex].answer}
              isAnySelected={isAnySelected}
            />
          </ListItem>
        ))}
      </List>
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
export default QuestionsHandler;
