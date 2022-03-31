//importar la funcion del fetch
import { getProductos } from "../helpers/fetch.js";

//traer la data y guardarla en una variable productos
let productos = [];
let categorias = [];

getProductos().then((response) => {
  productos = [...response];
  document.querySelector("#mensaje").remove();

  //   console.log(productos);

  obtenerCategorias();
  cargarTarjetas(productos);
});

//Obtener las categorias
const obtenerCategorias = () => {
  let arreglo = [];
  productos.map((item) => {
    arreglo.push(item.category);
  });

  //obtener las categorias sin duplicados
  const result = arreglo.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  categorias = [...result];

  categorias.map((item) => {
    let opcion = `<option value=${item}>${item}</option>`;
    document.querySelector("#lista_categorias").innerHTML += opcion;
  });
};

//Cargar las tarjetas con los productos
const cargarTarjetas = (array) => {
  document.querySelector("#container_cards").innerHTML = "";

  //recorrer el arreglo de productos
  array.map((producto) => {
    //crear la card con los datos
    /*
       - Imagen del producto
       - Título
       - Precio
       - Calificación
       */

    //desestructurar el arreglo con los datos
    const {
      title,
      image,
      price,
      rating: { rate },
    } = producto;

    let div = document.createElement("div");
    div.classList = "col-12 col-md-6";
    let tarjeta = `<div class="card mb-3">
       <div class="row g-0">
         <div class="col-md-4">
           <img
             src=${image}
             class="img-fluid rounded-start p-2"
             alt=${title}
           />
         </div>
         <div class="col-md-8">
           <div class="card-body h-100 d-flex flex-column justify-content-between">
           <div>
           <h5 class="card-title">
             ${title}
           </h5>
           
           <p class="card-text">
             <small class="text-muted">$ ${price}</small>
           </p>
           
           </div>
           <div>
           <button type="button" class="btn btn-warning float-end">
             Calificación
             <span class="badge bg-light text-dark">${rate}</span>
           </button>
           
           </div>
           </div>
         </div>
       </div>
     </div>`;

    div.innerHTML = tarjeta;
    document.querySelector("#container_cards").appendChild(div);
  });
};

const consultarCategorias = ({ target }) => {
  let categoria = target.value;
  console.log(target.value);

  if (categoria === "todo") {
    return cargarTarjetas(productos);
  }

  let newArray = productos.filter((item) => {
    return item.category === categoria;
  });

  cargarTarjetas(newArray);
};

document
  .querySelector("#lista_categorias")
  .addEventListener("change", consultarCategorias);
