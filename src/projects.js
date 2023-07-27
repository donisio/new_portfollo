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
  handleActiovSelection(event.target);
  filterProjects(filter);
});

// Active 메뉴을 재설정
function handleActiovSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

// 프로젝트 필터링
function filterProjects(filter) {
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
}
