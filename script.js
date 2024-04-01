'use strict';
let title = prompt('Как называется ваш проект?');
console.log(title);
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(screens);
let screenPrice = +prompt('Сколько будет стоить данная работа?');
console.log(screenPrice);
let adaptive = prompt('Нужен ли адаптив на сайте?', 'да/нет');
adaptive = adaptive.toLowerCase();
if (adaptive === 'да') {
    adaptive = true;
} else if (adaptive === 'нет') {
    adaptive = false;
}
console.log(adaptive);

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
console.log(servicePrice2);
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 10;//Откат посреднику %

const servicePercentPrice = fullPrice - fullPrice * rollback / 100;// итоговую стоимость за вычетом отката посреднику

console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));// округлем результат в большую сторону

if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');

} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if ((fullPrice >= 0 && fullPrice < 15000)) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так');
}