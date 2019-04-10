'use strict'
// ====================== OBJECT TASKS ======================

//====================== task01 ==================

//  Выведите на экран зарплату Пети и Коли.
// let obj = {
//   Коля: '1000',
//   Вася: '500',
//   Петя: '200'
// };
//
// console.log(`Зарплата Коли состовляет - ${obj['Коля']} \n Зарплата Пети состовляет - ${obj['Петя']}`);

//====================== task02 ==================

// Дан многомерный массив arr:
// let arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };
// // Выведите с его помощью слово 'голубой'.
// console.log(arr.ru[0]);

//====================== task03 ==================

// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
// var obj = {a: 1, b: 2, c: 3};
//
// console.log(obj.c);
// console.log(obj['c']);

//====================== task04 ==================

// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
// (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let days = {
//   '01' : 'Monday',
//   '02' : 'Tuesday',
//   '03' : 'Wednesday',
//   '04' : 'Thursday',
//   '05' : 'Friday',
//   '06' : 'Saturday',
//   '07' : 'Sunday'
// }
//
// console.log(days['01']);

//====================== task05 ==================

// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// let day = '03';
//
// let days = {
//   '01' : 'Monday',
//   '02' : 'Tuesday',
//   '03' : 'Wednesday',
//   '04' : 'Thursday',
//   '05' : 'Friday',
//   '06' : 'Saturday',
//   '07' : 'Sunday'
// }
//
// console.log(days[day]);

//====================== task06 ==================

// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день)

// let days = {
//   'ru' : ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//   'en' : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }
// let day = 3;
// console.log(days.ru[0]);
// console.log(days.en[2]);


//====================== task07 ==================
// Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.
// let lang = 'ru';
// let day = 3;
//
// let days = {
//   'ru' : ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//   'en' : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }
//
// console.log(days[lang][day]);


//====================== task08 ==================

/*
  Напиши скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - заменяет значение premium на false

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };
//
// user.mood = 'happy';
// user.hobby = 'javascript';
// user.premium = false;

// let arrKeys = Object.keys(user);
//
// for (let value of arrKeys) {
//   console.log(`${value} : ${user[value]}`);
// }

// let arrEnt =  Object.entries(user);
// console.log(arrEnt);
// for (let value of arrEnt) {
//   console.log(`${value[0]} : ${value[1]}`);
// }

//====================== task09 ==================

/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasks = {
//     ann: 29,
//     david: 351,
//     helen: 1,
//     lorence: 99
// };
//
// let max = 0;
// let name;
//
// for (let key in tasks) {
//   if (tasks[key] > max) {
//     max = tasks[key];
//     name = key;
//   }
// }
//
// console.log(name);

// let arrValues = Object.values(tasksCompleted);

// console.log(arrValues);
// let maxTasks = arrValues[0];
//
// for (let i = 1; i < arrValues.length; i++) {
//   if (arrValues[i] > maxTasks) {
//    maxTasks = arrValues[i];
//   } else {
//     continue;
//   }
// }
//
// console.log(maxTasks);
//
// for (let key in tasksCompleted) {
//   if(tasksCompleted.key === maxTasks) {
//     console.log(`${key} набрал(ала) больше всех очков`);
//   }
// }

//====================== task10 ==================

/*
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
// const countProps = (obj) => {
//   let total = 0;
//   for (let key in obj) {
//     total++;
//   }
//   return total;
// }
// console.log(countProps({})); // 0
//
// console.log(countProps({a: 1, b: 3, c: 'hello'})); // 3

//====================== task11 ==================

/*
  Напиши функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

// const isObjectEmpty = (obj) => {
//   for (let key in obj) {
//     return false
//   }
//   return true;
// }
//
// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
//
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
//
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false

//====================== task13 ==================

/*
 Напиши функцию countTotalSalary(salaries).

 Функция получает объект зарплат и считает общую сумму запрплаты работников.
 Возвращает общую сумму зарплаты.

 Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

// const countTotalSalary = (salaries) => {
//   let summ = 0;
//   const salariesValues = Object.values(salaries);
//
//   for (let key of salariesValues) {
//     summ += key;
//   }
//
//   return summ;
// }
//
// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0
//
//  console.log(
//    countTotalSalary({
//      mango: 100,
//      poly: 150,
//      alfred: 80
//    })
//  ); // 330

//====================== task14 ==================

/*
Напиши функцию getAllPropValues(arr, prop),
которая получает массив объектов и имя ключа.
Возвращает массив значений определенного поля prop
из каждого объекта в массиве
*/

