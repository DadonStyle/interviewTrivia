import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../contexts/ScoreContext";
import useTimeout from "../../hooks/useTimeout";

const Review = () => {
  const navigate = useNavigate();
  const { score } = useScore();

  const handleNavigate = () => {
    navigate("/");
  };

  useTimeout(1, handleNavigate);

  return (
    <Box>
      <Typography variant="h1">{score}</Typography>
    </Box>
  );
};

export default Review;
