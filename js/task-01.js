const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
  const categoriesText = item.querySelector("h2").textContent;
  const categoriesLength = item.querySelectorAll("li").length;

  console.log(`Category: ${categoriesText}`);
  console.log(`Elements: ${categoriesLength}`);
});
