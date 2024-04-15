"use strict";
const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const rollbackInput = document.querySelector('.rollback input');
const rollbackSpan = document.querySelector('.rollback span');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen');


const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicesPercent: {},
  servicesNumber: {},
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  countInputs: 0,
  isError: false,
  init: () => {
    appData.addTitle()
    appData.addRollback()
    startBtn.addEventListener("click", appData.start)
    buttonPlus.addEventListener("click", appData.addScreensBlock)
    appData.addScreens()
  },
  addTitle: () => {
    document.title = title.textContent;
  },
  start: () => {
    appData.checkFields()
    if (!appData.isError) {
      appData.addScreens()
      appData.addServices()
      appData.addPrices(),
        //   appData.getServicePercentPrices(),
        //   appData.logger()
        // console.log(appData);
        appData.showResult()
    }
  },
  showResult: () => {
    total.value = appData.screenPrice
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    fullTotalCount.value = appData.fullPrice
    totalCountRollback.value = appData.servicePercentPrice
    totalCount.value = appData.countInputs

  },

  addScreens: () => {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        countInput: +input.value,
      });
    })
  },

  addServices: () => {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type="text"]')

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    })
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type="text"]')

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    })

  },
  addScreensBlock: () => {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    screens = document.querySelectorAll('.screen');
  },

  addPrices: () => {
    for (let screen of appData.screens) {
      appData.screenPrice += screen.price;
      appData.countInputs += screen.countInput;
    }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }
    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },

  addRollback: () => {
    rollbackInput.addEventListener("input", () => {
      rollbackSpan.innerHTML = rollbackInput.value;
      appData.rollback = +rollbackInput.value
    });

  },
  checkFields: () => {
    appData.isError=false;
    screens = document.querySelectorAll('.screen');
   screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      for (let i = 0; i < screens.length; i++) {
        if (select.value.length === 0 || input.value.length === 0) {
          appData.isError = true;
        }
      }
    })
  },
  logger: () => {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);

  },
};

appData.init();