"use strict";
const h1=document.getElementsByTagName('h1')
console.log(h1[0]);
const handlerBtn=document.getElementsByClassName('handler_btn')
console.log(handlerBtn);
const screenBtn=document.querySelector('.screen-btn');
console.log(screenBtn);
const otherItems1=document.querySelectorAll('.other-items.percent');
console.log(otherItems1);
const otherItems2=document.querySelectorAll('.other-items.number');
console.log(otherItems2);
const rollbackInput=document.querySelector('.rollback input');
console.log(rollbackInput);
const rollbackSpan=document.querySelector('.rollback span');
console.log(rollbackSpan);
const totalInput=document.getElementsByClassName('total-input')
Array.from(totalInput).forEach((el) => {
    console.log(el);
});
let screen=document.querySelectorAll('.screen');
console.log(screen);


// const appData = {
//   title: "",
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,
//   services: {},
//   servicePercentPrice: 0,
//   allServicePrices: 0,
//   fullPrice: 0,
//   start: () => {
//       appData.asking(),
//       appData.addPrices(),
//       appData.getFullPrice(),
//       appData.getTitle(),
//       appData.getServicePercentPrices(),
//       appData.logger()
//   },
//   asking: () => {
//     do {
//      appData.title = prompt("Как называется ваш проект?");
//     } while (appData.isNumber(appData.title));

//     for (let i = 0; i < 2; i++) {
//       let price = 0;
//       let name='';
//       do {
//         name = prompt("Какие типы экранов нужно разработать?");
//       } while (appData.isNumber(name));
//       do {
//         price = +prompt("Сколько будет стоить данная работа?");
//       } while (!appData.isNumber(price));
//       appData.screens.push({ id: i, name: name, price: price });
//     };
//     for (let i = 0; i < 2; i++) {
//       let price = 0;
//       let name='';
//       do {
//         name = prompt("Какой дополнительный тип услуги нужен?");
//       } while (appData.isNumber(name));
//       do {
//         price = +prompt("Сколько это будет стоить?");
//       } while (!appData.isNumber(price));
//       appData.services[name] = +price;
//     }
//     appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//   },
//   addPrices: () => {
//     for (let screen of appData.screens) {
//       appData.screenPrice += screen.price;
//     }
//     for (let key in appData.services) {
//       appData.allServicePrices += appData.services[key]
//     }
//   },
//   getTitle: () => {
//     appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLocaleLowerCase();
//   },
//   getServicePercentPrices: () => {
//     appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
//   },
//   getFullPrice: () => {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//   },

//   getRollBackMessage: (price) => {
//     if (price >= 30000) {
//       return "Даем скидку в 10%";
//     } else if (price >= 15000 && price < 30000) {
//       return "Даем скидку в 5%";
//     } else if (price >= 0 && price < 15000) {
//       return "Скидка не предусмотрена";
//     } else if (price < 0) {
//       return "Что то пошло не так";
//     }
//   },
//   isNumber: function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num)&& num !== 0;
//   },
//   logger: () => {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
  
//   },
// };

// appData.start();