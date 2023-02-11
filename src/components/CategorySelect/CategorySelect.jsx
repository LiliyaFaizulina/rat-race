const CategorySelect = ({ categories, handleChange, value, name }) => {
  return (
    <select onChange={handleChange} value={value} name={name}>
      <option value="" disabled hidden>
        Select category
      </option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
