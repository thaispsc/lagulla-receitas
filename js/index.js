const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=bd75592091a34f7faa2ba606d9bd20d3&number=100";
const allRecipesList = document.querySelector("#all-recipes-list");
let outputAllRecipes = "";


fetch(BASE_URL)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    value.results.forEach((recipe) => {
      outputAllRecipes += `<div class="col-lg-3 col-md-6 mt-5">
      <div class="card mx-auto -3 bg-body rounded" style="width: 16rem">
        <img src="${recipe.image}" class="card-img-top mx-auto" alt="${recipe.title}" />
        <div class="card-body">
          <h6 class="card-title my-3">${recipe.title}</h6>
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