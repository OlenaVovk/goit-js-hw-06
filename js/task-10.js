//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnCreateEl = document.querySelector("[data-create]");
console.log(btnCreateEl);
const btnDestroyEl = document.querySelector("[data-destroy]");
console.log(btnDestroyEl);
const inputEl = document.querySelector('[type="number"]');
console.log(inputEl);
const divEl = document.getElementById("boxes");
console.log(divEl);

const elements = [];

btnCreateEl.addEventListener('click', addEventHendler);
btnDestroyEl.addEventListener('click', delEventHendler);


function addEventHendler () {
  const amount = inputEl.value;
  
  if (amount <= 0) {
    alert('Введіть адекватне число! ^_^');
  } else {
    createBoxes(amount);
    inputEl.value = "";
  }
}

function delEventHendler () { 
  location.reload();
}

function createBoxes(amount){
  do {
    const divCollectionEl = document.createElement('div');

    divCollectionEl.style.width = "20px";
    divCollectionEl.style.height = "20px";
    divCollectionEl.style.marginTop = "20px";
    divCollectionEl.style.backgroundColor = getRandomHexColor();

    elements.unshift(divCollectionEl);

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.width = parseInt(element.style.width) + 10 + "px";
      element.style.height = parseInt(element.style.height) + 10 + "px";
    }
  } while (elements.length < parseInt(amount));

  console.log("elements.length:", elements.length); 
  divEl.append(...elements);
}


