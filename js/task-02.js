//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const makeList = (ingredients) => {
return ingredients.map(ingredient => {
const liItem = document.createElement('li');
liItem.classList.add('item');
liItem.textContent = `${ingredient}`;
return liItem;
})
};

const liElements = makeList (ingredients);
ulRef.append(...liElements);