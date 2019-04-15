// 'use strict'
// //
// // const he = {
// //   name: 'Bond',
// //   number: 7,
// //   getName() {
// //     console.log(this.number);
// //   },
// // }
// //
// // const she = Object.create(he);
// //
// // she.name = 'Julia';
// // she.age = 50;
// // she.boobsPower = 4;
// //
// // console.log(he);
// // console.log(she);
// //
// // for (let key in she) {
// //   if (she.hasOwnProperty(key)) {
// //     console.log(key);
// //   }
// // }
// //
// // he.getName();
//
// function DRAGON(name, level) {
//   this.name = name;
//   this.level = level;
// }
//
// DRAGON.prototype.getLevel = function(el) {
//   return this.level += el;
// }
//
// const dragon = new DRAGON('Bond', 80);
// dragon.getLevel(10);
//
// console.log(dragon);
//
// function DubleDragon(name, level,weapon) {
//
//   DRAGON.call(this, name, level);
//   this.weapon = weapon;
//
// }
//
// const dubleDragon = new DubleDragon('Maks', 9999, 'falos');
//
// DubleDragon.prototype.newName = function(value) {
//   return this.name = value;
// }
//
// dubleDragon.newName('Ben');
//
// console.log(dubleDragon);
//
//


// class MyClass {
//     constructor(name, xp, level) {
//       this.name = name;
//       this.xp = xp;
//       this.level = level;
//     }
//
//     getName() {
//       console.log(this.name);
//     }
//
//     minus(el) {
//       return this.xp -= el;
//     }
// }
//
// class NewClass extends MyClass {
//   constructor(name, xp, level, weapon) {
//     super(name, xp, level);
//     this.weapon = weapon;
//   }
// }
//
// const myClass = new MyClass('Bond', 100, 80);
//
// const newClass = new NewClass('Maksim', 50 , 20, 'Iron');
//
// console.log(newClass);
// myClass.minus(10);
// console.log(myClass);

// const doubleClass = new MyClass('Maksim', 20, 60);
//
// doubleClass.minus(20);
//
// console.log(doubleClass);

// =================== TASKS ===================

// TASK 01
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email.

  В prototype функции-конструктора добавь метод getInfo(),
  который выводит в консоль значения полей login и email.

  Обрати внимание, метод всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// function Account(login, email) {
//   this.login = login;
//   this.email = email;
// }
//
// Account.prototype.getInfo = function() {
//   console.log(`${this.login} : ${this.email}`);
// }
//
// const account = new Account('Mangozedog', 'mango@dog.woof');
//
// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// TASK 02
/*
  Напиши ES6 класс StringBuilder.

  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.

  Добавь классу следующие методы:

    - геттер value - возвращает текущее значение поля _value

    - append(str) - получает парметр str (строку) и добавляет ее в конец _value

    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value

    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//   constructor(str) {
//     this._value = str;
//   }
//
//   get value() {
//     return this._value;
//   }
//
//   append(str) {
//     return this._value += str;
//   }
//
//   prepend(str) {
//     return this._value = str += this._value;
//   }
//
//   pad(str) {
//     return this._value = str + this._value + str;
//   }
// }
//
// const builder = new StringBuilder('.');
//
// console.log(builder.value);
// builder.append('^');
// console.log(builder.value); // '.^'
// //
// builder.prepend('^');
// console.log(builder.value); // '^.^'
// //
// builder.pad('=');
// console.log(builder.value); // '=^.^='

// TASK 03
/*
 * Напиши класс Car с указанными свойствами и методами
*/

// class Car {
//   constructor({ maxSpeed = 0 }) {
//     /*
//       Добавь свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//         - maxSpeed - для хранения максимальной скорости
//         - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this._running = false;
//     this.distance = 0;
//   }
//
//   get running() {
//     return this._running;
//   }
//
//   turnOn() {
//     // Добавь код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//     this._running = true;
//     return true;
//   }
//
//   turnOff() {
//     // Добавь код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//     this._running = false;
//     return false;
//   }
//   //
//   accelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//     return this.speed = spd < this.maxSpeed ? spd : 0;
//   }
//   //
//   decelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     return this.speed = spd < this.maxSpeed && spd > 0 ? spd : 0;
//   }
//   //
//   drive(hours) {
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//     return this.distance = this._running ? hours * this.speed : 0;
//   }
// }
//
// const car = new Car({ maxSpeed: 100 });
//
// console.log(car.turnOn());
//
// console.log(car.turnOff());
//
// console.log(car.accelerate(10));
//
// console.log(car.decelerate(10));
//
// console.log(car.drive(20));

