'use strict'
// HOMEWORK
const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const createPostCard = (post) => {
  let container = document.querySelector('.card-container');
  let div = document.createElement('div');
  let divBody = document.createElement('div');
  let img = document.createElement('img');
  let h2 = document.createElement('h2');
  let pDesc = document.createElement('p');
  let pDate = document.createElement('p');
  let pRat = document.createElement('p');
  let link = document.createElement('a');

  div.className = 'movie';
  container.append(div);
  img.setAttribute('src', `${post.img}`);
  img.setAttribute('alt', 'movie image');
  img.className = 'movie__image';
  div.prepend(img);
  divBody.className = 'movie__body';
  img.after(divBody);
  h2.className = 'movie__title';
  h2.innerHTML = `${post.title}`;
  divBody.prepend(h2);
  pDesc.className = 'movie__description';
  pDesc.innerHTML = `${post.text}`;
  h2.after(pDesc);
  pDate.className = 'movie__date';
  pDate.innerHTML = 'Released: 1972-03-14';
  pDesc.after(pDate);
  pRat.className = 'movie__rating';
  pRat.innerHTML = 'Rating: 8.6';
  pDate.after(pRat);
  link.className = 'card-link';
  link.innerHTML = `${post.link}`;
  link.setAttribute('href', '#');
  pRat.after(link);
}

const createCards = posts => {
  posts.forEach(el => createPostCard(el));
}

createCards(posts);
