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

if(rangeValue){
    range.addEventListener('change',showRange);
    range.addEventListener("input",showRange);
}

function showRange(){
    rangeValue.innerHTML = range.value;
    
}

// checking if Passwords Match
const userPassword = document.getElementById("password");
const confirmPassword = document.getElementById("cPassword");
const errorPassword = document.getElementById("errorPassword");

if(userPassword){
    confirmPassword.addEventListener("focusout", matchingPasswords);
}


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

// Weaether Control
const lat = "-10.90";
const long = "-37.02";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=932fce6cea8cb7e687cd724a73adbc12`;

const weatherIcon = document.getElementById("weatherIcon");
const weatherTemp = document.getElementById("weatherTemp");
const weatherDesc = document.getElementById("weatherDesc");

async function getWeather(){
    const response = await fetch(url)
    const data = await response.json()
    displayWeather(data)
}

function displayWeather(data){
    weatherTemp.textContent = `${Math.round(data.main.temp)}ºC`
    const weatherIconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const imgIcon = document.createElement('img')
    imgIcon.setAttribute("src",weatherIconSrc)
    imgIcon.setAttribute("alt","Weather Icon")  
    weatherIcon.appendChild(imgIcon)
    weatherDesc.textContent = data.weather[0].main
}

getWeather();