// TASK 04
/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/
//
// class Car {
//   constructor({ maxSpeed = 0 }) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this._running = false;
//     this.distance = 0;
//   }
//
//   get running() {
//     return this._running;
//   }
//
//   turnOn() {
//     this._running = true;
//     return true;
//   }
//
//   turnOff() {
//     this._running = false;
//     return false;
//   }
//
//   accelerate(spd) {
//     return this.speed = spd < this.maxSpeed ? spd : 0;
//   }
//
//   decelerate(spd) {
//     return this.speed = spd < this.maxSpeed && spd > 0 ? spd : 0;
//   }
//
//   drive(hours) {
//     return this.distance = this._running ? hours * this.speed : 0;
//   }
//
//   static getSpecs(obj) {
//     console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj._running}, distance: ${obj.distance}`);
//   }
// }
//
// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);
//
// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

// TASK 05
/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

// class Car {
//   constructor({ maxSpeed = 0, price = 0}) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this._running = false;
//     this.distance = 0;
//     this._price = price;
//   }
//
//   get running() {
//     return this._running;
//   }
//
//   get price() {
//     return this._price;
//   }
//
//   set price(value) {
//     return this._price = value;
//   }
//
//   turnOn() {
//     this._running = true;
//     return true;
//   }
//
//   turnOff() {
//     this._running = false;
//     return false;
//   }
//
//   accelerate(spd) {
//     return this.speed = spd < this.maxSpeed ? spd : 0;
//   }
//
//   decelerate(spd) {
//     return this.speed = spd < this.maxSpeed && spd > 0 ? spd : 0;
//   }
//
//   drive(hours) {
//     return this.distance = this._running ? hours * this.speed : 0;
//   }
//
//   static getSpecs(obj) {
//     console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj._running}, distance: ${obj.distance}`);
//   }
// }
//
// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.price); // 2000
// //
// car.price = 4000;
// console.log(car.price); // 4000

// HOMEWORK
const findPriceAndCalories = (obj, value, whatFind) => {
  let realPrice = 0;
  let realCalories = 0;

  if (whatFind === 'price') {
    for (let key in obj) {
      if (key === value || value.includes(key)) {
        realPrice += obj[key].price;
      }
    }
    return realPrice;
  } else if (whatFind === 'calories') {
    for (let key in obj) {
      if (key === value || value.includes(key)) {
        realCalories += obj[key].calories;
      }
    }
    return realCalories;
  }
}

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
    this._calculatePrice = 0;
    this._calculateCalories = 0;
  }

  addTopping(...args) {
    this._toppings = [...new Set(this._toppings.concat(args))];
    return this._toppings;
  }

  removeTopping(topping) {
    this._toppings.includes(topping) ? this._toppings.splice(this._toppings.indexOf(topping), 1) : this._toppings;
    return this._toppings;
  }

  get toppings() {
    return this._toppings;
  }

  get size() {
    return this._size;
  }

  get stuffing() {
    return this._stuffing;
  }

  get calculatePrice() {
    const gamSize = findPriceAndCalories(Hamburger.SIZES, this._size, 'price');
    const gamStuffing = findPriceAndCalories(Hamburger.STUFFINGS, this._stuffing, 'price');
    const gamToppings = findPriceAndCalories(Hamburger.TOPPINGS, this._toppings, 'price');
    return gamSize + gamStuffing + gamToppings;
  }

  get calculateCalories() {
    const gamSize = findPriceAndCalories(Hamburger.SIZES, this._size, 'calories');
    const gamStuffing = findPriceAndCalories(Hamburger.STUFFINGS, this._stuffing, 'calories');
    const gamToppings = findPriceAndCalories(Hamburger.TOPPINGS, this._toppings, 'calories');

    return gamSize + gamStuffing + gamToppings;
  }

}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SAUCE);

// hamburger.removeTopping(Hamburger.TOPPING_SAUCE);

console.log(hamburger.calculatePrice);
console.log(hamburger.calculateCalories);
console.log(hamburger);
