'use strict'
// TASK NUMBER 01
// const name = 'Генератор защитного поля';
// let price = 1000;
//
// price = 2000;
//
// console.log(`Выбран <${name}>, цена за штуку ${price} кредитов`);

// TASK NUMBER 02
// const a = 10;
//
// if (a === 10) {
//   console.log('true');
// } else {
//   console.error('error');
// }

// TASK NUMBER 03
// let min = Math.floor(Math.random() * 60);
// alert(min);
//
// if (min >= 0 && min < 15) {
//   alert('Первая четверть часа');
// } else if(min >=15 && min < 30) {
//   alert('Вторая четверть часа');
// } else if (min >=30 && min < 45) {
//   alert('Третья четверть часа');
// } else if (min >=45 && min < 60) {
//   alert('Четвертая четверть часа');
// }

// TASK NUMBER 04
// const day = 17;
// const month = 10;
// const year = 2048;
//
// const date = `${day} \\\ ${month} \\\ ${year}`;
// const message = `Доброе утро, cегодня ${date}, за бортом отличная погода!`;
//
// console.log(message);

// TASK NUMBER 05
// const name = 'Mango';
// const date = '14/08/2137';
// const roomtype = 'люкс';
//
// const message = `${name} прибывает на отдых ${date} в ${roomtype}`;
// console.log(message);

// TASK NUMBER 06
// const correctPassword = 'jqueryismyjam';
// const inputPass = prompt('Введите пароль доступа');
//
// if (inputPass === null) {
//   alert('Ожидаю ввода пароля');
// } else if(inputPass === correctPassword) {
//   alert('Доступ в секретный бункер разрешен!');
// } else {
//   alert('Активирована система защиты!');
// }

// TASK NUMBER 07
// const total = 100;
//
// const inputUsr = Number(prompt('Введите желаемое количество товаров'));
//
// if (inputUsr > total) {
//   alert('На складе недостаточно твоаров!');
// } else if (inputUsr === total) {
//   alert('Вы забираете весь товар cо склада!');
// } else {
//   alert('Заказ оформлен, с вами свяжется менеджер');
// }

// TASK NUMBER 08
// let inputUsr = Number(prompt('Введите произвольное целое число'));
// let check = inputUsr%1;
//
// if (inputUsr === 0) {
//   alert('Ну и ладно, пока!');
// } else if(!check) {
//   alert('Спасибо!');
// } else {
//   alert('Необходимо было ввести целое число!');
// }

// TASK NUMBER 09
// let min = Math.floor(Math.random() * 100);
// alert(min);
// let type;

// if (min%2) {
//   type = 'odd';
//   console.log(type);
// } else {
//   type = 'even';
//   console.log(type);
// }

// type = min%2 ? type = 'odd' : type = 'even';
// console.log(type);

// TASK NUMBER 10
// const inputUsr = Number(prompt('Введите число от 1 до 5'));
//
// if (inputUsr === 0) {
//   alert('Очень жаль, приходите еще!');
// } else if(inputUsr >= 1 && inputUsr <= 5) {
//     switch(inputUsr) {
//       case 1:
//         alert('Каталог хостелов');
//         break;
//       case 2:
//         alert('Каталог бюджетных отелей');
//         break;
//       case 3:
//         alert('Каталог отелей ***');
//         break;
//       case 4:
//         alert('Каталог отелей ****');
//         break;
//       case 5:
//         alert('Каталог лучших отелей');
//         break;
//     }
// } else {
//   alert('Неверный ввод, возможные варианты 1-5!');
// }

// TASK NUMBER 11
// const country = prompt('Введите вашу страну');
//
// switch (country) {
//   case 'Китай':
//     alert(`Доставка в ${country} будет стоить 100 кредитов`);
//     break;
//   case 'Южная Америка':
//     alert(`Доставка в ${country} будет стоить 250 кредитов`);
//     break;
//   case 'Австралия':
//     alert(`Доставка в ${country} будет стоить 170 кредитов`);
//     break;
//   case 'Индия':
//     alert(`Доставка в ${country} будет стоить 80 кредитов`);
//     break;
//   case 'Ямайка':
//     alert(`Доставка в ${country} будет стоить 120 кредитов`);
//     break;
//   default:
//     alert('В вашей стране доставка не доступна');
//
// }

