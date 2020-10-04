// Напиши скрипт, который реагирует на изменение
// значения input#font-size-control(событие input)
// и изменяет инлайн-стиль span#text обновляя
// свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

const range = document.querySelector('input#font-size-control');

const span = document.querySelector('span#text');

range.addEventListener('input', rangeInputHandler);

function rangeInputHandler() {
  const valueForFontSize = Number(this.value) + 50;
  span.style.fontSize = `${valueForFontSize}%`;
}
