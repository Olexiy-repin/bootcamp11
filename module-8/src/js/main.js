'use strict'
// HOMEWORK
/*
  Создайте компонент галлереи изображений следующего вида.

    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>

    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2


    Реализуйте функционал:

      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.

      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.

      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются
        динамически, при загрузке страницы.

      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.

      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.

      - Изображений может быть произвольное количество.

      - Используйте делегирование для элементов preview.

      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

      - CSS-оформление и имена классов на свой вкус.


    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

// const galleryItems = [
//   { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
//   { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
//   { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
//   { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
//   { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
// ];
//
// let fullImg = document.createElement('img');
// fullImg.setAttribute('src', 'img/fullview-1.jpg');
// fullImg.setAttribute('alt', 'first');
// document.querySelector('.fullview').prepend(fullImg);
//
// function createPreview(el) {
//   let previewImg = document.createElement('img');
//   previewImg.setAttribute('src', `${el.preview}`);
//   previewImg.setAttribute('alt', `${el.alt}`);
//   previewImg.setAttribute('data-fullview', `${el.fullview}`);
//
//   document.querySelector('.preview').append(previewImg);
// }
//
// function addPreview(arr) {
//   arr.forEach(el => createPreview(el));
// }
//
// addPreview(galleryItems);
//
// document.querySelector('.preview img').classList.add('preview-active');
//
// function clickPreview(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   let target = e.target;
//   let data = target.getAttribute('data-fullview');
//   let previewImg = document.querySelectorAll('.preview img');
//
//   if (target.parentNode.classList.contains('preview')) {
//     previewImg.forEach(el => el.classList.remove('preview-active'));
//     target.classList.add('preview-active');
//     document.querySelector('.fullview > img').src = data;
//   }
// }
//
// let gallery = document.querySelector('.image-gallery');
//
// gallery.addEventListener('click', clickPreview);
/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так,
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина
  аналогичный заданию выше.

  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию

  Тогда создание экземпляра будет выглядеть следующим образом.
*/

const galleryItems = [
  { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "img-1" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "img-2" },
  { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "img-3" },
  { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "img-4" },
  { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "img-5" },
];

class Gallery {
  constructor ({items, parentNode, defaultActiveItem}) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
  }
/* Создаем нашу основную сетку, добавляем в image-gallery: fullview и preview,
а в fullview добавляем нашу активную большую картинку
*/
  createGrid() {
    let fullview = document.createElement('div');
    let preview = document.createElement('div');
    fullview.className = 'fullview';
    preview.className = 'preview';

    this.parentNode.append(fullview);
    this.parentNode.append(preview);

    let fullviewImg = document.createElement('img');
    fullviewImg.setAttribute('src', `img/fullview-${this.defaultActiveItem}.jpg`);
    fullviewImg.setAttribute('alt', `img-${this.defaultActiveItem}`);
    fullview.prepend(fullviewImg);
  }
/*Мы принимаем с масива объектов по одному объекту в котором храняться: src, alt
и ссылка на большую картинку. Создаем img и добавляем ему соответствующие атрибуты
*/
  createItemsGallery(el) {
    let previewImg = document.createElement('img');
    previewImg.setAttribute('src', `${el.preview}`);
    previewImg.setAttribute('alt', `${el.alt}`);
    previewImg.setAttribute('data-fullview', `${el.fullview}`);

    document.querySelector('.image-gallery .preview').append(previewImg);

// Определяем наш активный элемент и присаиваем ему класс preview-active
    if (previewImg.alt === `img-${this.defaultActiveItem}`) {
      previewImg.classList.add('preview-active');
    }
  }
// Функция создает нашу сетку и заполняет preview картинками вызывая createItemsGallery
  createGallery () {
    this.createGrid();
    this.items.forEach(el => this.createItemsGallery(el));
  }
// Функция обработчик, для нашего слушателя
  clickGallery(e) {
    e.preventDefault();
    e.stopPropagation();
    let target = e.target;
    let data = target.getAttribute('data-fullview');
    let allPreviewImg = document.querySelectorAll('.preview img');

    if (target.parentNode.classList.contains('preview')) {
      allPreviewImg.forEach(el => el.classList.remove('preview-active'));
      target.classList.add('preview-active');
      document.querySelector('.fullview > img').src = data;
    }
  }
}

const gallery = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 1
});

gallery.createGallery();

let imageGallery = document.querySelector('.image-gallery');

imageGallery.addEventListener('click', gallery.clickGallery);

/* Далее плагин работает в автономном режиме */
