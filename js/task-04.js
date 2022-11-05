//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const spanValue = document.querySelector('#value');
const btnMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');

let counterValue = parseInt(spanValue.textContent);

btnMinus.addEventListener('click', () =>{
counterValue -= 1;
spanValue.textContent = counterValue;
console.log(-1);
} );

btnPlus.addEventListener('click', () => {
counterValue += 1;
spanValue.textContent = counterValue;
console.log(+1);
});





console.log(spanValue, btnMinus, btnPlus);
console.log(counterValue);