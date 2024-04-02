"use strict";
let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = prompt("Нужен ли адаптив на сайте?", "да/нет");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10; //Откат посреднику %

adaptive = adaptive.toLowerCase();
adaptive === "да" ? (adaptive = true) : (adaptive = false);
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};
const getRollBackMessage = (price) => {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && fullPrice < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что то пошло не так";
  }
};
// 1) Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг.
//  Результат сохраняем в переменную allServicePrices. Тип - function expression
const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// 2) Объявить функцию getFullPrice.Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг(screenPrice + allServicePrices).
// Результат сохраняем в переменную fullPrice.Тип - function declaration
function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}
const fullPrice = getFullPrice(screenPrice, allServicePrices);

// 3) Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой".
// Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"
const getTitle = () => {
  return (
    title.trim()[0].toUpperCase() + title.trim().slice(1).toLocaleLowerCase()
  );
};
title = getTitle();
// 4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката.
//  Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
const getServicePercentPrices = (fullPrice) => {
  return fullPrice - (fullPrice * rollback) / 100;
};
const servicePercentPrice = getServicePercentPrices(fullPrice);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(fullPrice);
console.log(allServicePrices);
console.log(servicePercentPrice, "итоговая стоимость");
console.log(getRollBackMessage(fullPrice));
