import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import QuestionsHandler from "../QuestionsHandler/QuestionsHandler";
import Streak from "../../components/Streak/Streak";
import MailDialog from "../../components/MailDialog/MailDialog";
import useChatQuestions from "../../hooks/useChatQuestions";
import { CircularProgress } from "@mui/material";
import "./QuestionsContainer.scss";

const QuestionsContainer = () => {
  const [streak, setStreak] = useState<number>(0);
  const { question, getQuestion, isFetching } = useChatQuestions();
  const navigate = useNavigate();
  const handleToHomePage = () => navigate("/");

  if (!question && !isFetching) {
    return <>Error</>;
  }

  return (
    <Box className="question-section">
      <Box className="question-top-section">
        <Box className="question-top-left-buttons">
          <Button className="back-button" onClick={handleToHomePage}>
            Back
          </Button>
          <MailDialog />
        </Box>
        <Streak streak={streak} />
      </Box>
      <Box className="question-bottom-section">
        {isFetching ? (
          <Box sx={{ height: "480px" }}>
            <CircularProgress size={80} color="primary" />
          </Box>
        ) : (
          <>
            {question && (
              <QuestionsHandler
                question={question}
                setStreak={setStreak}
                nextQuestion={getQuestion}
              />
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default QuestionsContainer;
