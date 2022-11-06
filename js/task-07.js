//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const imputEl = document.getElementById("font-size-control");
console.log(imputEl);
const spanEl = document.getElementById("text");
console.log(spanEl);


imputEl.addEventListener('input', inputHandler);

function inputHandler (event) {
    console.log(event.currentTarget.value);

    spanEl.style.fontSize = `${event.currentTarget.value}` + "px";

    console.log(spanEl.style.fontSize);
 }