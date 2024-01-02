import { Button, Box } from "@mui/material";

const categories = ["React", "Typescript", "Javascript", "Random"];

const Categories = () => {
  return (
    <Box>
      {categories.map((category) => {
        return (
          <Button variant="contained" onClick={() => console.log("Hello")} type="button" key={category}>{category}</Button>
        );
      })}
    </Box>
  );
};

export default Categories;
