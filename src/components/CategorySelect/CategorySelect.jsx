const CategorySelect = ({
  categories,
  handleChange,
  value,
  name,
  mainColor,
  id,
  toUpdate = false,
}) => {
  return (
    <div className="control ">
      <div className={`select is-${mainColor} is-fullwidth`}>
        <select
          onChange={handleChange}
          value={value}
          name={name}
          id={id}
          disabled={toUpdate}
        >
          <option value="" disabled hidden>
            Select category
          </option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySelect;
