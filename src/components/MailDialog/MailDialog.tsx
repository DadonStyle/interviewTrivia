import { Box, Button, Dialog, InputLabel, Link, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-dom";
import "./MailDialog.scss";

const MailDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [body, setBody] = useState<string>("");
  const [bodyDebounced] = useDebounce(body, 1_000);
  const navigate = useNavigate();

  const subject = "I want to suggest a new question!";

  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const handleOnChange =
    (cb: (item: string) => void) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      cb(e.target.value);
    };
  const onBackClick = () => navigate("/");

  return (
    <Box className="mail-container">
      <Button className="back-button" onClick={onBackClick}>
        Back
      </Button>
      <Button className="mail-open-button" onClick={toggleIsOpen}>
        Suggest a question
      </Button>
      <Dialog className="mail-dialog-container" maxWidth="lg" open={isOpen} onClose={toggleIsOpen}>
        <Box className="mail-dialog-inner-container">
          <Box>
            <Typography className="mail-dialog-big-header" variant="h1">
              Suggest A Question
            </Typography>
            <Typography className="mail-dialog-small-header" variant="h3">
              Appreciate you taking an interest in this
            </Typography>
          </Box>
          <Box className="mail-dialog-textarea-container">
            <InputLabel>Email body:</InputLabel>
            <TextareaAutosize
              className="mail-dialog-textarea"
              minRows={6}
              onChange={handleOnChange(setBody)}
            />
          </Box>
          <Link
            className="mail-dialog-send-btn"
            href={`mailto:noamoni9@gmail.com?subject=${subject}&body=${bodyDebounced}`}
          >
            Send mail
          </Link>
        </Box>
      </Dialog>
    </Box>
  );
};

export default MailDialog;
