import "./App.css";

import Questionary from "./components/ui/Questionary";
import { Question } from "./constants/types";
import questions from "./constants/questions.json";

const App = () => {
  const data: Question[] = questions;
  return (
    <div>
      <Questionary questions={data} />
    </div>
  );
};

export default App;
