const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listItem = ingredients.map((ingredient) => {
  const createItem = document.createElement("li");

  createItem.textContent = ingredient;
  createItem.classList.add("item");

  return createItem;
});
ingredientsList.append(...listItem);
