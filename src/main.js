'use strict';

/*
  Header에 페이지 아래로 스크롤시 다크 스타일링 적용
  CODE START
*/
const header = document.querySelector('.header');
//const headerHeight = header.getBoundingClientRect().height;
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', event => {
  if (window.scrollY > headerHeight) {
    // header.className = 'header--dark';
    header.classList.add('header--dark');
  } else {
    // header.className = 'header';
    header.classList.remove('header--dark');
  }
});
/* END */

/*
  Home 섹션을 아래로 스크롤시 투명하게 처리함
  CODE START
*/
const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', event => {
  home.style.opacity = 1 - Math.round(window.scrollY) / homeHeight;
});
/* END */

/*
  Arrow Up버튼을 아래로 스크롤시 투명하게 처리함
  CODE START
*/
const arrowUp = document.querySelector('.arrow-up');
const arrowUpHeight = arrowUp.offsetHeight;

document.addEventListener('scroll', event => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});
/* END */

/*
  Navbar 토글 버튼 클릭 처리
  CODE START
*/
const navbrMenu = document.querySelector('.header__menu');
const navbrToggle = document.querySelector('.heaer__toggle');

navbrToggle.addEventListener('click', () => {
  navbrMenu.classList.toggle('open');
});
/* END */

/*
  Navbar Menu 클릭시 메뉴를 자동으로 닫아줌
  CODE START
*/
navbrMenu.addEventListener('click', () => {
  navbrMenu.classList.remove('open');
});
/* END */
