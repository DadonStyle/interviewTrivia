import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OptionList from "./OptionList";
import { Question } from "../../constants/types";
import "./Questionary.scss";

type Questions = {
  questions: Question[];
};

const Questionary = ({ questions }: Questions) => {
  return (
    <>
      {questions.map((question: Question) => (
        <Box key={question.id} sx={{ paddingTop: "20%" }}>
          <Box className="questionary-container">
            <Typography sx={{ color: "#A76AE4" }} variant="h3">
              Question
            </Typography>
            <Typography paragraph>
              {question.description}
            </Typography>
          </Box>
          <OptionList question={question} />
          <Button className="questionary-button" variant="contained">
            next
          </Button>
        </Box>
      ))}
    </>);
};
export default Questionary;
