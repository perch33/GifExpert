import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [category, setCategory] = useState(["guitarra"]);

  const onAddCategory = (newCategory) => {
    if (category.includes(newCategory)) return;

    setCategory([newCategory, ...category]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {category.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GifExpertApp;