// const getAllPropValues = (arr, prop) => {
//   for (let key of arr) {
//     if (key.hasOwnProperty(prop)) {
//       console.log(key[prop]);
//     }
//   }
// }
//
// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];
//
// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']
// //
// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']
// //
// console.log(
//   getAllPropValues(users, 'active')
// ); // []

//====================== task15 ==================

/*
 * Расставь отсутствующие this в методах объекта account
 */

// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       this.orders.push(order);
//     }
//   };
//
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
//
//   const orders = account.getOrders();
//   console.log(orders); // ['order-1', 'order-2', 'order-3']
//
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']

// ======= OBJECT HOMEWORK =======
// const Priority = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };
//
// const notepad = {
//   notes : [],
//   getNotes() {
//     return this.notes;
//   },
//   findNoteById(id) {
//     for (let key of this.notes) {
//       if(key['id'] === id) {
//         return key;
//       } else {
//         return undefined;
//       }
//     }
//   },
//   saveNote(note) {
//     this.notes.push(note);
//   },
//   deleteNote(id) {
//     for (let key of this.notes) {
//       if(key['id'] === id) {
//         this.notes.splice(this.notes.indexOf(key),1);
//       }
//     }
//   },
//   updateNoteContent(id, updatedContent) {
//     for (let key of this.notes) {
//       if(key['id'] === id) {
//         this.notes[this.notes.indexOf(key)] = {...key, ...updatedContent};
//       }
//     }
//   },
//   updateNotePriority(id, priority) {
//     for (let key of this.notes) {
//       if(key['id'] === id) {
//         key['priority'] = priority;
//       }
//     }
//   },
//   filterNotesByQuery(query) {
//     let newArr = [];
//     for (let key of this.notes) {
//       let titleLower = key['title'].toLowerCase();
//       let bodyLower = key['body'].toLowerCase();
//
//       if(titleLower.search(query) >= 0 || bodyLower.search(query) >= 0) {
//         newArr.push(key);
//       }
//     }
//     return newArr;
//   },
//   filterNotesByPriority(priority) {
//     let newArr = [];
//     for (let key of this.notes) {
//       if(key['priority'] === priority) {
//         newArr.push(key);
//       }
//     }
//     return newArr;
//   }
// };
//
//
// notepad.saveNote({
//   id: 'id-1',
//   title: 'JavaScript essentials',
//   body:
//     'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//   priority: Priority.HIGH,
// });
//
// notepad.saveNote({
//   id: 'id-2',
//   title: 'Refresh HTML and CSS',
//   body:
//     'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//   priority: Priority.NORMAL,
// });
//
// notepad.saveNote({
//   id: 'id-3',
//   title: 'Get comfy with Frontend frameworks',
//   body:
//     'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
//   priority: Priority.NORMAL,
// });
//
// notepad.saveNote({
//   id: 'id-4',
//   title: 'Winter clothes',
//   body:
//     "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
//   priority: Priority.LOW,
// });
//
// console.log(notepad.getNotes());

// ====================== KONSTRUKTOR TASKS ======================

//====================== task16 ==================
/*
  Напиши функцию-конструкор User для создания
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, возраст и друзей,
  будут переданы при вызове конструктора User.

  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

// function USER(obj) {
//   let objKeys = Object.keys(obj);
//
//   for (let key of objKeys) {
//     if (key === 'name') {
//       this.name = obj[key];
//     } else if (key === 'age') {
//       this.age = obj[key];
//     } else if (key === 'friends') {
//       this.friends = obj[key];
//     }
//   }
//
//   this.getInfo = function() {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
//   }
// }
//
// const mango = new USER({ name: "Mango", age: 2, friends: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 friends
//
// const poly = new USER({ name: "Poly", age: 3, friends: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 friends

//====================== task17 ==================

/*
 * Расставь отсутствующие this в конструкторе Account
 */

