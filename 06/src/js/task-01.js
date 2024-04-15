const categoriesList = document.getElementById('categories');
// console.log(categoriesList);

const categoryItems = categoriesList.querySelectorAll('.item');
console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const numberOfElements = item.querySelectorAll('li');

console.log('Caterogy:', categoryTitle);
console.log('Elements:', numberOfElements.length );})

