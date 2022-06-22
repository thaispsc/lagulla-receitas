let output = "";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52786";
const recipe = document.querySelector("#recipe-of-the-day");

fetch(BASE_URL)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    value.meals.forEach((recipe) => {
      output += `<div class="col-md-5 pe-5">
      <img src="${recipe.strMealThumb}" id="img-recipe" alt="Recipe of the day">
    </div>
    <div class="col-md-7">
    <h3 class="mb-3">${recipe.strMeal}</h3>
    <h5>Cuisine</h5>
    <p>${recipe.strArea}.</p>
    <h5>Ingredients</h5>
    <p>${recipe.strIngredient1}, ${recipe.strIngredient2}, ${recipe.strIngredient3}, ${recipe.strIngredient4}, ${recipe.strIngredient5}.</p>
    <h5>Instructions</h5>
    <p>${recipe.strInstructions}</p>
    </div>`;
    });
    recipe.innerHTML = output;
  })
  .catch((error) => {
    console.log(error);
    alert("Could not load page data.");
  });


let output2 ='';
  function getRecipe(id) {
      const recipe = document.querySelector(`[recipe-id="${id}"]`)
      const BASE_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

    fetch(BASE_URL + id)
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      value.meals.forEach((recipe) => {
        output2 = ` <img src="${recipe.strMealThumb}" class="d-block w-100" id="img-carousel" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>${recipe.strMeal}</h5>
          <div class="text-center">
          <button type="button" class="btn bg-light text-dark border-dark" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop" recipe-id="${recipe.idMeal}" id="button-open-modal">Go to recipe
          </button>
          </div>
        </div>`;
      });
      recipe.innerHTML = output2;
      click();
    })
    .catch((error) => {
      console.log(error);
      alert("Could not load page data.");
    });
  }

getRecipe(52913);
getRecipe(52857);
getRecipe(52930);


let output3 ='';
  function getRecentRecipe(id) {
      const recipe = document.querySelector("#most-recent-recipes")
      const BASE_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

    fetch(BASE_URL + id)
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      value.meals.forEach((recipe) => {
        output3 = `
        <div class="col-12 col-md-4" id="div-open-modal" >
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" class="img-fluid" />
        <div class="banner-content">
          <h3>${recipe.strMeal}</h3>
          <div class="text-center">
          <button type="button" class="btn bg-light text-dark border-dark" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop" recipe-id="${recipe.idMeal}" id="button-open-modal">Go to recipe
          </button>
          </div>
        </div>
      </div>`;
      });
      recipe.innerHTML += output3;
      click()
    })
    .catch((error) => {
      console.log(error);
      alert("Could not load page data.");
    });
  }

getRecentRecipe(52901);
getRecentRecipe(52876);
getRecentRecipe(52919);

let output4 = "";
const modal = document.querySelector(".modal-dialog");
function click() {
  const openModalButton = document.querySelectorAll("#button-open-modal");
  openModalButton.forEach((botao) => {
    botao.addEventListener("mousedown", (e) => {
      const BASE_URL2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
      const recipeId = e.target.getAttribute("recipe-id");
      fetch(BASE_URL2 + recipeId)
        .then((value) => {
          return value.json();
        })
        .then((value) => {
          value.meals.forEach((recipe) => {
            output4 = `<div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <h2 class="mb-3 text-center">${recipe.strMeal}</h2>
        <h5>Cuisine</h5>
        <p>${recipe.strArea}.</p>
        <h5>Ingredients</h5>
        <p>${recipe.strIngredient1}, ${recipe.strIngredient2}, ${recipe.strIngredient3}, ${recipe.strIngredient4}, ${recipe.strIngredient5}.</p>
        <h5>Instructions</h5>
        <p>${recipe.strInstructions}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
        </div>
      </div>`;
          });
          modal.innerHTML = output4;
        })
        .catch((error) => {
          console.log(error);
          alert("Could not load page data.");
        });
    });
  });
}