// function Account(login, password, type = "regular") {
//     this.login = login;
//     this.password = password;
//     this.type = type;
//
//     this.changePassword = function(newPassword) {
//       this.password = newPassword;
//     };
//
//     this.getInfo = function() {
//       console.log(`
//         Login: ${login},
//         Pass: ${password},
//         Type: ${type}
//       `);
//     };
//   }
//
//   const account = new Account("Mango", "qwe123", "premium");
//
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
//
//   account.changePassword("asdzxc");
//   console.log(account.password); // 'asdzxc'
//
//   account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

//====================== task18 ==================

/*
 * Напиши конструктор Storage(items), который будет создавать объекты для управления складом товаров
 * При вызове будет получать один аргумент - начальный массив товаров, и записываеть его в свойство items
 *
 * Добавь метод getItems, который возвращает массив текущих товаров
 * Добавь метод addItem(item), который получает новый товар и добавляет его к текущим
 * Добавь метод removeItem(item), который получет товар и, если он есть, удаляет его из текущих
 */

// function STORAGE(items) {
//   this.items = items;
//
//   this.getItems = function() {
//     return this.items;
//   }
//   this.addItem = function(item) {
//     this.items.push(item);
//   }
//   this.removeItem = function(item) {
//     if(this.items.includes(item)) {
//       this.items.splice(this.items.indexOf(item), 1)
//     }
//   }
// }
//
// const storage = new STORAGE([
//     "Нанитоиды",
//     "Пролонгер",
//     "Железные жупи",
//     "Антигравитатор"
//   ]);
//
//   const items = storage.getItems();
//   console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
//
//   storage.addItem("Дроид");
//   console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
//
//   storage.removeItem("Пролонгер");
//   console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// //====================== task19 ==================
// function CASHIER(name, productDatabase) {
//   let summ = 0;
//   let change = 0;
//
//   this.name = name;
//   this.productDatabase = productDatabase;
//   this.setCustomerMoney = function(value) {
//     this.customerMoney = value;
//   }
//   this.countTotalPrice = function(order) {
//     for(let key in productDatabase) {
//       if(productDatabase.hasOwnProperty(key) && order.hasOwnProperty(key)) {
//         summ += productDatabase[key] * order[key];
//       }
//     }
//     return summ;
//   }
//   this.countChange = function() {
//     if (this.customerMoney > summ) {
//       return change = this.customerMoney - summ;
//     } else {
//       return null;
//     }
//   }
//   this.onSuccess = function(change) {
//     console.log(`Спасибо за покупку, ваша сдача ${change}!`);
//   }
//   this.onError = function() {
//     console.log(`Очень жаль, вам не хватает денег на покупки`);
//   }
//   this.reset = function() {
//     this.customerMoney = 0;
//   }
// }
//
// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   chicken: 50,
//   cheese: 40,
// }
//
// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 1
// }
//
//
// const mango = new CASHIER('ololo', products);
// const totalPrice = mango.countTotalPrice(order);
// console.log(totalPrice);
//
// mango.setCustomerMoney(300);
// console.log(mango.customerMoney);
//
// const change = mango.countChange(totalPrice);
// console.log(change);
//
// if(change !== null) {
//   mango.onSuccess(change);
// } else {
//   mango.onError();
// }
//
// mango.reset();
// console.log(mango.customerMoney);



