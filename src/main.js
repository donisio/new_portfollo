/*
  Header에 페이지 아래로 스크롤시 다크 스타일링 적용
  CODE START
*/
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', event => {
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    // header.className = 'header--dark';
    header.classList.add('header--dark');
  } else {
    // header.className = 'header';
    header.classList.remove('header--dark');
  }
});
/* END */
