let url = "https://fakestoreapi.com/products";

export const getProductos = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    throw new Error("No se pudo obtener la data");
  }
};
