/**
 * Los hooks customizados o creados se recomienda que tengan el nombre con el prefijo "use" al inicio
 */
import { useState, useEffect } from "react";
import { getGifs } from "../components/helpers/getGifs";

/**
 *Esto no es un Functional Component, por lo que el envío de la category es un atributo
 **/
export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; // { data: [], loading: true}
};
