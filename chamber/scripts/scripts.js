const hamburgerElement = document.querySelector("#hamburguerButton");
const navElement = document.querySelector(".menuNav");

hamburgerElement.addEventListener("click", () =>{
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});