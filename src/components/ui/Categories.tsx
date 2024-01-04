import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Categories.scss";

const categories = ["React", "Typescript", "Javascript", "Random"];

const Categories = () => {
  return (
    <Box className="category-container">
      {categories.map((category) => {
        return (
          <Button
            className="category-button"
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
  );
};

export default Categories;
