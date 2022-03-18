let url = "https://jsonplaceholder.typicode.com/users";
let usuarios = [];
const getData = async () => {
  const respuesta = await fetch(url);

  const datos = await respuesta.json();

  return datos;
};

getData().then(function (respuesta) {
  console.log(respuesta);
  usuarios = [...respuesta];
});
