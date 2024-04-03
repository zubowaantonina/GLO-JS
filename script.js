"use strict";
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10; //Откат посреднику %
let service1;
let service2;
let servicePercentPrice;
let allServicePrices;
let fullPrice;
//проверка на число
const isNumber = function (num) {
  // return /^\d+$/.test(num)&&num!==0;
  // return /^-?\d+(\.\d+)?$/.test(num);
  return !isNaN(parseFloat(num)) && isFinite(num)&&num!==0;
};
const asking = function () {
  title = prompt("Как называется ваш проект?", "калькулятор верстки");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );
  // screenPrice = +prompt("Сколько будет стоить данная работа?");
  // while (!isNumber(screenPrice)) {
  //   screenPrice = prompt("Сколько будет стоить данная работа?");
  // }
  do {
    screenPrice = +prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?", "да/нет");
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};
const getRollBackMessage = (price) => {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что то пошло не так";
  }
};
const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    //функция для проверки строки на число
    const numberChecks = () => {
      let n = 0;
      do {
        n = +prompt("Сколько это будет стоить?");
      } while (!isNumber(n));
      return +n;
    };
    sum += numberChecks();
  }
  return sum;
};
const getFullPrice = () => {
  return screenPrice + allServicePrices;
};
const getTitle = () => {
  return (
    title.trim()[0].toUpperCase() + title.trim().slice(1).toLocaleLowerCase()
  );
};

const getServicePercentPrices = () => {
  return fullPrice - fullPrice * (rollback / 100);
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getFullPrice());
console.log(screens);
// console.log(fullPrice);
console.log("allServicePrices", allServicePrices);
console.log(servicePercentPrice, "итоговая стоимость");
console.log(getRollBackMessage(fullPrice));
