
const URL_API = "https://training-k4dg.onrender.com/movements";
let movements = []
let container = document.getElementById('container')

const getMovements = async () => {
  try {
    const { data } = await axios.get(URL_API);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  movements = await getMovements();
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