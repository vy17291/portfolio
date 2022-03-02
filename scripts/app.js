// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
///////////////////
// const percentSkills = document.querySelectorAll('.skill-percentage');
// console.log(percentSkills)
// const revealSkill = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove('skill-hidden');
//   observer.unobserve(entry.target);
// };
// const skillObserver = new IntersectionObserver(revealSkill, {
//   root: null,
//   threshold: 0.15,
// });
// percentSkills.forEach(function (section) {
//   skillObserver.observe(section);
//   section.classList.add('skill-hidden');
// });
//toggle menu
const toggle = document.querySelector(".menu-toggle");
console.log(toggle);
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function () {
  if (menu.classList.contains("is-show")) menu.classList.remove("is-show");
  else menu.classList.add("is-show");
  console.log(menu);
});
// window.addEventListener("click", function (e) {
//   if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
//     menu.style.display = "none";
//   }
// });
const projectJs = document.querySelector('.project-java');
const viewBtn = document.querySelector('.project-view');

viewBtn.addEventListener('click', function() {
  projectJs.style.display = "block";
  viewBtn.innerHTML = `<a href="https://github.com/vy17291" class="btn btn--primary project-view">View more</a>`;
  console.log(projectJs)
})