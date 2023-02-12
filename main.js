console.log('Hello World!');
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  header.classList.toggle("active");
});
