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
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector('[type="number"]');
inputEl.focus();
const divEl = document.getElementById("boxes");
const elements = [];
let click = 0;
let amount = 0;

btnCreateEl.addEventListener('click', addEventHendler);
btnDestroyEl.addEventListener('click', delEventHendler);


function addEventHendler () {
  amount = parseInt(inputEl.value);
  click =  click + 1;

  console.log('click:', click);
  console.log('inputEl.value', inputEl.value);
  console.log('amount', amount);
  
  if (amount < 1 || amount > 100 || inputEl.value === "") {
    alert('Введіть число від 1 до 100! ^_^');
    delEventHendler ();

  }  else { if (click > 1 ) {
      divEl.innerHTML = "";
    }
    
  createBoxes(amount);
  inputEl.value = ""; 
  inputEl.focus();
  }
}

function delEventHendler () { 
  //location.reload();
  click = 0;
  inputEl.value = "";
  divEl.innerHTML = "";
  inputEl.focus();
}

function createBoxes(amount){
  console.log("elements.length-1:", elements.length); 

  do {
    const divCollectionEl = document.createElement('div');

    divCollectionEl.style.width = "30px";
    divCollectionEl.style.height = "30px";
    divCollectionEl.style.marginTop = "20px";
    divCollectionEl.style.backgroundColor = getRandomHexColor();

    elements.unshift(divCollectionEl);

    for (let i = 1; i < elements.length; i++) {
      const element = elements[i];
      element.style.width = parseInt(element.style.width) + 10 + "px";
      element.style.height = parseInt(element.style.height) + 10 + "px";
    }

  } while (elements.length < parseInt(amount));
    
  console.log("elements.length-2:", elements.length); 
  divEl.append(...elements);
  elements.length = 0;
}


    
