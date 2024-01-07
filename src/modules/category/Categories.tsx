import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { randomVal } from "../../utils/util";
import "./Categories.scss";

const categories: string[] = ["React", "Typescript", "Javascript", "Random"];

const Categories = () => {
  const navigate = useNavigate();

  const handleOnCategoryClick = (category: string) => () => {
    if (category === "Random") {
      navigate(categories[randomVal(categories.length - 1)]);
      return;
    }
    navigate(category);
  };

  return (
    <Box className="category-container">
      {categories.map((category) => (
        <Button
          className="category-button"
          variant="contained"
          onClick={handleOnCategoryClick(category)}
          type="button"
          key={category}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default Categories;
