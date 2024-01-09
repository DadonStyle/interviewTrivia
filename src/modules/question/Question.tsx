import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import OptionButton from "../../components/OptionButton/OptionButton";
import "./Question.scss";

interface QuestionPropTypes {
  options: string[];
  correctAnswer: string;
  handleOnClick: (option: string) => () => void;
  isAnySelected: boolean;
}

const Question = ({ options, correctAnswer, handleOnClick, isAnySelected }: QuestionPropTypes) => {
  return (
    <List className="option-list">
      {options.map((option: string, index: number) => (
        <ListItem className="option-list-item" key={option}>
          <OptionButton
            onClick={handleOnClick(option)}
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
