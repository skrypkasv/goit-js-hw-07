//Счетчик состоит из спана и кнопок, которые должны
// увеличивать и уменьшать значение счетчика на 1.

// ▶ Создай переменную counterValue в которой будет
// хранится текущее значение счетчика.

// ▶ Создай функции increment и decrement для
// увеличения и уменьшения значения счетчика

// ▶ Добавь слушатели кликов на кнопки, вызовы функций
// и обновление интерфейса

const spanRef = document.querySelector('#value');

let counterValue = 0;

const btnDecrRef = document.querySelector('[data-action="decrement"]');
const btnIncrRef = document.querySelector('[data-action="increment"]');

btnDecrRef.addEventListener('click', decrement);
btnIncrRef.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}
