import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../contexts/ScoreContext";

const Review = () => {
  const navigate = useNavigate();
  const { score, setScore } = useScore();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [setScore, navigate]);

  return (
    <Box>
      <Typography variant="h1">{score}</Typography>
    </Box>
  );
};

export default Review;
