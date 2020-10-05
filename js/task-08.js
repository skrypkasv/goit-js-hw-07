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

let initialSize = 30;

btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createBoxes() {
  const collection = [];
  for (let i = 0; i < input.value; i += 1) {
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);
    initialSize += 10;
    const div = document.createElement('div');
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    div.style.width = `${initialSize}px`;
    div.style.height = `${initialSize}px`;
    collection.push(div);
  }
  divBoxesRef.append(...collection);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
  initialSize = 30;
}
