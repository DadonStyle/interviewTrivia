import { shuffle } from "lodash";
import { v4 as uuid } from "uuid";
import { Question } from "../../constants/types";

const prepSelection = (question: Question) => {
  const allOptions = [question.answer, ...question.wrongAnswers];
  return shuffle(allOptions);
};

interface OptionListProps {
  question: Question
}

const OptionList = ({ question }: OptionListProps) => {
  const options = prepSelection(question);
  return (
    <ol type="A">
      {options.map((option: string) => (
        <li key={uuid()}>{option}</li>
      ))}
    </ol>
  );
};

export default OptionList;
