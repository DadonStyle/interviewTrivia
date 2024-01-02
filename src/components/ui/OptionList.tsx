import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { shuffle } from "lodash";
import { Question } from "../../constants/types";

interface OptionListProps {
  question: Question
}

const prepSelection = (question: Question) => {
  const allOptions = [question.answer, ...question.wrongAnswers];
  return shuffle(allOptions);
};

const indexToAlpha = (index: number) => {
  return String.fromCharCode(65 + index);
};

const OptionList = ({ question }: OptionListProps) => {
  const options = prepSelection(question);
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <List>
        {options.map((option: string, index: number) => (
          <ListItem key={crypto.randomUUID()}>
            <Button
              variant="contained"
              sx={{
                padding: "0.625rem",
                backgroundColor: "white",
                color: "black"
              }}
            >
              {`${indexToAlpha(index)}. ${option}`}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OptionList;
