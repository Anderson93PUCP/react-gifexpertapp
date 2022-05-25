/**
 * Creamos un folder nuevo llamado helpers(podría tener otro nombre) para almacenar las
 * funciones que necesitemos y no tenerlas en el mismo componente ocupando espacio
 **/

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=Jt2vkctHqBq0qfX2yXZRiFrdJ90jhQEk`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
