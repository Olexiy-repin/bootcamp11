'use strict'

// HOMEWORK
/*
  Создайте скрипт секундомера.
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/

  Изначально в HTML есть разметка:

  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>

  Добавьте следующий функционал:

  - При нажатии на кнопку button.js-start, запускается таймер, который считает время
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).

    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.

  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause',
    а функционал при клике превращается в оставновку секундомера без сброса
    значений времени.

    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.

  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени,
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени
    с 6 секунд, а не с 16.

    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.

  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.

  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Выполните домашнее задание используя класс с полями и методами.

  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет
  динамически создана вся разметка для секундомера.

  Должна быть возможность создать сколько угодно экземпляров секундоментов
  на странице и все они будут работать независимо.

  К примеру:

  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);

  Где parent* это существующий DOM-узел.
*/

let content = document.querySelector('.js-time');
let startBtn = document.querySelector('.js-start');
let resetBtn = document.querySelector('.js-reset');
let lapBtn = document.querySelector('.js-take-lap');
let resultTimer;
let result;
let startDate;
let getStartDate;
let value = 0;
let contentP;
let flag = false;
let setIntervalId;

function changeButtonTimer () {
  if (flag) {
    value = resultTimer;
    clearInterval(setIntervalId);
    startBtn.textContent = 'continue';
    flag = false;
    resetBtn.disabled = false;
  } else {
    if (startBtn.textContent === 'continue') {
      let newDate1 = new Date();
      value = newDate1.getTime() - value;
      getStartDate += value;
      resetBtn.disabled = true;

      startBtn.textContent = 'pause';
      startTimer();
    } else {
      startDate = new Date();
      getStartDate = startDate.getTime();
      startTimer();
      startBtn.textContent = 'pause';
      resetBtn.disabled = true;
    }
  }
}

function lapTimer() {
  let li = document.createElement('li');
  li.textContent = contentP;
  document.querySelector('.js-laps').append(li);
}

function resetTimer() {
  clearInterval(setIntervalId);
  content.textContent = '00:00.0';
  let ul = document.createElement('ul');
  ul.classList.add('js-laps', 'laps');

  contentP = 0;
  value = 0;
  document.querySelector('.js-laps').replaceWith(ul);
  startBtn.textContent = 'start';
}

function startTimer () {

  flag = true;

  setIntervalId = setInterval(function () {
    let newDate = new Date();

    let currentDate = newDate.getTime() - (getStartDate);

    let currentMiliseconds = currentDate%1000;
    currentDate -= currentMiliseconds;
    currentMiliseconds = Math.floor(currentMiliseconds/10);
    currentDate = Math.floor(currentDate/1000);

    let currentSeconds = currentDate%60;
    currentDate -= currentSeconds;
    currentDate = Math.floor(currentDate/60);

    let currentMinutes = currentDate%60;
    currentDate -= currentMinutes;
    currentDate = Math.floor(currentDate/60);

    if (currentMinutes < 10) {
      content.textContent = `0${currentMinutes}:`;
    } else {
      content.textContent = `${currentMinutes}:`;
    }
    if (currentSeconds < 10) {
      content.textContent += `0${currentSeconds}.`;
    } else {
      content.textContent += `${currentSeconds}.`;
    }

    content.textContent += `${currentMiliseconds}`;

    contentP = content.textContent;
    resultTimer = newDate.getTime();
  }, 10);
}

startBtn.addEventListener('click', changeButtonTimer);
lapBtn.addEventListener('click', lapTimer);
resetBtn.addEventListener('click', resetTimer);
