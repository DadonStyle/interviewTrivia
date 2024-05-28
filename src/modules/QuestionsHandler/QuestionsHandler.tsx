import { Dispatch, SetStateAction, useMemo, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, Button, Typography } from "@mui/material";
import OptionButton from "../../components/OptionButton/OptionButton";
import { QuestionType } from "../../constants/types";
import { shuffle } from "../../utils/util";
import "./QuestionsHandler.scss";

interface QuestionsHandlerProps {
  question: QuestionType;
  setStreak: Dispatch<SetStateAction<number>>;
  nextQuestion: () => void;
}

const prepSelection = (question: QuestionType) => {
  const allOptions = [question.answer, ...question.wrongAnswers];
  return shuffle(allOptions);
};

const QuestionsHandler = ({ question, setStreak, nextQuestion }: QuestionsHandlerProps) => {
  const [isAnySelected, setIsAnySelected] = useState<boolean>(false);

  const handleNextQuestion = () => {
    setIsAnySelected(false);
    nextQuestion();
  };

  const memoOptions = useMemo(() => prepSelection(question), [question]);

  const handleOptionSelection = (option: string) => () => {
    setIsAnySelected(true);
    if (option === question.answer) {
      setStreak((prev: number) => prev + 1);
      return;
    }
    setStreak(0);
  };

  return (
    <Box className="question-handler-container">
      <Box className="question-header">
        <Typography variant="h3">Question</Typography>
        <Typography paragraph>{question.description}</Typography>
      </Box>
      <List className="option-list">
        {memoOptions.map((option: string, index: number) => (
          <ListItem className="option-list-item" key={option}>
            <OptionButton
              onClick={handleOptionSelection(option)}
              text={option}
              index={index}
              isCorrectAnswer={option === question.answer}
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
