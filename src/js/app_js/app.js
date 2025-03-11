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
const MIN780 = window.matchMedia('(min-width: 780px)');

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


if (MIN780.matches) {
   const FIRST_SCREEN_ANIMATE = document.getElementById('first-screen-animate');
   function startAnimateFirstScreen() {
      if (FIRST_SCREEN_ANIMATE) FIRST_SCREEN_ANIMATE.classList.add('show-background');
   }
   setTimeout(startAnimateFirstScreen, 1000);
}



// let thresholdArray = [];
// for (let i = 0; i < 1; i += 0.01) {
//    thresholdArray.push(i);
// }
// console.log(thresholdArray);

let callback = function (entries, observer) {
   /* код действий для элементов entries */


   entries.forEach(entry => {
      console.log("test");

   });

   // if (entries[0].isIntersecting) {
   //    console.log(entries[0].target);
   // }
};




let observer = new IntersectionObserver(callback, { threshold: 0 });

let target = document.querySelectorAll('.line-move');
target.forEach(e => observer.observe(e));



