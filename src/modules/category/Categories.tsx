import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { randomVal } from "../../utils/util";
import "./Categories.scss";
import { useScore } from "../../contexts/ScoreContext";

const categories: string[] = ["React", "Typescript", "Javascript", "Random"];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const { setScore } = useScore();

  useEffect(() => {
    setScore(0);
    navigate(selectedCategory.toLowerCase());
  }, [selectedCategory, setScore, navigate]);

  const handleOnCategoryClick = (category: string) => () => {
    if (category === "Random") {
      setSelectedCategory(categories[randomVal(categories.length - 1)]);
      return;
    }
    setSelectedCategory(category);
  };

  return (
    <Box className="category-container">
      {categories.map((category) =>
        <Button
          className="category-button"
          variant="contained"
          onClick={handleOnCategoryClick(category)}
          type="button"
          key={category}
        >
          {category}
        </Button>
      )}
    </Box>
  );
};

export default Categories;
