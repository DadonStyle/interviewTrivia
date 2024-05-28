import { useEffect, useState } from "react";
import OpenAI from "openai";
import { QuestionType } from "../constants/types";
import { useParams } from "react-router";
import { shuffle } from "../utils/util";
import allQuestions from "../constants/questions";

type allQuestionsOptionType = keyof typeof allQuestions;

const useChatQuestions = () => {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const { category } = useParams();
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    if (question !== null) return;
    callApi();
  }, []);

  const getQuestion = () => {
    callApi();
  };

  const callApi = async () => {
    if (!category) return;
    const reactAdditionalQuery =
      category === "React"
        ? "the questions should not contain class related questions, Question should be relevant from React 18 and above"
        : "";
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an experienced frontend developer, expert in ${category}`,
        },
        {
          role: "user",
          content: `You are an expert ${category} developer, Please provide a ${category} related question, the question will be an american question with 4 possible answers that you will provide, ${reactAdditionalQuery}, please make sure that the answers are approximately at the same length, return the answer in a json format, the json should contain the following keys: id: string, description: string, category: string, answer: string, wrongAnswers: string[], make sure you are returning a valid json file only and no other characters that are unrelated to the json, do not return any high ticks or mention the word "json", double check that the answer that sent back by you can be parsed into a Json by using JSON.parse in js`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(reactAdditionalQuery);
    let nextQuestion = JSON.parse(completion.choices[0].message.content!);
    if (!nextQuestion) {
      nextQuestion = shuffle(allQuestions[category as allQuestionsOptionType]);
    }
    console.log(nextQuestion);
    setQuestion(nextQuestion);
    return nextQuestion;
  };

  return { question, getQuestion };
};

export default useChatQuestions;
