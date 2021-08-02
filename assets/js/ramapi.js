//URL API

const API = "https://swapi.dev/api/people/";

//obtener los resultados de la api
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json.results),paginacion(json);
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};



//dibujar carda de personajes
const llenarDatos = (data) => {
  console.log(data);
  let html="";
 
data.forEach(persona => {
  

    html += '<div class="col mt-5">';
    html += `<div class="card bg-light " style="width: 18rem;">`;
    html +=`<div class="card-body">`;
    html +=`<h5 class="card-title">${persona.name}</h5>`;
    html +=`<p class="card-text">mass :${persona.mass}</p>`;
    html +=`<p class="card-text">height :${persona.height}</p>`;
    html +=`<p class="card-text">hair_color :${persona.hair_color}</p>`;
    html +=`<p class="card-text">hair_color :${persona.hair_color}</p>`;
    html +=`<p class="card-text">gender :${persona.gender}</p>`;
    html +=` </div>`;
    html +=` </div>`;
    html += "</div>";
  });
  
  document.getElementById("datosPersonajes").innerHTML = html;
};

//paginacion
const paginacion = (data) => {
    let prevDisabled ="";
    let nextDisabled="";
    
    data.previous == null ? prevDisabled ="disabled" : prevDisabled = "";
    data.next == null ? nextDisabled = "disabled" : nextDisabled="";
console.log(prevDisabled);
    let html =`<li class="page-item ${prevDisabled}">
    <a class="page-link" onclick='getData("${data.previous}")' >Previous</a>
  </li> <li class="page-item ${nextDisabled}"> <a class="page-link" onclick='getData("${data.next}")' >Next</a></li>`;

    document.getElementById("paginacion").innerHTML =html;
    
};

//Se ejecuta la api
getData(API);
