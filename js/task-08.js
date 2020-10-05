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

btnRender.addEventListener('click', onClickRender);
btnDestroy.addEventListener('click', onClickDestroy);

console.log(divBoxesRef.style);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function onClickRender() {
  const red = getRandomInt(255);
  const green = getRandomInt(255);
  const blue = getRandomInt(255);

  const div = document.createElement('div');
  div.classList.add('box');
  div.style = `background-color: rgb(${red}, ${green}, ${blue}); width: 30; height: 30`;
  divBoxesRef.appendChild(div);
}

function onClickDestroy() {
  divBoxesRef.innerHTML = '';
}
