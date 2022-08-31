const modal = document.querySelector("#modal");
const rName = document.querySelector("#restaurant-name");
const rAddress = document.querySelector("#restaurant-address");
const rPhone = document.querySelector("#restaurant-phone");
const rImage = document.querySelector("#restaurant-image");
const btnFavorites = document.querySelector("#restaurant-add-favorites");
const favoriteStorage = localStorage.getItem("@favoritos");

let restaurantes = [];


let render = (restaurantsArr) => {
    const results = document.querySelector("#results");
    results.innerHTML = "";
  
    for (let i in restaurantsArr) {
      let col = document.createElement("div");
      col.classList.add("column", "is-4-desktop", "is-6-tablet");
  
      let card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-id", restaurantsArr[i].id);
  
      card.innerHTML = `<div class="card-image">
                  <figure class="image is-16by9">
                      <img src="${restaurantsArr[i].image}" alt="Placeholder image">
                  </figure>
              </div>
              <div class="card-content">
                  <span class="tag is-danger">${restaurantsArr[i].localtype} </span>
                  <div class="is-flex is-justify-content-space-between is-align-items-center">
                      <div class="content mb-0">
                          <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${restaurantsArr[i].name}</p>
                          <p class="mb-0 is-size-7">${restaurantsArr[i].ubicacion}</p>
                      </div>
                      <div class="ranking has-text-right">
                          <span class="icon-text">
                              <span  class="icon has-text-info">
                              <i data-favorite="${restaurantsArr[i].id}" class="mdi mdi-star mdi-18px is-active"></i>
                              </span> 
                              <span> ${restaurantsArr[i].calificacion}</span>
                          </span>
                      </div>
                  </div>
              </div>
              `;
        card.addEventListener("click", () => mostrarModal(card.dataset.id));
        col.append(card);
        document.querySelector("#results").append(col);
    }
};

const llenarModal = (restaurante) => {
    const {name, ubicacion, image} = restaurante;
    rName.innerText = name;
    rAddress.innerText = ubicacion;
    rImage.setAttribute("src", image);
};
  
const mostrarModal = (id) => {
    rName.innerText = "";
    rAddress.innerText = "";
    btnFavorites.setAttribute("id", id);
    modal.classList.toggle("is-active");
    let restauranteI = buscarId(id);
    llenarModal(restauranteI);
};

let buscarId =  (aidi) => {
    let filtro = restaurantes.filter((restaurante) => {
        return restaurante.id == aidi;
    });
    return(filtro[0]);
};

fetch("js/restaurantes.json")
.then(response => response.json())
.then((data) => {
  restaurantes = data;
  render(data);
}); 