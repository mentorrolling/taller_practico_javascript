let precioOriginal = 120;
let descuento = 20;

let porcentajePrecioConDescuento = 100 - descuento;
let precioConDescuento = precioOriginal * (porcentajePrecioConDescuento / 100);

console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento,
});

// funcion que tome los datos, realice el proceso y entregue el resultado
