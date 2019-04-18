'use strict'

// ============== OBJECT HOMEWORK ==============
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

// ============== HOMEWORK KONSTRUCTORS ==============
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
