const categories = ["React", "Typescript", "Javascript", "Random"];

const Categories = () => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <ul>
            <li>
              <button key={category}>{category}</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Categories;
