import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./Question.scss";

import { indexToAlpha } from "../../utils/util";

interface QuestionPropTypes {
  options: string[];
  correctAnswer: string;
  setIsSelected: (item: boolean) => void;
}

const Question = ({ options, correctAnswer, setIsSelected }: QuestionPropTypes) => {
  const handleOptionSelection = (option: string) => {
    setIsSelected(true);
    if (option === correctAnswer) {
      console.log("correct answer");
      return;
    }
    console.log("wrong answer");
  };

  return (
    <Box className="option-list-container">
      <List>
        {options.map((option: string, index: number) =>
          <ListItem key={crypto.randomUUID()}>
            <Button
              sx={{
                "&.Mui-hovered": {
                  boxShadow: "0px 0px 15px 0px #7188D8",
                },
                "&.Mui-selected": {
                  background: "#7188D8",
                  borderRadius: "0.875rem",
                }
              }}
              className={`option-list-button ${option === correctAnswer ? "success" : "wrong"}`}
              variant="contained"
              onClick={() => handleOptionSelection(option)}
            >
              {`${indexToAlpha(index)}. ${option.toLocaleLowerCase()}`}
            </Button>
          </ListItem>
        )}
      </List>
    </Box>
  );
};
export default Question;
