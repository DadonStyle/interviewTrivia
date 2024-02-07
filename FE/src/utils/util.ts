import { QuestionType } from "../constants/types";
import allQuestions from "../constants/questions";

const asciiCapitalConverter = 65;

export const randomVal = (maxVal: number) => Math.floor(Math.random() * maxVal);
export const randomIndex = (array: any) => randomVal(array.length);
export const indexToAlpha = (index: number) => String.fromCharCode(asciiCapitalConverter + index);
export const shuffle: any = (array: any) => array.sort(() => Math.random() - 0.5);

export const getShuffledQuestions = (category: string) => {
  if (category?.toLocaleLowerCase() === "react") return shuffle(allQuestions.react);
  if (category?.toLocaleLowerCase() === "javascript") return shuffle(allQuestions.javascript);
  if (category?.toLocaleLowerCase() === "typescript") return shuffle(allQuestions.typescript);
  return [];
};

export const prepSelection = (question: QuestionType) => {
  const allOptions = [question.answer, ...question.wrongAnswers];
  return shuffle(allOptions);
};
