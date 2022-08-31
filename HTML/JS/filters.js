let buscar = () => {
    let nombres = document.querySelector("#inputBusqueda").value.toLowerCase();
    let filtrados = restaurantes.filter((restaurante) => {
      return restaurante.name.toLowerCase().includes(nombres);
    });
    render(filtrados);
};

let reviews = () =>{
    let filtro = restaurantes.filter((restaurante) => {
      return restaurante.calificacion >= 5.1;
    });
    render(filtro);
};

let buscarCategoria = (category) => {
    let filtro = restaurantes.filter((restaurante) => {
        return restaurante.localtype == category;
    });
    render(filtro);
};


document
.querySelector("#busqueda button")
.addEventListener("click", buscar);

document
.querySelector("#inputBusqueda")
.addEventListener("keyup", buscar);

document
.querySelector("#todos")
.addEventListener("click", () => render(restaurantes));

document
  .querySelector("#restaurantes")
  .addEventListener("click", () => buscarCategoria("restaurante"));

document
  .querySelector("#fast-food")
  .addEventListener("click", () => buscarCategoria("fast-food"));

document
  .querySelector("#abarrotes")
  .addEventListener("click", () => buscarCategoria("abarrotes"));

document
  .querySelector("#mandaditos")
  .addEventListener("click", () => buscarCategoria("local"));

document
  .querySelector("#farmacia")
  .addEventListener("click", () => buscarCategoria("farmacia"));

document
.querySelector("#alfabeto")
.addEventListener("click",() => {
  restaurantes.sort(function(a,b){
      return a.name > b.name ? 1 : -1;
  });
 render(restaurantes);
})

document.querySelector("#calificacion").addEventListener("click",()=>{
  restaurantes.sort((a,b) => a.reviews < b.reviews ? 1 : -1);
  render(restaurantes);
});

