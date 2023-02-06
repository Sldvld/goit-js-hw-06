const categoryList = document.querySelector(`#categories`);
const categoryListItem = categoryList.querySelectorAll(`.item`);

console.log(`Number of categories: ${categoryListItem.length}`);

categoryListItem.forEach((item) => {
    console.log(`Category:${item.firstElementChild.textContent}`);
    console.log(`Elements:${item.lastElementChild.children.length}`);
});