// ==================================================================================================
// TASK 01
// const arrWords = ['a', 'b', 'c'];
// const arrNum = [1, 2, 3];
//
// const newArr = arrNum.concat(arrWords);
// console.log(newArr);

// TASK 02
// const arrWords = ['a', 'b', 'c'];
//
// arrWords.push(1);
// arrWords.push(2);
// arrWords.push(3);
//
// console.log(arrWords);

// TASK 03
// const arrNum = [1, 2, 3];
// const arrNum2 = [4,5,6];
//
// const newArr = arrNum.concat(arrNum2);
//
// console.log(newArr);

// TASK 04
// const arrNum = [1, 2, 3];
//
// arrNum.reverse();
//
// console.log(arrNum);

// TASK 05
// const arrNum = [1, 2, 3];
//
// arrNum.push(4);
// arrNum.push(5);
// arrNum.push(6);
//
// console.log(arrNum);

// TASK 06
// const arrNum = [1, 2, 3];
//
// arrNum.unshift(6);
// arrNum.unshift(5);
// arrNum.unshift(4);
//
// console.log(arrNum);

// TASK 07
// const arr = ['js', 'css', 'jq'];
//
// console.log(arr[0]);

// TASK 08
// const arr = ['js', 'css', 'jq'];
//
// console.log(arr[arr.length-1]);

// TASK 09
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(0, 3);
//
// console.log(newArr);

// TASK 10
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(3);
//
// console.log(newArr);

// TASK 11
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
//
// console.log(arr);

// TASK 12
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.splice(1,3);
//
// console.log(newArr);

// TASK 13
// const arr = [1, 2, 3, 4, 5];
//
// arr.splice(3,0,'a','b','c');
//
// console.log(arr);

// TASK 14
// const arr = [1, 2, 3, 4, 5];
//
// arr.splice(1, arr.length-1,'a','b',2,3,4,'c',5,'e');
// console.log(arr);

// ================================================================

// TASK 01
// const arr = [1,2,3,4,5];
//
// const rand = Math.floor(Math.random()*arr.length);
//
// alert(arr[rand]);

// TASK 02
// const animale = prompt('Введите любимое животное');
//
// const arr = ['cat', 'dog', 'rabbit'];
//
// const rand = Math.floor(Math.random()*arr.length);
//
// if(arr[rand] === animale) {
//   alert('Вы молодец');
// } else {
//   alert('Пока');
// }

// TASK 03
// const player = prompt('Выбирите себе оружие');
// const arr = ['камень', 'ножници', 'бумага'];
//
// const rand = Math.floor(Math.random()*arr.length);
//
// if (player === null) {
//   alert('Пока');
// } else if (arr[rand] === 'камень' && player === 'камень') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('ничья');
// } else if (arr[rand] === 'камень' && player === 'ножници') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('компьютер победил');
// } else if (arr[rand] === 'камень' && player === 'бумага') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('вы победили');
// } else if (arr[rand] === 'ножници' && player === 'камень') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('вы победили');
// } else if (arr[rand] === 'ножници' && player === 'ножници') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('ничья');
// } else if (arr[rand] === 'ножници' && player === 'бумага') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('компьютер победил');
// } else if (arr[rand] === 'бумага' && player === 'камень') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('компьютер победил');
// } else if (arr[rand] === 'бумага' && player === 'ножници') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('вы победили');
// } else if (arr[rand] === 'бумага' && player === 'бумага') {
//   alert(`Компьютер выбрал ${arr[rand]} \n Вы выбрали ${player}`);
//   alert('ничья');
// }

// TASK 04
// const inputUsr = prompt('Введите что-то пожалуйста');
//
// let arr = inputUsr.split(' ');
// let newArr = arr.slice();
//
// newArr.reverse();
//
// newArr = newArr.join(' ');
// arr = arr.join(' ');
//
// alert(`Первая строка = ${arr} \n Вторая строка = ${newArr}`);

// TASK 05
// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col'];
// let flag = 0;
//
// const inputLogin = prompt('Введите логин');
//
// for (let i = 0; i < logins.length; i++) {
//   if (inputLogin === logins[i]) {
//     flag = 1;
//   } else {
//     continue;
//   }
// }
//
// if (flag === 1) {
//   alert('уже существует');
// } else {
//   alert('поздравляем');
// }

