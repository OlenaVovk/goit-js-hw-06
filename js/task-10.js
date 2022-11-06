//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnDestroyEl = document.querySelector("[data-create]");
console.log(btnDestroyEl);
const btnCreateEl = document.querySelector("[data-destroy]");
console.log(btnCreateEl);
const inputEl = document.querySelector('[type="number"]');
console.log(inputEl);
const divEl = document.getElementById("boxes");
console.log(divEl);

btnCreateEl.addEventListener('click', delEventHendler);
btnDestroyEl.addEventListener('click', addEventHendler);

function addEventHendler () {
const amount = inputEl.value;
console.log(amount);
createBoxes(amount);
}

function delEventHendler () {
const amount = 0;
inputEl.value = 0;
console.log(amount);
}


function createBoxes(amount){
const elements = [];

do {
  const divCollectionEl = document.createElement("div");
  divCollectionEl.style.width = "30px";
  elements.push(divCollectionEl);
} while (elements.length < parseInt(amount));

 console.log(elements);
}


