// HAMBURGUER MENU
const hamburgerElement = document.querySelector("#hamburguerButton");
const navElement = document.querySelector(".menuNav");

hamburgerElement.addEventListener("click", () =>{
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});
// Dark Mode
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

// COUTING VISITS
const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if(visitsDisplay){
    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = 'This is your first visit.';
    }
    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
}

// Range Page Rating
const rangeValue = document.getElementById("rangeValue");
const range = document.getElementById("pageRating");

range.addEventListener('change',showRange);
range.addEventListener("input",showRange);

function showRange(){
    rangeValue.innerHTML = range.value;
    console.log("teste Range");
    
}
console.log("teste");

// checking if Passwords Match

const userPassword = document.getElementById("password");
const confirmPassword = document.getElementById("cPassword");
const errorPassword = document.getElementById("errorPassword");

confirmPassword.addEventListener("focusout", matchingPasswords);

function matchingPasswords(){
    if(userPassword.value != confirmPassword.value){
        errorPassword.textContent = "The passwords don't match! Please type the same password";
        userPassword.value = "";
        confirmPassword.value = "";
        userPassword.focus();
    } else {
        errorPassword.textContent = "";
    }
}

