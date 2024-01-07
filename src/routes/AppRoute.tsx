import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import Background from "../components/Background/Background";
import reactSvg from "/images/react-svg.svg";
import jsSvg from "/images/js-svg.svg";
import tsSvg from "/images/ts-svg.svg";
import quizSvg from "/images/quiz-svg.svg";

interface AppRouteProps {
  children: ReactNode;
}

const AppRoute = ({ children }: AppRouteProps) => {
  const { category } = useParams<string>();
  const handleImg = () => {
    if (category?.toLocaleLowerCase() === "react") return reactSvg;
    if (category?.toLocaleLowerCase() === "javascript") return jsSvg;
    if (category?.toLocaleLowerCase() === "typescript") return tsSvg;
    return quizSvg;
  };

  return <Background imgSrc={handleImg()}>{children}</Background>;
};

export default AppRoute;
