import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
