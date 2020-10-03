// Напиши скрипт, который бы при потере фокуса на
// инпуте, проверял его содержимое на правильное
// количество символов.

// Сколько символов должно быть в инпуте, указывается
// в его атрибуте data - length.

// Если введено подходящее количество, то border
// инпута становится зеленым, если неправильное -
// красным.

// Для добавления стилей, используй CSS-классы valid
// и invalid.

const input = document.querySelector('input#validation-input');
console.log('inputRef', input);

input.addEventListener('blur', inputChangeHandler);
input.addEventListener('focus', inputFocusHandler);

function inputChangeHandler(event) {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}

function inputFocusHandler() {
  input.classList.remove('valid');
  input.classList.remove('invalid');
}
