import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
