const hamburgerElement = document.querySelector("#hamburguerButton");
const navElement = document.querySelector(".menuNav");

hamburgerElement.addEventListener("click", () =>{
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

const darkButton = document.querySelector(".darkButton");
const bodyAll = document.querySelector("body");
const root = document.documentElement;

darkButton.addEventListener("click", () =>{
    if (darkButton.textContent.includes("🌙")) {
		darkButton.textContent = "☀️";
	} else {
		darkButton.textContent = "🌙";
	}
    
    darkButton.classList.toggle("open");
    bodyAll.classList.toggle("open");
    root.classList.toggle('open');

});
