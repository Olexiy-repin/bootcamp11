"use strict";const posts=[{img:"https://placeimg.com/400/150/arch",title:"Post title 1",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",link:"link-1.com"},{img:"https://placeimg.com/400/150/nature",title:"Post title 2",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",link:"link-2.com"},{img:"https://placeimg.com/400/150/arch",title:"Post title 3",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",link:"link-3.com"}],createPostCard=e=>{let t=document.querySelector(".card-container"),i=document.createElement("div"),s=document.createElement("div"),m=document.createElement("img"),a=document.createElement("h2"),n=document.createElement("p"),o=document.createElement("p"),c=document.createElement("p"),r=document.createElement("a");i.className="movie",t.append(i),m.setAttribute("src",`${e.img}`),m.setAttribute("alt","movie image"),m.className="movie__image",i.prepend(m),s.className="movie__body",m.after(s),a.className="movie__title",a.innerHTML=`${e.title}`,s.prepend(a),n.className="movie__description",n.innerHTML=`${e.text}`,a.after(n),o.className="movie__date",o.innerHTML="Released: 1972-03-14",n.after(o),c.className="movie__rating",c.innerHTML="Rating: 8.6",o.after(c),r.className="card-link",r.innerHTML=`${e.link}`,r.setAttribute("href","#"),c.after(r)},createCards=e=>{e.forEach(e=>createPostCard(e))};createCards(posts);