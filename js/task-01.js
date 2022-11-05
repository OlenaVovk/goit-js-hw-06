// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const liItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', liItemEl.length);

const textEl = document.querySelectorAll('.item h2');

textEl.forEach((elem, i) => {   

    console.log('Category:', textEl[i].textContent);
    
    const liInItem = liItemEl[i].querySelectorAll('li');
    console.log('Elements:', liInItem.length)
})

