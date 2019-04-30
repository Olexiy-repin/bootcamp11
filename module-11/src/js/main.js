'use strict'

// HOMEWORK
const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const template = document.querySelector('#card').innerHTML;
const compile = Handlebars.compile(template);
const btnContainer = document.querySelector('.btn-container');

function renderCard(e) {
  e.preventDefault();

  if(e.target.getAttribute('type') === 'submit') {
    let inputAll = [...document.querySelectorAll('input')];
    inputAll = inputAll.filter(el => el.checked);
    let realCardContainer = document.querySelector('.card-container');
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    realCardContainer.replaceWith(cardContainer);
    let newLaptops = [];

    let filter = {
      size : [],
      color : [],
      date : [],
    }

    inputAll.forEach(el => {
      if(el.getAttribute('name') === 'size') {
        console.log('ok');
        filter.size.push(el.value);
      } else if (el.getAttribute('name') === 'color') {
        filter.color.push(el.value);
      } else if (el.getAttribute('name') === 'release_date') {
        filter.date.push(el.value);
      }
    });

    laptops.forEach(el => {
      if (filter.size.find(elm => Number(elm) === el.size)) {
        if (filter.color.find(elm => elm === el.color)) {
          if (filter.date.find(elm => Number(elm) === el.release_date)) {
            newLaptops.push(el);
          } else if (filter.date.length == 0) {
            newLaptops.push(el);
          }
        } else if (filter.date.find(elm => Number(elm) === el.release_date)) {
          if (filter.color.find(elm => elm === el.color)) {
            newLaptops.push(el);
          }
        } else if (filter.color.length == 0 && filter.date.length == 0) {
          newLaptops.push(el);
        }
      } else if (filter.color.find(elm => elm === el.color)) {
        if (filter.date.find(elm => Number(elm) === el.release_date)) {
          if (filter.size.find(elm => Number(elm) === el.size)) {
            newLaptops.push(el);
          } else if (filter.size.length == 0) {
            newLaptops.push(el);
          }
        } else if (filter.size.length == 0 && filter.date.length == 0) {
          newLaptops.push(el);
        }
      } else if (filter.date.find(elm => Number(elm) === el.release_date)) {
        if (filter.size.find(elm => Number(elm) === el.size)) {
          if (filter.color.find(elm => Number(elm) === el.color)) {
            newLaptops.push(el);
          } else if (filter.color.length == 0) {
            newLaptops.push(el);
          }
        } else if (filter.color.length == 0 && filter.size.length == 0) {
          newLaptops.push(el);
        }
      }
    })

    newLaptops.forEach(el => cardContainer.insertAdjacentHTML('afterbegin', compile(el)));
  } else if (e.target.getAttribute('type') === 'reset') {
    window.location.reload();
  }
}


btnContainer.addEventListener('click', renderCard);
