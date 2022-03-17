// billetes de 50 cantidad 3
// billetes de 20 cantidad 2
// billetes de 10 cantidad 2

let billetes = [
  { valor: 50, cantidad: 3 },
  { valor: 20, cantidad: 2 },
  { valor: 10, cantidad: 2 },
];

let extraer = 180;
let cantBilletes = 0;
let papeles = 0;
let entregado = [];
let total = 0; //total de dinero en el cajero

const totalCajero = () => {
  //    for (const item of billetes) {
  //        total=total + item.valor *item.cantidad
  //    }

  billetes.forEach((billete) => {
    total += billete.valor * billete.cantidad;
  });
};

//Solicitar dinero
const solicitarDinero = () => {
  entregado = [];
  //si el dinero a extraer es menor o igual al dinero del cajero
  if (extraer <= total) {
    for (const billete of billetes) {
      if (extraer > 0) {
        cantBilletes = Math.floor(extraer / billete.valor); //30 / 20=1

        //obtener la cantidad de papel billete que entregará el cajero
        if (cantBilletes > billete.cantidad) {
          papeles = billete.cantidad;
        } else {
          papeles = cantBilletes;
        }

        billete.cantidad -= papeles;

        entregado.push({ valor: billete.valor, cantidad: papeles });
        extraer -= billete.valor * papeles;
        //30 //10 //0
      }
    }

    totalCajero();
  } else {
    alert("El cajero no dispone de la cantidad solicitada");
  }
};

//mostrar los billetes en pantalla

const mostrarBilletes = () => {
  let contenedorBilletes = document.getElementById("container_billete");
  contenedorBilletes.innerHTML = "";

  //recorrer el arreglo entregable
  //switch por cada billete.valor
  // dentro de cada caso sacar cantidad y dibujar la cantidad de billetes
};

totalCajero();
