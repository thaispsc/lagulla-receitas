const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i";
const allRecipesList = document.querySelector("#all-recipes-list");
let outputAllRecipes = "";


fetch(BASE_URL)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    value.meals.forEach((recipe) => {
      outputAllRecipes += `<div class="col-lg-3 col-md-6 mb-5">
      <div class="card mx-auto -3 bg-body rounded" style="width: 16rem">
        <img src="${recipe.strMealThumb}" class="card-img-top mx-auto" alt="${recipe.strMeal}" />
        <div class="card-body">
          <h6 class="card-title my-3 text-center">${recipe.strMeal}</h6>
        </div>
      </div>
    </div>`;
    });
    allRecipesList.innerHTML += outputAllRecipes;
  })
  .catch((error) => {
    console.log(error);
    alert("Could not load page data.");
});