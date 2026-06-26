const categories = [
  "All",
  "Nature",
  "Travel",
  "Urban",
];

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="filter-container">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;