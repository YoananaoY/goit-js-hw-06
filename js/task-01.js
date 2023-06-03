const categoriesList = document.querySelector('ul#categories');
const categories = categoriesList.querySelectorAll('li.item');


const numCategories = categories.length;
console.log('Number of categories:', numCategories);


categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;

  console.log('Category:', categoryName);
  console.log('Elements:', categoryElements);
});