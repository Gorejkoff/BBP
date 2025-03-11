"use strict"

// window.addEventListener('load', (event) => {});

// desktop or mobile (mouse or touchscreen)
const isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i) },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i) },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i) },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i) },
   any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
};
const isPC = !isMobile.any();
if (isPC) { document.body.classList.add('_pc') } else { document.body.classList.add('_touch') };

// media queries
const MIN1024 = window.matchMedia('(min-width: 1024px)');
const MIN768 = window.matchMedia('(min-width: 768px)');

// variables
// const HEADER = document.getElementById('header');



function throttle(callee, timeout) {
   let timer = null;
   return function perform(...args) {
      if (timer) return;
      timer = setTimeout(() => {
         callee(...args);
         clearTimeout(timer);
         timer = null;
      }, timeout)
   }
}



/* запись переменных высоты элементов */
// function addHeightVariable() {
//    if (typeof HEADER !== "undefined") {
//       document.body.style.setProperty('--height-header', `${HEADER.offsetHeight}px`)
//    }
// }
// addHeightVariable();


// ** ======================= RESIZE ======================  ** //
window.addEventListener('resize', () => {
   //  addHeightVariable();
   closeHeaderMenu();
})


// ** ======================= CLICK ======================  ** //
document.documentElement.addEventListener("click", (event) => {
   if (event.target.closest('.open-menu')) { openHeaderMenu() }
})

function openHeaderMenu() {
   document.body.classList.toggle('menu-is-open')
}
function closeHeaderMenu() {
   document.body.classList.remove('menu-is-open')
}


// ** ======================= SCROLL ======================  ** //

window.addEventListener('scroll', (event) => {
   startAnimateFirstScreen(event)
})

const FIRST_SCREEN_ANIMATE = document.getElementById('first-screen-animate');
function startAnimateFirstScreen(event) {
   if (FIRST_SCREEN_ANIMATE && scrollY > 10) FIRST_SCREEN_ANIMATE.classList.add('show-background');
   // FIRST_SCREEN_ANIMATE.classList.toggle('show-background', scrollY > 10);
}

// let callback = function (entries, observer) {
//    /* код действий для элементов entries */
//    if (entries[0].isIntersecting) {
//       console.log(entries[0].target);
//    }
// };
// let observer = new IntersectionObserver(callback, { threshold: 1.0 });
// observer.observe(document.querySelector('#first-screen-animate'));
