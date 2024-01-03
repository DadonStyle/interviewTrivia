import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Background from "../Background/Background";

const categories = ["React", "Typescript", "Javascript", "Random"];

const Categories = () => {
  return (
    <Background>
      <Box>
        {categories.map((category) => {
          return (
            <Button
              variant="contained"
              onClick={() => console.log("Hello")}
              type="button"
              key={category}
            >
              {category}
            </Button>
          );
        })}
      </Box>
    </Background>
  );
};

export default Categories;
