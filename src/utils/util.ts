import { useParams } from "react-router-dom";
import allQuestions from "../constants/questions";
import { QuestionType } from "../constants/types";

export const randomVal = (maxVal: number) => Math.floor((Math.random() * maxVal));
export const randomIndex = (array: any) => randomVal(array.length);
export const indexToAlpha = (index: number) => String.fromCharCode(65 + index);
export const shuffle = (array: any) => array.sort(() => Math.random() - 0.5);
export const getQuestions = () => {
  const { category } = useParams<string>();
  switch (category) {
    case "react":
      return allQuestions.react;
    case "typescript":
      return allQuestions.typescript;
    case "javascript":
      return allQuestions.javascript;
    default:
      return [];
  }
};

export const prepSelection = (question: QuestionType) => {
  const allOptions = [question.answer, ...question.wrongAnswers];
  return shuffle(allOptions);
};