// HOMEWORK KONSTRUCTORS
// const Priority = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };
//
// function NOTEPAD(notes = []) {
//   this.notes = notes;
//
//   this.getNotes = function() {
//     return this.notes;
//   },
//   this.findNoteById = function(id) {
//     for (let key of this.notes) {
//       if (key['id'] === id) {
//         return key;
//       } else {
//         return undefined;
//       }
//     }
//   },
//   this.saveNote = function(note) {
//     this.notes.push(note);
//   },
//   this.deleteNote = function(id) {
//     for (let key of this.notes) {
//       if (key['id'] === id) {
//         this.notes.splice(this.notes.indexOf(key), 1);
//       }
//     }
//   },
//   this.updateNoteContent = function(id, updatedContent) {
//     for (let key of this.notes) {
//       if (key['id'] === id) {
//         this.notes[this.notes.indexOf(key)] = { ...key, ...updatedContent};
//       }
//     }
//   },
//   this.updateNotePriority = function(id, priority) {
//     for (let key of this.notes) {
//       if (key['id'] === id) {
//         key['priority'] = priority;
//       }
//     }
//   },
//   this.filterNotesByQuery = function(query) {
//     let newArr = [];
//     for (let key of this.notes) {
//       let titleLower = key['title'].toLowerCase();
//       let bodyLower = key['body'].toLowerCase();
//
//       if (titleLower.search(query) >= 0 || bodyLower.search(query) >= 0) {
//         newArr.push(key);
//       }
//     }
//     return newArr;
//   },
//   this.filterNotesByPriority = function(priority) {
//     let newArr = [];
//     for (let key of this.notes) {
//       if (key['priority'] === priority) {
//         newArr.push(key);
//       }
//     }
//     return newArr;
//   }
// }
//
// const initialNotes = [
//   {
//     id: 'id-1',
//     title: 'JavaScript essentials',
//     body:
//       'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//     priority: Priority.HIGH ,
//   },
//   {
//     id: 'id-2',
//     title: 'Refresh HTML and CSS',
//     body:
//       'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//     priority: Priority.NORMAL,
//   },
// ];
//
// const note1 = new NOTEPAD(initialNotes);
//
// /*
//  * Смотрю что у меня в заметках после инициализации
//  */
// console.log('Все текущие заметки: ', note1.getNotes());
//
// /*
//  * Добавляю еще 2 заметки и смотрю что получилось
//  */
// note1.saveNote({
//   id: 'id-3',
//   title: 'Get comfy with Frontend frameworks',
//   body:
//     'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
//   priority: Priority.NORMAL,
// });
//
// note1.saveNote({
//   id: 'id-4',
//   title: 'Winter clothes',
//   body:
//     "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
//   priority: Priority.LOW,
// });
// //
// console.log('Все текущие заметки: ', note1.getNotes());
//
// /*
//  * Зима уже близко, пора поднять приоритет на покупку одежды
//  */
// note1.updateNotePriority('id-4', Priority.NORMAL);
//
// console.log(
//   'Заметки после обновления приоритета для id-4: ',
//   note1.getNotes(),
// );
//
// /*
//  * Решил что фреймворки отложу немного, понижаю приоритет
//  */
// note1.updateNotePriority('id-3', Priority.LOW);
//
// console.log(
//   'Заметки после обновления приоритета для id-3: ',
//   note1.getNotes(),
// );
//
// /*
//  * Решил отфильтровать заметки по слову html
//  */
// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   note1.filterNotesByQuery('html'),
// );
//
// /*
//  * Решил отфильтровать заметки по слову javascript
//  */
// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   note1.filterNotesByQuery('javascript'),
// );
//
// /*
//  * Хочу посмотреть только заметки с нормальным приоритетом
//  */
// console.log(
//   'Отфильтровали заметки по нормальному приоритету: ',
//   note1.filterNotesByPriority(Priority.NORMAL),
// );
//
// /*
//  * Обновим контент заметки с id-3
//  */
// note1.updateNoteContent('id-3', {
//   title: 'Get comfy with React.js or Vue.js',
// });
//
// console.log(
//   'Заметки после обновления контента заметки с id-3: ',
//   note1.getNotes(),
// );
//
// /*
//  * Повторил HTML и CSS, удаляю запись c id-2
//  */
// note1.deleteNote('id-2');
// console.log('Заметки после удаления с id -2: ', note1.getNotes());
