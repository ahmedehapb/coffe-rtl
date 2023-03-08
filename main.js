let mainMenu =document.querySelector('.mainMenu');
let openMenu =document.querySelector('.openMenu');
let closeMenu =document.querySelector('.closeMenu');
let search =document.querySelector('.search');
let searchIcon =document.querySelector('.searchIcon');
let cart =document.querySelector('.cart');
let shopping =document.querySelector('.shopping');
let searchE =document.querySelector('.searchE');
let items =document.querySelector('.items');
let scrollBtn =document.querySelector('.scroll-btn');
let inp =document.querySelectorAll('input');


function show(){
    mainMenu.style.top='0';
}
function close(){
    mainMenu.style.top='-100%';
}
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

cart.onclick=function(){
    shopping.classList.toggle('active-shopping');
}

scrollBtn.onclick = function(){
    scroll({
        top:0,
        behavior:'smooth'
    })
};
searchIcon.onclick=function(){
    search.classList.toggle('search-active');
};
function focus(x){
    x.style.color="red";
};








