const ulRef = document.querySelector('ul#categories');

const itemRef = document.querySelector('.item');

const allItemsRef = document.querySelectorAll('.item');

const btnRef = document.querySelector('.btn');

console.log(`В списке ${allItemsRef.length} категории.`);

allItemsRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
