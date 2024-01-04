import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Background from "./components/Background/Background";
import Questionary from "./components/ui/Questionary";
import Categories from "./components/ui/Categories";

import questions from "./constants/questions.json";
import { Question } from "./constants/types";

const App = () => {
  const data: Question[] = questions;

  return (
    <Background imgSrc="https://picsum.photos/200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/qa" element={<Questionary questions={data} />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
};

export default App;
