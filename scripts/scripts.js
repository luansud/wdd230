const hamburgerElement = document.querySelector("#hamburguerButton");
const navElement = document.querySelector(".menuNav");

hamburgerElement.addEventListener("click", () =>{
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

const darkButton = document.querySelector("#darkButton");
const bodyAll = document.querySelector("body");
const aColor = document.querySelectorAll(".card a");

darkButton.addEventListener("click", () =>{
    bodyAll.classList.toggle("open");
    aColor.classList.toggle("open");
    aColor.forEach(a =>{
        a.classList.toggle("open");
    });
});
