let output = "";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52866";
const recipe = document.querySelector("#recipe-of-the-day");

fetch(BASE_URL)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    value.meals.forEach((recipe) => {
      output += `<div class="col-4">
      <img src="${recipe.strMealThumb}" id="img-recipe" alt="Recipe of the day">
    </div>
    <div class="col-6">
    <h2>${recipe.strMeal}</h2>
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

      console.log(BASE_URL+id);
    fetch(BASE_URL + id)
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      value.meals.forEach((recipe) => {
        output2 += ` <img src="${recipe.strMealThumb}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>`;
      });
      recipe.innerHTML = output2;
    })
    .catch((error) => {
      console.log(error);
      alert("Could not load page data.");
    });
  }

getRecipe(52830);
getRecipe(53032);
getRecipe(52770);