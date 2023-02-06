const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`)

const listOfIngredients = ingredients.map(ingredient => {
  const elementLi = document.createElement(`li`);
  elementLi.textContent = ingredient;
  elementLi.classList.add(`item`);

  return elementLi;
});

console.log(listOfIngredients);

ingredientsList.append(...listOfIngredients);