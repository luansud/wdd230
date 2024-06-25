const hamburgerElement = document.querySelector("#hamburguerButton");
const navElement = document.querySelector(".menuNav");

hamburgerElement.addEventListener("click", () =>{
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

const darkButton = document.querySelector("#darkButton");
const bodyAll = document.querySelector("body");
const root = document.documentElement;

darkButton.addEventListener("click", () =>{
    bodyAll.classList.toggle("open");
    root.classList.toggle('open');
});
