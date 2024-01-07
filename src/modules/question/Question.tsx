import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { QuestionType } from "../../constants/types";
import "../questionary/Questionary.scss";

import { indexToAlpha, prepSelection } from "../../utils/util";

interface QuestionPropTypes {
  question: QuestionType;
  onOptionSelect: (selectedOption: string) => void;
}

const Question = ({ question, onOptionSelect }: QuestionPropTypes) => {
  const options = prepSelection(question);
  return (
    <Box>
      <Typography paragraph>
        {question.description}
      </Typography>
      <Box className="option-list-container">
        <List>
          {options.map((option: string, index: number) =>
            <ListItem key={crypto.randomUUID()}>
              <Button
                className="option-list-button"
                variant="contained"
                onClick={() => onOptionSelect(option)}
              >
                {`${indexToAlpha(index)}. ${option}`}
              </Button>
            </ListItem>
          )}
        </List>
      </Box>
    </Box>
  );
};
export default Question;
