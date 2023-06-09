import getMovements from "./functions/getMovements.js";

const URL_API = "https://training-k4dg.onrender.com/movements";
let movements = []
let container = document.getElementById('container')

document.addEventListener("DOMContentLoaded", async () => {
  movements = await getMovements();
  console.log(movements);
  printMovements(movements, container)
  
});

const printMovements = (array, container) => {
    array.forEach(element => {
        container.innerHTML += `
        <div class="element">
            <p>${element.description}</p>
            <p>${element.price}</p>
            <p>${element.type}</p>
        </div>
        `
    });
}