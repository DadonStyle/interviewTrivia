import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import OptionButton from "../../components/OptionButton/OptionButton";
import "./Question.scss";

interface QuestionPropTypes {
  options: string[];
  correctAnswer: string;
  setIsAnySelected: (item: boolean) => void;
  isAnySelected: boolean;
}

const Question = ({
  options,
  correctAnswer,
  setIsAnySelected,
  isAnySelected,
}: QuestionPropTypes) => {
  const handleOptionSelection = (option: string) => () => {
    setIsAnySelected(true);
    if (option === correctAnswer) {
      console.log("correct answer");
      return;
    }
    console.log("wrong answer");
  };

  return (
    <List className="option-list">
      {options.map((option: string, index: number) => (
        <ListItem className="option-list-item" key={option}>
          <OptionButton
            onClick={handleOptionSelection(option)}
            text={option}
            index={index}
            isCorrectAnswer={option === correctAnswer}
            isAnySelected={isAnySelected}
          />
        </ListItem>
      ))}
    </List>
  );
};
export default Question;
