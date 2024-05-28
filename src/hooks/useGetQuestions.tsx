import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuestionType } from "../constants/types";
import { shuffle } from "../utils/util";
import allQuestions from "../constants/questions";

const useGetQuestions = () => {
  const { category } = useParams<string>();
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);

  const getShuffledQuestions = (category: string) => {
    if (category?.toLocaleLowerCase() === "react") return shuffle(allQuestions.react);
    if (category?.toLocaleLowerCase() === "javascript") return shuffle(allQuestions.javascript);
    if (category?.toLocaleLowerCase() === "typescript") return shuffle(allQuestions.typescript);
    return [];
  };

  useEffect(() => {
    if (!category) return;
    const questions = getShuffledQuestions(category);
    setQuestions(questions);
  }, [category]);

  return { questions };
};

export default useGetQuestions;
