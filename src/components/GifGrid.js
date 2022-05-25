import React from "react"; //Comandos rápidos rafce o rafc
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import { getGifs } from "./helpers/getGifs";

const GifGrid = ({ category }) => {
  // const [images, setimages] = useState([]);
  const { data: images, loading } = useFetchGifs(category); //Custom Hook que permite encapsular el useEffect para no cargar el componente

  /**
   * useEffect permite condicionar el renderizado para que llamadas a API no se ejecuten
   * con cada cambio o evento. Todo lo que se encuentre dentro del useEffect va ser ejecutado dependiendo de
   * ciertas condiciones que se indican en el segundo argumento en un arreglo. En este caso se coloca [] para
   * indicar que no hay dependencias y que solo se ejecute una sola vez
   */
  // useEffect(() => {
  /**
   * A pesar que se devuelve la lista, al ser asyncrono, debemos usar el .then ya que eso confirmará que
   * la petición fue recibida con exito y le mandamos directamente el setimages para que capture esa lista
   * y la actualice
   **/
  //   getGifs(category).then(setimages);
  // }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
