//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

//Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const imputEl = document.getElementById("validation-input");
console.log(imputEl);

imputEl.addEventListener('blur', blurHandler);

function blurHandler(event) {
    console.log(parseInt(event.currentTarget.dataset.length));
    console.log(parseInt(event.currentTarget.value.length));

    if (parseInt(imputEl.value.length) === parseInt(event.currentTarget.dataset.length)) {
    imputEl.classList.add('valid');
    imputEl.classList.remove('invalid');
    }
   else {
    imputEl.classList.add('invalid');
     imputEl.classList.remove('valid');
    }
}