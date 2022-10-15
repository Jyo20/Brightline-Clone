// Using window.scrollY to bring the variation in the navbar's background
let nav = document.querySelector('nav');

 window.addEventListener('scroll', () => {
     console.log(window.scrollY)

     if (window.scrollY >= 100) {
         nav.classList.add('active_nav');
     } else {
         nav.classList.remove('active_nav');
     }
 })