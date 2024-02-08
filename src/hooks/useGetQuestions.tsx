import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuestionType } from "../constants/types";
import { getShuffledQuestions } from "../utils/util";

const useGetQuestions = () => {
  const { category } = useParams<string>();
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);

  useEffect(() => {
    if (!category) return;
    const questions = getShuffledQuestions(category);
    setQuestions(questions);
  }, [category]);

  return { questions };
};

export default useGetQuestions;
