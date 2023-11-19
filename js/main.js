let navbar = document.querySelector('nav');
let open = document.querySelector(".open-menu"); 
let close = document.querySelector(".fa-times"); 
let menu  = document.querySelector(".menu-mobile");
let wrong = document.getElementById('test-1');
let wrong_2 = document.getElementById('test-2');
let wrong_3 = document.getElementById('test-3');
let modeling = document.querySelector(".model");
let btn = document.querySelector('.close-btn');
// The Stats
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No




// show sidebar
open.addEventListener('click' , () => {
  menu.style.display = "block";
})

// close sidebar
close.addEventListener('click' , () => {
  menu.style.display = "none";
})

window.onscroll = function () {

      // Scroll Button Top
    if(window.scrollY > 1000){
        (scrolltop).style.display = "block"
    }else{
        (scrolltop).style.display = "none"
    }
    (scrolltop).addEventListener('click' , () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }); 

    if(window.scrollY > 100){
        navbar.style.background = "var(--color-background)";
        navbar.style.padding = "0";
        navbar.style.boxShadow = "0 0 10px rgb(255 255 255 / 5%)" ;
      }else{
        navbar.style.background = "transparent";
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "none" ;

      }

          // Stats Increase Number
      if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
    };
    function startCount(el) {
      let goal = el.dataset.goal;
      let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
          clearInterval(count);
        }
      }, 2000 / goal);
};
 // Blogs 
 btn.addEventListener('click' , () => {
  modeling.style.position = "relative";
  modeling.style.display = "none";
})
 wrong.addEventListener('click' , () => {
  modeling.style.position = "fixed";
  modeling.style.display = "block";
})
wrong_2.addEventListener('click' , () => {
  modeling.style.position = "fixed";
  modeling.style.display = "block";
})
wrong_3.addEventListener('click' , () => {
  modeling.style.position = "fixed";
  modeling.style.display = "block";
})

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--color-primary', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  });

});