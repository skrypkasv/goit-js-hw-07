// Напиши скрипт создания и очистки коллекции
// элементов. Пользователь вводит количество
// элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на
// кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая
// принимает 1 параметр amount-число. Функция создает
// столько div, сколько указано в amount и добавляет
// их в div#boxes.

// Каждый созданный div:

// ▶ Имеет случайный rgb цвет фона

// ▶ Размеры самого первого div - "30"px на "30"px

// ▶ Каждый следующий div после первого, должен
// быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает
// div#boxes.

const input = document.querySelector('input');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.querySelector('div#boxes');

btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

let initialSize = 30;

function createBoxes() {
  divBoxesRef.append(...collectAllDivs(input.value));
}
function collectAllDivs(amount) {
  const collection = [];
  for (let i = 0; i < amount; i += 1) {
    const div = createDiv();
    collection.push(div);
    initialSize += 10;
  }
  return collection;
}
function createDiv() {
  const div = document.createElement('div');
  div.style.backgroundColor = getRandomColor(255);
  div.style.width = `${initialSize}px`;
  div.style.height = div.style.width;
  return div;
}
function getRandomColor(max) {
  const red = Math.floor(Math.random() * Math.floor(max));
  const green = Math.floor(Math.random() * Math.floor(max));
  const blue = Math.floor(Math.random() * Math.floor(max));
  return `rgb(${red}, ${green}, ${blue})`;
}
function destroyBoxes() {
  divBoxesRef.innerHTML = '';
  initialSize = 30;
  input.value = '';
}
