import "./index.scss";

const InputSearch = ({ name, value, onChange, placeholder }) => {
  return (
    <div className="input-search">
      <label htmlFor={name}>
        <ion-icon name="search-outline"></ion-icon>
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputSearch;
