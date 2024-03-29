

const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
       console.log(entry)
       if( entry.isIntersecting){
         entry.target.classList.add('show');
         } else {
             entry.target.classList.remove('show');
             }
      });
}); 


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function toggleMenu(){
const menu = document.querySelector(".menu-links");/*targeting menu-links in html*/
const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");/*when its clicked its gonna add or remove the open class*/
}
