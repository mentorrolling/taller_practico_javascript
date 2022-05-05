let heroes = {};

const getDatosHeroes = async () => {
  try {
    const response = await fetch("../data/superheroes.json");
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

getDatosHeroes().then((respuesta) => {
  console.log(respuesta);
  heroes = { ...respuesta };
  obtenerDatos();
});

// let num=[1,2,3]

// const [num1, num2, num3]=num

const recorrerPoderes = (array) => {
  let lista = "";
  for (let index = 0; index < array.length; index++) {
    lista += `<li>${array[index]}</li>`;
  }

  return lista;
};

const obtenerDatos = () => {
  const { squadName, homeTown, formed, members } = heroes;
  //obtener los datos del titulo, subtitulo
  //luego tenemos que mostrarlos

  document.querySelector("#title").innerText = `${squadName}`;
  document.querySelector(
    "#subtitle"
  ).innerHTML = `<h3><b>HomeTown:</b> ${homeTown} | <b>Formed:</b> ${formed}</h3>`;

  //obtener los miembros y mostrar los datos:
  //nombre, identidad secreta, edad, poderes

  members.forEach((heroe) => {
    const { name, secretIdentity, age, powers } = heroe;
    console.log(powers);
    let col = document.createElement("div");
    col.classList = "col";

    let contenido = `<h2>${name}</h2> 
    <p><b>Secret Identity:</b> ${secretIdentity}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Superpowers:</b></p>
    <ul>
      ${recorrerPoderes(powers)}
    </ul>
    `;

    col.innerHTML = contenido;
    document.querySelector("#container").appendChild(col);
  });

  //mostrar en una lista los poderes de cada uno

  //recorrer el arreglo de heroes
  //por cada heroe debo generar una lista con sus poderes
  //powers[]
};
