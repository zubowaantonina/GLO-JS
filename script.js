
let title = 'Курс "JavaScript"';
console.log(typeof title);
let screens = 'Простые, Сложные, Интерактивные';
console.log(screens.length);
let screenPrice = 10;
console.log('Стоимость верстки экранов  ' + screenPrice + ' рублей/ долларов/гривен/юани');
let rollback = 10;
let fullPrice = 50000;
console.log('“Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(typeof fullPrice);
let adaptive = false;
console.log(typeof adaptive);


screens = screens.toLowerCase();//приводим к нижнему регистру
screens = screens.split(/\s*,\s*/);//разбиваем строку на массив
console.log(screens);


console.log( 'Процент отката посреднику за работу ' + fullPrice * (rollback/100)+' рублей');//Процент отката посреднику за работу