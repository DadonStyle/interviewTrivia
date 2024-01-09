import { Box, Button, Dialog, Input, InputLabel, Link } from "@mui/material";
import { useState } from "react";
import "./MailDialog.scss";

const MailDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleOnChange = (cb: (item: string) => void) => (e: any) => {
    console.log(e.target.value);
  };

  return (
    <Box className="mail-container">
      <Button className="mail-open-button" onClick={toggleIsOpen}>
        Suggest a question
      </Button>
      <Dialog className="mail-dialog" maxWidth="lg" open={isOpen} onClose={toggleIsOpen}>
        <Box>
          <Box>
            <InputLabel>Subject</InputLabel>
            <Input onChange={handleOnChange(setSubject)} />
          </Box>
          <Box>
            <InputLabel>Body</InputLabel>
            <Input onChange={handleOnChange(setBody)} />
          </Box>
          <Link href={`mailto:noamoni9@gmail.com?subject=${subject}&body=${body}`} />
        </Box>
      </Dialog>
    </Box>
  );
};

export default MailDialog;