// ================================================================================

// TASK 01
// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// console.log(users);
//
// users.shift();
// console.log(users);
//
// users.pop();
// console.log(users);
//
// users.unshift('Lux');
// console.log(users);
//
// users.push('Jay', 'Kiwi');
// console.log(users);
//
// const userToDelete = "Ajax";
// const indexUser = users.indexOf(userToDelete);
// users.splice(indexUser,1);
// console.log(users);
//
// const userToInsertBefore = "Jay";
// const indexUser1 = users.indexOf(userToInsertBefore);
// users.splice(indexUser1,0,'Kong');
// console.log(users);

// TASK 02
// const arr = [];
//
// for (let i = 4; i < 401; i++) {
//   arr[i] = i;
//   console.log(i);
// }

// console.log(arr);
// TASK 03
// for (let i = 4; i < 14; i+=3) {
//   console.log(i);
// }

// TASK 04
// for (let i = 654; i >= 0; i--) {
//   console.log(i);
// }

// TASK 05
// for (let i = 1983; i < 2018; i++) {
//   console.log(i);
// }

// TASK 06
// let n = 1000;
// let num = 0;
//
// for (let i = 0; n > 50; i++) {
//   n = n/2;
//   num = i;
// }
//
// console.log(num);

// TASK 07
// const arr = [2, 5, 9, 15, 0, 4];
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// TASK 08
// const arr = [-2, -1, 0, 1, 2];
// let result = 0;
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result += arr[i];
//   }
// }
//
// console.log(result);

// TASK 09
// const arr = [1, 2, 5, 9, 4, 13, 4, 10];
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     alert('Есть совпадение');
//     break;
//   } else {
//     continue;
//   }
// }

// TASK 10
// const arr = ['10', '20', '30', '50', '235', '3000'];
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][0] === '1' || arr[i][0] === '2' || arr[i][0] === '5') {
//     console.log(arr[i]);
//   } else {
//     continue;
//   }
// }

// TASK 11
// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
//
// for (let i = 0; i < users.length; i++) {
//   console.log(`${i+1} - ${users[i]}`);
// }

// TASK 12
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;
//
// let words = message.split(" ");
// console.log(words);
//
// console.log(words.length);
//
// for (let value of words) {
//   price += 10;
// }
// console.log(price);

// TASK 13
// let inputUsr = Number(prompt('Введите число больше 100'));
//
// do {
//   if (inputUsr === 0) {
//     alert('Пока!');
//     break;
//   } else if(inputUsr <= 100){
//     inputUsr = Number(prompt('Введите число еще раз'));
//   }
// } while (inputUsr < 100);

// TASK 14
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];
//
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > num) {
//     matched.push(numbers[i]);
//   }
// }
// console.log(matched);

// TASK 15
// const message = "May the force be with you";
// let longestWord;
//
// const arr = message.split(" ");
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i+1]) {
//     longestWord = arr[i];
//   }
// }
//
// console.log(longestWord);

// TASK 16
// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
// const min = numbers[0];
// const max = numbers[numbers.length - 1];
// const inputUser = Number(prompt(`Введите число от ${min} до ${max}`));
//
// if (numbers.includes(inputUser)) {
//   alert('Поздравляем, Вы угадали!');
// } else {
//   alert('Сожалеем, Вы не угадали!');
// }

// TASK 17
// const arr = [];
// let i = 0;
// let result = 0;
//
// do {
//   arr[i] = prompt('Введите произвольное число');
//   if (arr[i] === null) {
//     arr.pop();
//     break;
//   } else {
//     i++;
//   }
// } while (true);
//
// for (let value of arr) {
//   result += Number(value);
// }
// console.log(result);

// TASK 18
// const numbers = [12, 15, 25, 37, 41];
//
// const min = numbers[0];
// const max = numbers[numbers.length - 1];
// const inputUser = Number(prompt(`Введите число от ${min} до ${max}`));
//
//
// if (isNaN(inputUser)) {
//   alert('Введите пожалуйста число');
// } else if (numbers.includes(inputUser)) {
//   alert('Поздравляем, Вы угадали!');
// } else {
//   alert('Сожалеем, Вы не угадали!');
// }
//
// TASK 19
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
// TASK 20
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
