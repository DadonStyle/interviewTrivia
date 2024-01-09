import { useState } from "react";
import { Button } from "@mui/material";
import { indexToAlpha } from "../../utils/util";
import "./OptionButton.scss";

interface OptionButtonProps {
  text: string;
  onClick: (item?: any) => void;
  index: number;
  isCorrectAnswer: boolean;
  isAnySelected: boolean;
}

const OptionButton = ({
  onClick,
  text,
  index,
  isCorrectAnswer,
  isAnySelected,
}: OptionButtonProps) => {
  const [clicked, setClicked] = useState(false);
  const handleOnClick = () => {
    setClicked(true);
    onClick();
  };

  return (
    <Button
      className={`option-list-button ${isAnySelected ? "selected" : ""}  ${
        isCorrectAnswer ? "correct" : "wrong"
      } ${clicked ? "clicked" : ""}`}
      variant="contained"
      color="secondary"
      onClick={handleOnClick}
      startIcon={`${indexToAlpha(index)}.`}
    >
      {text}
    </Button>
  );
};

export default OptionButton;
