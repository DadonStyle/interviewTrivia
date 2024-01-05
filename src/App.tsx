import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Background from "./components/Background/Background";
import "./App.css";

const App = () => {
  return (
    <Background imgSrc="https://picsum.photos/200">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Background>
  );
};

export default App;