// TASK NUMBER 12
// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
//
// const userSeats = Number(prompt('Введите число необходимых мест'));
// const check = userSeats%1;
//
// if (userSeats === 0) {
//   alert('Нам очень жаль, приходите еще!');
// } else if(userSeats > 0 && !check) {
//     if(userSeats > 0 && userSeats < taba) {
//       alert(`Приятного путешествия в группе taba`);
//     } else if(userSeats >= 6 && userSeats < 15) {
//       const flag = confirm('Есть место в группе sharm, согласны ли вы?');
//       if (flag) {
//         alert(`Приятного путешествия в группе sharm`);
//       } else {
//         alert('Нам очень жаль, приходите еще!');
//       }
//     } else if(userSeats >= 15 && userSeats < 25) {
//       const flag = confirm('Есть место в группе hurgada, согласны ли вы?');
//       if (flag) {
//         alert(`Приятного путешествия в группе hurgada`);
//       } else {
//         alert('Нам очень жаль, приходите еще!');
//       }
//     } else {
//       alert('Извините, столько мест нет ни в одной группе!');
//     }
// }  else {
//   alert('Ошибка ввода');
// }

// TASK NUMBER 13
// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';
//
// const inputLogin = prompt('Enter login');
//
// if (inputLogin === null) {
//   alert('Отменено пользователем!');
// } else if(inputLogin === adminLogin) {
//   const inputPass = prompt('Enter password');
//   if (inputPass === null) {
//     alert('Отменено пользователем!');
//   } else if (inputPass === adminPassword) {
//     alert('Добро пожаловать!');
//   } else {
//     alert('Доступ запрещен, неверный пароль!');
//   }
// } else {
//   alert('Доступ запрещен, неверный логин!');
// }

// ADDITIONAL TASK 01
// const day = Math.floor((Math.random() * 31) + 1);
//
// alert(day);
//
// if (day >=1 && day <10) {
//   alert('Вы попали в первую декаду месяца');
// } else if (day >=10 && day < 20) {
//   alert('Вы попали во вторую декаду месяца');
// } else if (day >=20 && day < 32) {
//   alert('Вы попали в третью декаду месяца');
// }

// ADDITIONAL TASK 02
// const month = Math.floor((Math.random() * 12) + 1);
// alert(month);
//
// if (month >= 1 && month <=2) {
//   alert('Это зима детка');
//   switch (month) {
//     case 1:
//       alert('Чистый январь');
//       break;
//     case 2:
//       alert('Чистый февраль');
//       break;
//   }
// } else if (month >= 3 && month <=5) {
//   alert('Это весна детка');
//   switch (month) {
//     case 3:
//       alert('Чистый март');
//       break;
//     case 4:
//       alert('Чистый апрель');
//       break;
//     case 5:
//       alert('Чистый май');
//       break;
//   }
// } else if (month >= 6 && month <=8) {
//   alert('Это лето детка');
//   switch (month) {
//     case 6:
//       alert('Чистый июнь');
//       break;
//     case 7:
//       alert('Чистый июль');
//       break;
//     case 8:
//       alert('Чистый август');
//       break;
//   }
// } else if (month >= 9 && month <=11) {
//   alert('Это осень детка');
//   switch (month) {
//     case 9:
//       alert('Чистый сентябрь');
//       break;
//     case 10:
//       alert('Чистый октябрь');
//       break;
//     case 11:
//       alert('Чистый ноябрь');
//       break;
//   }
// } else if (month === 12) {
//   alert('Это зима детка');
//   alert('Чистый декабрь');
// }

// ADDITIONAL TASK 03
// const str = 'abcde';
//
// if (str[0] === 'a') {
//   alert('Первая буква а');
// } else {
//   alert('Первая буква не а');
// }

// ADDITIONAL TASK 04
// const str = '12345';
//
// if (str[0] === '1' || str[0] === '2' || str[0] === '3') {
//   alert('да');
// } else {
//   alert('нет');
// }

// ADDITIONAL TASK 05
// const str = '123';
//
// alert(Number(str[0]) + Number(str[1]) + Number(str[2]));

// ADDITIONAL TASK 06
// const str = '123456';
//
// const firstNumber = Number(str[0]) + Number(str[1]) + Number(str[2]);
// const secondNumber = Number(str[3]) + Number(str[4]) + Number(str[5]);
//
// if (firstNumber === secondNumber) {
//   alert('да');
// } else {
//   alert('нет');
// }
