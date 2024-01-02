import { Question } from "../../constants/questions";
import OptionList from "./OptionList";

type Questions = {
  questions: Question[];
};

const Questionary: React.FC<Questions> = ({ questions }: Questions) => {
  return (
    <div>
      {questions.map((question: Question) => (
        <div key={question.id}>
          <img src={`path/to/images/${question.category}`} alt={`${question.category}`} />
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
