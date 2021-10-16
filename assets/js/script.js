const links = document.querySelectorAll('.menu_item');
const sections = document.querySelectorAll('.section');

function changeLinkState() {
  let index = sections.length;
  
  while( --index && window.scrollY + 120 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');

}
/* print all page sections in the Console
console.log(sections);
*/
window.addEventListener('scroll', changeLinkState);