import { useParams } from "react-router-dom";
import { QuestionType } from "../constants/types";
import allQuestions from "../constants/questions";

export const randomVal = (maxVal: number) => Math.floor(Math.random() * maxVal);
export const randomIndex = (array: any) => randomVal(array.length);
export const indexToAlpha = (index: number) => String.fromCharCode(65 + index);
export const shuffle = (array: any) => array.sort(() => Math.random() - 0.5);
export const getQuestions = () => {
  const { category } = useParams<string>();
  if (category?.toLocaleLowerCase() === "react") return allQuestions.react;
  if (category?.toLocaleLowerCase() === "javascript") return allQuestions.typescript;
  if (category?.toLocaleLowerCase() === "typescript") return allQuestions.javascript;
  return [];
};

export const prepSelection = (question: QuestionType) => {
  const allOptions = [question.answer, ...question.wrongAnswers];
  return shuffle(allOptions);
};
