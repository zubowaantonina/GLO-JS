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
  isReset: false,

  init: function () {
    this.addTitle()
    this.addRollback()
    startBtn.addEventListener("click", this.start)
    buttonPlus.addEventListener("click", this.addScreensBlock)
    resetBtn.addEventListener("click", this.reset)
    this.addScreens()
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.checkFields()
    if (!appData.isError) {
        appData.addScreens(),
        appData.addServices(),
        appData.addPrices(),
        //   appData.getServicePercentPrices(),
        //   appData.logger()
        // console.log(appData);
        appData.showResult()
        appData.disabled()

    }
  },
  showResult: function () {
    total.value = this.screenPrice
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
    fullTotalCount.value = this.fullPrice
    totalCountRollback.value = this.servicePercentPrice
    totalCount.value = this.countInputs
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        countInput: +input.value,
      });
    })
  },
  addServices:()=>  {
    otherItemsPercent.forEach((item)=>{
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
  addScreensBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    const imp = cloneScreen.querySelector('input[type="text"]')
    const sel = cloneScreen.querySelector('select')
    imp.value = '';
    sel.value = '';
    screens[screens.length - 1].after(cloneScreen);
    screens = document.querySelectorAll('.screen');
  },
  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += screen.price;
      this.countInputs += screen.countInput;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key]
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }
    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
  },
  addRollback: function () {
    rollbackInput.addEventListener("input", () => {
      rollbackSpan.innerHTML = rollbackInput.value + ' %';
      this.rollback = +rollbackInput.value
    });
  },
  checkFields: function () {
    this.isError = false;
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      for (let i = 0; i < screens.length; i++) {
        if (select.value.length === 0 || input.value.length === 0) {
          this.isError = true;
        }
      }
    })
  },
  disabled: function () {
    startBtn.style.display = "none"
    resetBtn.style.display = "flex"
    screens = document.querySelectorAll('.screen');
    buttonPlus.disabled = true
    screens.forEach.call((screens), function (screen) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      for (let i = 0; i < screens.length; i++) {
        select.disabled = true;
        input.disabled = true
      }
    })
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type="text"]')
      check.disabled = true;
      label.draggable = true
      input.disabled = true
    })
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      check.disabled = true;
      label.draggable = true
    })
  },
  reset: function () {
    startBtn.style.display = "flex"
    resetBtn.style.display = "none"
    buttonPlus.disabled = false;
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      for (let i =screens.length - 1; i >= 1; i--){
         screens[i].remove() 
      }
        select.disabled = false;
        input.disabled = false;
        select.value = '';
        input.value = '';
    })
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type="text"]')
      check.disabled = false;
      label.draggable = false;
      input.disabled = false;
      if (check.checked) {
        check.checked = false
        appData.servicesPercent[label.textContent] = 0;
      }
    })
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      check.disabled = false;
      label.draggable = false;
      if (check.checked) {
        check.checked = false
        appData.servicesPercent[label.textContent] = 0;
      }
    })
    appData.screens.length = 1,
    appData.screenPrice = 0
    total.value = ''
    appData.servicePricesPercent = 0
    appData.servicePricesNumber = 0
    totalCountOther.value = ''
    appData.fullPrice = 0
    fullTotalCount.value = ''
    appData.servicePercentPrice = 0
    totalCountRollback.value = ''
    appData.countInputs = 0
    totalCount.value = ''
    console.log(this.screens);

  },
  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
  },
};

appData.init();