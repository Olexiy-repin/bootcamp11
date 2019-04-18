'use strict'
//========================== HOMEWORK =====================

/*
 * Используя массив (users) объектов пользователей, напишите функции которые с помощью
 * функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
 */

//  const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

/**
 * Получить массив имен (поле name) всех пользователей
 */
// const getAllNames = arr => {
//   const newArr = arr.map(el => el.name);
//
//   return newArr;
// };
//
// console.log(getAllNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/**
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
 */
// const getUsersByEyeColor = (arr, color) => {
//   const newArr = arr.filter(el => el.eyeColor === color);
//
//   return newArr;
// };
//
// console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// /**
//  * Получить массив имен пользователей по полу (поле gender)
//  */
// const getUsersByGender = (arr, gender) => {
//   const newArr = arr.filter(el => el.gender === gender).map(el => el.name);
//
//   return newArr;
// };
//
// console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//
//
// /**
//  * Получить массив только неактивных пользователей (поле isActive)
//  */
// const getInactiveUsers = arr => {
//   const newArr = arr.filter(el => el.isActive === true);
//
//   return newArr;
// };
//
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//
//
// /**
//  * Получить пользоваля (не массив) по email (поле email, он уникальный)
//  */
// const getUserByEmail = (arr, email) => {
//   const newObj = arr.find(el => el.email === email);
//
//   return newObj;
// };
//
// console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
//
//
// /**
//  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
//  */
// const getUsersWithAge = (users, min, max) => {
//   const newArr = users.filter(el => el.age > min && el.age < max);
//
//   return newArr;
// };
//
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
//
// console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/**
 * Получить общую сумму баланса (поле balance) всех пользователей
 */
// const getTotalBalance = arr => {
//   const total = arr.reduce((acc, el) => acc += el.balance, 0);
//
//   return total;
// };
//
// console.log(getTotalBalance(users)); // 20916


/**
 * Массив имен всех пользователей у которых есть друг с указанным именем
 */
// const getUsersByFriend = (arr, name) => {
//   const newArr = arr.filter(el => el.friends.includes(name)).map(el => el.name);
//
//   return newArr;
// };
//
// console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

/*
 ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
*/

/**
* Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
* повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
*/
// const getAllUniqueSkills = arr => {
//   const newArr = [...new Set(arr.map(el => el.skills)
//   .reduce((acc, el) => acc.concat(el).sort(), []))];
//   // const newArr1 = Array.from(newArr);
//   return newArr;
// };
//
// console.log(getAllUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

/**
* Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
*/
// const getUserNamesSortedByFriendsCount = arr => {
//   const newArr = arr.map( el => el).sort((a,b) => a.friends.length - b.friends.length).map(el => el.name);
//
//   return newArr;
// };
//
// console.log(getUserNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
