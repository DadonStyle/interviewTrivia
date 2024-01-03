import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const categories = ["React", "Typescript", "Javascript", "Random"];

const Categories = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100svw",
      paddingTop: "50%",
    }}>

      {categories.map((category) => {
        return (
          <Button
            variant="contained"
            onClick={() => console.log("Hello")}
            type="button"
            key={category}
            sx={{
              padding: "0.625rem",
              width: "40%",
              margin: "8px 0"
            }}
          >
            {category}
          </Button>
        );
      })}

    </Box>
  );
};

export default Categories;
