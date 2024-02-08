import { Routes, Route } from "react-router-dom";
import Categories from "../modules/category/Categories";
import QuestionsContainer from "../modules/QuestionsContainer/QuestionsContainer";
import TriviaRoute from "./TriviaRoute";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <TriviaRoute>
          <Categories />
        </TriviaRoute>
      }
    />
    <Route
      path="/:category"
      element={
        <TriviaRoute>
          <QuestionsContainer />
        </TriviaRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
