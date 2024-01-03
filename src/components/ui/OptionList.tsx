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
  // TODO: convert styles to theme
  // TODO: move inline style to sass
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <List>
        {options.map((option: string, index: number) => (
          // TODO: add style to '.Mui-selected to ListItem'
          <ListItem key={crypto.randomUUID()}>
            <Button
              variant="contained"
              sx={{
                padding: "0.625rem",
                backgroundColor: "white",
                color: "black",
                ":hover": { backgroundColor: "#A25AE0", color: "white" },
                ":active": {
                  boxShadow: "0px 5px 5px 3px #A25AE0, 0px 8px 10px 1px #E5A2B1, 0px 3px 14px 2px #D4A1B0",
                },
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
