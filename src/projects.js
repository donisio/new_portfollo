'use strict';
//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');
categories.addEventListener('click', event => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }

  // Active 메뉴을 재설정
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  event.target.classList.add('category--selected');

  // 프로젝트 필터링
  projectContainer.classList.add('anim_out');
  projects.forEach(project => {
    if (filter === 'all' || filter === project.dataset.projectType) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  setTimeout(() => {
    projectContainer.classList.remove('anim_out');
  }, 250);
});
