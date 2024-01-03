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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Background>
              <Categories />
            </Background>
          }
        />
        <Route
          path="/qa"
          element={
            <Background>
              <Questionary questions={data} />
            </Background>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
