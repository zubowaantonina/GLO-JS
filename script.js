// "use strict";
const books = document.querySelectorAll(".book");
const body=document.body;
const adv=document.querySelector('.adv');
console.log(books);
// Восстановить порядок книг.
books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);
// Заменить картинку заднего фона на другую из папки image
body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
// Удалить рекламу со страницы
adv.remove();
// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
books[4].children[0].firstElementChild.textContent = 'Книга 3. this и Прототипы Объектов';
// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
console.log(books[0]);
books[0].children[1].children[2].before(books[0].children[1].children[3])
books[0].children[1].children[10].before(books[0].children[1].children[3])
books[0].children[1].children[3].before(books[0].children[1].children[5])
books[0].children[1].children[5].before(books[0].children[1].children[7])
books[0].children[1].children[5].after(books[0].children[1].children[4])



books[5].children[1].children[2].before(books[5].children[1].children[9])
books[5].children[1].children[5].before(books[5].children[1].children[3])
books[5].children[1].children[5].after(books[5].children[1].children[4])
books[5].children[1].children[7].before(books[5].children[1].children[11])
books[5].children[1].children[6].before(books[5].children[1].children[7])
books[5].children[1].children[7].before(books[5].children[1].children[8])
// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const newElement=document.createElement('li');
newElement.textContent = 'Глава 8: За пределами ES6';
books[2].children[1].append(newElement);
books[2].children[1].children[9].before(books[2].children[1].lastElementChild)
