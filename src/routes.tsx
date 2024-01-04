import { Routes, Route } from "react-router-dom";
import Questionary from "./components/ui/Questionary";
import Categories from "./components/ui/Categories";
import questions from "./constants/questions.json";
import { Question } from "./constants/types";

const AppRoutes = () => {
  const data: Question[] = questions;
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/qa" element={<Questionary questions={data} />} />
    </Routes>
  );
};

export default AppRoutes;
