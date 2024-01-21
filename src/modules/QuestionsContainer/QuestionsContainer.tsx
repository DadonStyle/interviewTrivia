import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import QuestionsHandler from "../QuestionsHandler/QuestionsHandler";
import Streak from "../../components/Streak/Streak";
import MailDialog from "../../components/MailDialog/MailDialog";
import useGetQuestions from "../../hooks/useGetQuestions";
import "./QuestionsContainer.scss";

const QuestionsContainer = () => {
  const [streak, setStreak] = useState<number>(0);
  const navigate = useNavigate();
  const { questions } = useGetQuestions();
  const onBackClick = () => navigate("/");

  return (
    <Box className="question-section">
      <Box className="question-top-section">
        <Button className="back-button" onClick={onBackClick}>
          Back
        </Button>
        <MailDialog />
        <Streak streak={streak} />
      </Box>
      <Box className="question-bottom-section">
        {questions && <QuestionsHandler questions={questions} setStreak={setStreak} />}
      </Box>
    </Box>
  );
};

export default QuestionsContainer;
