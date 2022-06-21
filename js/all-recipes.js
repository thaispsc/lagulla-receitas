const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i";
const recipesList = document.querySelector("#recipes-list");
let output1 = "";

fetch(BASE_URL)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    value.meals.forEach((recipe) => {
      output1 += `<div class="col-lg-3 col-md-6 mb-5">
      <div class="card mx-auto -3 bg-body rounded" style="width: 16rem">
        <img src="${recipe.strMealThumb}" class="card-img-top mx-auto" alt="${recipe.strMeal}" />
        <div class="card-body">
          <h6 class="card-title my-3 text-center">${recipe.strMeal}</h6>
          <div class="text-center">
          <button type="button" class="btn bg-light text-dark border-dark" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop" recipe-id="${recipe.idMeal}" id="button-open-modal">Go to recipe
          </button>
          </div>
        </div>
      </div>
    </div>`;
    });
    recipesList.innerHTML = output1;
    click();
  })
  .catch((error) => {
    console.log(error);
    alert("Could not load page data.");
  });

let output2 = "";
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
            output2 = `<div class="modal-content">
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
          modal.innerHTML = output2;
        })
        .catch((error) => {
          console.log(error);
          alert("Could not load page data.");
        });
    });
  });
}
