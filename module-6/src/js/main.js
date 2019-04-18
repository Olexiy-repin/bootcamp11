'use strict'
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
