
//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
console.log(btnEl);
const bodyEl = document.querySelector("body");
console.log(bodyEl);
const spanEl = document.querySelector(".color");
console.log(spanEl);

btnEl.addEventListener('click',clickColorHandler);

function clickColorHandler() {
const a = getRandomHexColor();
bodyEl.style.backgroundColor = `${a}`;
spanEl.textContent = `${a}`;
console.log(a);
}


