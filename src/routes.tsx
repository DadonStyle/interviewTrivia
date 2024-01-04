import { Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import Questionary from "./components/ui/Questionary";
import Categories from "./components/ui/Categories";
import questions from "./constants/questions.json";
import { Question } from "./constants/types";

const AppRoutes = () => {
  const data: Question[] = questions;
  return (
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
  );
};

export default AppRoutes;
