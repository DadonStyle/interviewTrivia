import OptionList from "./OptionList";
import { Question } from "../../constants/types";

type Questions = {
  questions: Question[];
};

const Questionary = ({ questions }: Questions) => {
  return (
    <div>
      {questions.map((question: Question) => (
        <div key={question.id}>
          <main>
            <header>Question</header>
            <p>{question.description}</p>
          </main>
          <OptionList question={question} />
        </div>
      ))}
    </div>);
};
export default Questionary;
