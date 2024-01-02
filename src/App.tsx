import "./App.css";

import Questionary from "./components/ui/Questionary";
import { Question } from "./constants/types";
import questions from "./constants/questions.json";
import Background from "./components/Background/Background";

const App = () => {
  const data: Question[] = questions;
  return (
    <Background>
      <Questionary questions={data} />
    </Background>
  );
};

export default App;
