// Напиши скрипт который, при наборе текста в инпуте
// input#name-input(событие input), подставляет его
// текущее значение в span#name-output. Если инпут
// пустой, в спане должна отображаться строка
// 'незнакомец'.

const input = document.querySelector('input#name-input');

const span = document.querySelector('span#name-output');

const initialSpanTextContent = span.textContent;

input.addEventListener('input', inputChangeHandler);

function inputChangeHandler(event) {
  span.textContent =
    event.currentTarget.value.length === 0
      ? initialSpanTextContent
      : event.currentTarget.value;
}
