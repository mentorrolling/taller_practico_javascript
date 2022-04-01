//Obtener toda la data
//Obtener los objetos que sean nft (type)
let informacion = [];
let nfts = [];

const getData = async () => {
  const resp = await fetch("./data.json");
  const { data } = await resp.json();

  return data;
};

getData().then((response) => {
  informacion = response;

  nfts = informacion.items.filter((item) => {
    return item.type === "nft";
  });

  console.log(nfts);
  document.querySelector("#direccion").innerHTML = informacion.address;
  cargarGaleria();
});

//traer la imagen y el nombre

const cargarGaleria = () => {
  //recorrer el arreglo
  //nft_data[] -> external_data

  nfts.map((item) => {
    const { nft_data } = item;

    console.log(nft_data);

    if (nft_data) {
      //nft_data[] -> external_data

      //crear un elemento div
      let div = document.createElement("div");
      div.classList = "col";

      let columna = ` <div class="card">
        <img src=${nft_data[0].external_data.image_512} class="card-img-top" alt=${nft_data[0].external_data.name}>
        <div class="card-body">
          <h5 class="card-title">${nft_data[0].external_data.name}</h5>
         
        </div>
      </div>`;

      div.innerHTML = columna;

      document.querySelector("#contenedor").appendChild(div);
      //class="card"
      // img
      //class="card-body"
      //<p>nombre del nft</p>
      //id="contenedor" agregar el elemento
    }
    //null
    //undefined
    //false
    //""
    //NaN
    //0
  });
};
