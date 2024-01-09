import { Routes, Route } from "react-router-dom";
import Questionary from "../modules/questionary/Questionary";
import Categories from "../modules/category/Categories";
import AppRoute from "./AppRoute";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <AppRoute>
          <Categories />
        </AppRoute>
      }
    />
    <Route
      path="/:category"
      element={
        <AppRoute>
          <Questionary />
        </AppRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
