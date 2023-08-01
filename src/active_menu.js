/**
 * 구현계획
 * 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
 * 2. InterserctionObserver를 사용해서 모든 섹션들을 관찰해야 한다.
 * 3. 보여지는 섹션에 해당 되는 메뉴의 아이템을 활성화 시켜 준다.
 * 보여지는 섹션 :
 * - 다수의 섹션이 동시에 보여진다면, 가장 쳇번째의 아이템을 활성화 해준다.
 * - 마지막, contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택 해준다.
 */
// options 설정
const options = {
  root: null, // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport
  rootMargin: '-20% 0px 0px 0px', // rootMargin을 '10px 10px 10px 10px'로 설정
  threshold: [0, 0.98], // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
};

// IntersectionObserver 생성
const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonial',
  '#contact',
];
const sections = sectionIds.map(id => document.querySelector(id));
console.log(sections);
const navItems = sectionIds.map(id =>
  document.querySelector(`.header__menu__item[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => {
  false;
});
let activeNavItem = navItems[0];

const observerCallback = entries => {
  let selectLastOne;
  entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;

    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;

    const navIndex = selectLastOne
      ? sectionIds.length - 1
      : findFirstIntersection(visibleSections);

    selectNavItem(navIndex);
  });
};

const observer = new IntersectionObserver(observerCallback, options);

sections.forEach(section => {
  observer.observe(section);
});

function findFirstIntersection(visibleSections) {
  const index = visibleSections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(navIndex) {
  const navItem = navItems[navIndex];
  if (!navItem) {
    return;
  }
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  navItem.classList.add('active');
}
