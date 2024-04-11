"use strict";

const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    service1: "",
    service2: "",
    servicePercentPrice: 0,
    allServicePrices: 0,
    fullPrice: 0,
    asking: () => {
        appData.title = prompt("Как называется ваш проект?", "калькулятор верстки");
        appData.screens = prompt(
            "Какие типы экранов нужно разработать?",
            "Простые, Сложные, Интерактивные"
        );
        do {
            appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice));
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getTitle: () => {
        return (
            appData.title.trim()[0].toUpperCase() +
            appData.title.trim().slice(1).toLocaleLowerCase()
        );
    },
    getServicePercentPrices: () => {
        return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    },
    getFullPrice: () => {
        return appData.screenPrice + appData.allServicePrices;
    },
    getAllServicePrices: () => {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let price = 0;
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }

            do {
                price = +prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));
            sum += +price;
        }
        return sum;
    },
    getRollBackMessage: (price) => {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что то пошло не так";
        }
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    logger: () => {
        for (let key in appData) {
            console.log('свойство  ' + key + '  метод  ' + appData[key]);
        }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    },
    start: () => {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.title = appData.getTitle();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.logger();

    }

};

appData.start();




