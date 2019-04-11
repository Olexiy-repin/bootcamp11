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

//=============================== task 11 =======================

/*
  Напиши функцию formatString(str)

  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее.
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего
    возвращает укороченную версию.
*/

// const formatString = (str) => {
//   if (str.length > 40) {
//     return str.substring(0, 40) + '...';
//   } else {
//     return str;
//   }
// }
//
// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
//
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
//
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
//
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка

//=============================== task 12 =======================


/*
  Напиши функцию checkForSpam(str)

  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale

  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false

  PS: слова могут быть в произвольном регистре
*/

// const checkForSpam = str => {
//   str = str.toLowerCase();
//   if (str.includes('spam') || str.includes('sale')) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false
//
// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
//
// console.log( checkForSpam('Get best sale offers now!') ); // true
//
// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

// HOMEWORK
/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.

  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins

  🔔 Разбейте задачу на подзадачи с помощью функций.

  Напишите функцию isLoginValid(login), в которой проверьте количество символов
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра
  в заданный диапазон от 4-х до 16-ти символов включительно.

  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет
       логин в массив и возвращает строку 'Такой логин уже используется!'

  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это
     позволяет переиспользовать код и изменять логику работы функции только в одном месте,
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
//
// const isLoginValid = function(login) {
//   if (login.length >= 4 && login.length < 16) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// const isLoginUnique = function(allLogins, login) {
//   if(allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// };
//
// const addLogin = function(allLogins, login) {
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       allLogins.push(login);
//       return 'Логин успешно добавлен!';
//     } else {
//       return 'Такой логин уже используется!';
//     }
//   } else {
//     console.log('Ошибка! Логин должен быть от 4 до 16 символов');
//     return 0;
//   }
// };
//
// // Вызовы функции для проверки
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
