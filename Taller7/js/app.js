import { getCripto } from "./helpers/fetch.js";

let criptomonedas = [];

const getData = () => {
  getCripto().then((response) => {
    // console.log(response);
    criptomonedas = [...response];
    // console.log(criptomonedas);
    cargarTabla();
  });
};

const cargarTabla = () => {
  document.querySelector("#tableBody").innerHTML = "";
  criptomonedas.map((cripto) => {
    let tr = document.createElement("tr");
    let cuerpoCelda = ` <td>${cripto.rank}</td>
    <td >
    <img class="img-icon me-1" src=${`https://assets.coincap.io/assets/icons/${cripto.symbol.toLowerCase()}@2x.png`}>
    ${cripto.name}
    
    </td>
    <td class="text-end">${numeral(cripto.priceUsd).format("$0,0.00")}</td>
    <td class="text-end">${numeral(cripto.marketCapUsd).format(
      "($ 0.00 a)"
    )}</td>
    <td class="text-end">${numeral(cripto.vwap24Hr).format("$0,0.00")}</td>
    <td class="text-end">${numeral(cripto.supply).format("($ 0.00 a)")}</td>
    <td class="text-end">${numeral(cripto.volumeUsd24Hr).format(
      "($ 0.00 a)"
    )}</td>
    <td class=${
      cripto.changePercent24Hr > 0 ? "text-green" : "text-red"
    }>${parseFloat(cripto.changePercent24Hr).toFixed(2)}%</td>`;

    tr.innerHTML = cuerpoCelda;
    document.querySelector("#tableBody").appendChild(tr);
  });
};

getData();

document.querySelector("#btn-update").addEventListener("click", getData);
