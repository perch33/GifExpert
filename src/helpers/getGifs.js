export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=CK3HhMtOX09wn3E5KuWsUVtd5wVOHkNI&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
