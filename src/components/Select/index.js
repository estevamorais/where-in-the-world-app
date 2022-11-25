import "./index.scss";

const Select = ({ name, value, onChange, options }) => {
  return (
    <div className="select">
      <select name={name} id={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
