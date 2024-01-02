import _ from "lodash";
import { v4 as uuid } from "uuid";

import { Question } from "../../constants/questions";

const prepSelection = (question: Question) => {
  const allOptions = [question.answer, ...question.wrongAnswers];
  return _.shuffle(allOptions);
};

const OptionList: React.FC<{ question: Question }> = ({ question }) => {
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
