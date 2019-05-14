'use strict';

( num => {
  const arr = [1, 2, 3, 4, 5];

  return console.log(arr.reduce((acc,el) => acc + el * num, 0));
})(2);

const myFunc = () => {
  const getName = () => 'Sergey';
  const getLastName = () => 'Pupkin';

  return ({
    getName,
    getLastName
  });
};

const myFuncMethods = myFunc();

console.log(myFuncMethods.getName());
