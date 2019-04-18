'use strict'
// ============== HOMEWORK ==============
// const arr = [];
// let i = 0;
// let inputUser = prompt('Введите число');;
// let result = 0;
// let index;
//
// do {
//   if (inputUser === null) {
//     break;
//   } else if (isNaN(Number(inputUser))) {
//     inputUser = prompt('Введите пожалуйста число');
//     i++;
//     continue;
//   } else {
//     arr[i] = Number(inputUser);
//     i++;
//   }
//   inputUser = prompt('Введите число');
// } while (true);
//
// for (let value of arr) {
//   if (value === undefined) {
//     continue;
//   } else {
//     result += value;
//   }
// }
//
// alert(`Общая сумма чисел равна ${result}`);
//
// TASK 1.1
// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;
// let inputUser = prompt('Введите свой пароль');
//
// do {
//   if (inputUser === null) {
//     break;
//   } else if (passwords.includes(inputUser)) {
//     alert('Добро пожаловать!');
//     break;
//   } else {
//     attempts--;
//     alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
//     if (attempts === 0) {
//       alert('У вас закончились попытки, аккаунт заблокирован!');
//       break;
//     }
//     inputUser = prompt('Введите свой пароль');
//   }
// } while (true);
