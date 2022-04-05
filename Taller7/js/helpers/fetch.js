const url = "https://api.coincap.io/v2/assets";

export const getCripto = async () => {
  try {
    const resp = await fetch(`${url}?limit=10`);
    const { data } = await resp.json();
    return data;
  } catch (error) {
    throw new Error("No se recibió la información de la API");
  }
};
