'use strict'
// HOMEWORK
/*
  Написать приложение для работы с REST сервисом,
  все функции делают запрос и возвращают Promise
  с которым потом можно работать.

  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.

  - функция getUserById(id) - должна вернуть пользователя с переданным id.

  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.

  - функция removeUser(id) - должна удалять из БД юзера по указанному id.

  - функция updateUser(id, user) - должна обновлять данные пользователя по id.
    user это объект с новыми полями name и age.

  Документацию по бэкенду и пример использования прочитайте
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками.
  А так же панелью для вывода результатов операций с бэкендом.
*/

const btnContainer = document.querySelector('.btn-container');
const input = document.querySelector('.input');
let result = document.querySelector('.result');

function changeUsers(e) {
  e.stopPropagation();
  e.preventDefault();
  let target = e.target;

  if (target.getAttribute('data-action') === 'getAll') {
    getAllUsers();
  } else if (target.getAttribute('data-action') === 'getId') {
    getUserById(input.value);
  } else if (target.getAttribute('data-action') === 'remove') {
    removeUser(input.value);
  }
}

function getUserById(id) {
  result.innerHTML = '';
  input.value = '';
  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
          result.innerHTML = `<p>id: ${data.data.id}   |   name: ${data.data.name}   |   age: ${data.data.age}</p>`
        })
}

function getAllUsers() {
  result.innerHTML = '';
  input.value = '';
  fetch('https://test-users-api.herokuapp.com/users/')
        .then(response => response.json())
        .then(data => {
          console.log(data.data);
          data.data.forEach(el => {
            result.innerHTML += `<p>id: ${el.id}   |   name: ${el.name}   |   age: ${el.age}</p>`
          });
        })
}

function addUser(name, age) {
  const about = {
    name : name,
    age : age,
  }

  let settings = {
    method : 'POST',
    body : JSON.stringify(about),
    headers : {
      "Content-type" : "application/json"
    }
  }

  fetch('https://test-users-api.herokuapp.com/users/', settings)
        .then(response => response.json())
        .then(data => console.log(data))
}

function removeUser(id) {
  input.value = '';
  result.innerHTML = '';
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {method : 'DELETE'})
        .then(response => {
          if (response.ok) return alert('delete success');
          throw new Erorr('delete error');
        })
}

function updateUser(id, user) {
  let settings = {
    method : 'PUT',
    body : JSON.stringify(user),
    headers : {
      "Content-type" : "application/json"
    }
  }

  fetch(`https://test-users-api.herokuapp.com/users/${id}`, settings)
        .then(response => {
          if(response.ok) return response.json();
          throw new Error('error update');
        })
}

btnContainer.addEventListener('click', changeUsers);
