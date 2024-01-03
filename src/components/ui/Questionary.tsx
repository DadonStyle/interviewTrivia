import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import OptionList from "./OptionList";
import { Question } from "../../constants/types";

type Questions = {
  questions: Question[];
};

const Questionary = ({ questions }: Questions) => {
  // TODO: convert styles to theme
  // TODO: move inline style to sass
  return (
    <>
      {questions.map((question: Question) => (
        <Box key={question.id} sx={{ paddingTop: "20%" }}>
          <Box sx={{
            padding: "0 1.25rem",
            backgroundColor: "white",
            color: "black",
            borderRadius: "1.25rem",
            margin: "0 3.125rem",
          }}>
            <Typography sx={{ color: "#A76AE4" }} variant="h3">
              Question
            </Typography>
            <Typography paragraph sx={{ padding: "0.3125rem 0.625rem" }}>
              {question.description}
            </Typography>
          </Box>
          <OptionList question={question} />
          <Button
            variant="contained"
            sx={{
              borderRadius: "3.125rem",
              padding: "0.5rem 2.5rem",
              backgroundColor: "#A76AE4",
            }}
          >
            next
          </Button>
        </Box>
      ))}
    </>);
};
export default Questionary;
