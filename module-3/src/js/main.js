'use strict'
//=============================== task 01 =======================

// Заполните массив 10-ю иксами с помощью цикла.
// const newArr = [];
//
// while (newArr.length < 10) {
//   newArr.push('x');
// }
//
// console.log(newArr);

//=============================== task 02 =======================

// Заполните массив числами от 1 до 10 с помощью цикла.
// const newArr = [];
// let i = 0;
//
// while (newArr.length < 10) {
//   newArr.push(++i);
// }
//
// console.log(newArr);

//=============================== task 03 =======================

// Дана строка, например, '123456'. Сделайте из нее '214365'.
// const str = '123456';
// const arr = str.split('');
//
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     let astr = arr[i-1];
//     arr[i-1] = arr[i];
//     arr[i] = astr;
//   }
// }
//
// const newStr = arr.join(' ');
//
// console.log(newStr);

//=============================== task 04 =======================

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// const isNumberInRange = (number) => {
//   if (number > 0 && number < 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// console.log(isNumberInRange(10));

//=============================== task 05 =======================

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// console.log(isEven(5));

//=============================== task 06 =======================

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//
// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// const newArr = [];
// for (let key of arr) {
//   if(isEven(key)) {
//     newArr.push(key);
//   }
// }
//
// console.log(newArr);

//=============================== task 07 =======================

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой

// let str ='abcde abcde abcde';
//
// const ucfirst = (str) => {
//   str = str.charAt(0).toUpperCase() + str.slice(1);
//   return str;
// }
//
// console.log(ucfirst(str));

//=============================== task 08 =======================

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false

// const str = 'яблоко';
// const arr = ['банан', 'яблоко', 'персик'];
//
// const inArray = (str, arr) => {
//     if(arr.includes(str)) {
//       return true;
//     } else {
//       return false;
//     }
// }
//
// console.log(inArray(str, arr));

//=============================== task 09 =======================

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)
// const getDivisors = (number) => {
//   let arr = [];
//   for (let i = 0; i < number+1; i++) {
//     if(number % i === 0) {
//       arr.push(number/i);
//     }
//   }
//   return arr.reverse();
// }
//
// console.log(`Делители числа 50 = ${getDivisors(50)}`);

//=============================== task 10 =======================


/*
  Напиши функцию checkNumberType(num)

  Функция получает число num как аргумент и возвращает
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// const checkNumberType = (num) => {
//   if(num % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }
//
// // Вызовы функции для проверки
// console.log( checkNumberType(2) ); // 'Even'
//
// console.log( checkNumberType(46) ); // 'Even'
//
// console.log( checkNumberType(3) ); // 'Odd'
//
// console.log( checkNumberType(17) ); // 'Odd'
