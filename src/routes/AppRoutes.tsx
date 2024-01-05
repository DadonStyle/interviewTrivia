import { Routes, Route } from "react-router-dom";
import Questionary from "../modules/questionary/Questionary";
import Categories from "../modules/category/Categories";
import Review from "../modules/review/Review";
import { ScoreProvider } from "../contexts/ScoreContext";

const AppRoutes = () => {
  return (
    <ScoreProvider>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:category" element={<Questionary />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </ScoreProvider>
  );
};

export default AppRoutes;
