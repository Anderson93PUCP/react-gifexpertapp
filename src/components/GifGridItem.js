import React from "react";

/**
 * Como el class es una palabra reservada del javascript por eso se usa
 * el className, el cual es utilizado para identificar los nombres de estilo
 */
const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img alt={title} src={url} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
