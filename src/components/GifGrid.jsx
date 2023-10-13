import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h2>cargando</h2>}
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
