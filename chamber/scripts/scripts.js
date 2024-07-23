const hamburgerElement = document.querySelector("#hamburguerButton");
const navElement = document.querySelector(".menuNav");

hamburgerElement.addEventListener("click", () =>{
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("open");
});

// COUTING VISITS and Time visited
const visitsDisplay = document.querySelector("#visits");
const timeVisitsDisplay = document.querySelector("#timeVisit");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const msToDay = 86400000;
const currentDate = new Date();
const lastVisit = localStorage.getItem('lastVisit');

function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const diffInTime = Math.abs(date2 - date1);
    return Math.floor(diffInTime / oneDay);
}

if(visitsDisplay){
    if (!lastVisit) {
      timeVisitsDisplay.innerText = "Welcome! Let us know if you have any questions.";
    } else {
      const lastVisitDate = new Date(lastVisit);
      const daysBetweenVisits = daysBetweenDates(lastVisitDate, currentDate);

      if (daysBetweenVisits < 1) {
        timeVisitsDisplay.innerText = "Back so soon! Awesome!";
      } else if (daysBetweenVisits === 1) {
        timeVisitsDisplay.innerText = "You last visited 1 day ago.";
      } else {
        timeVisitsDisplay.innerText = `You last visited ${daysBetweenVisits} days ago.`;
      }
    }

    if(numVisits !== 0){
      visitsDisplay.textContent = `Number of Visits: ${numVisits}`;
    }
  numVisits++;
  localStorage.setItem("numVisits-ls", numVisits);
  localStorage.setItem('lastVisit', currentDate);
}


//Time Stamp
function setTimestamp() {
  const timestamp = document.getElementById('timestamp');
  if(timestamp){
    var now = new Date();
    var formattedDateTime = now.toISOString(); 
    timestamp.value = formattedDateTime;
  }
}
window.onload = setTimestamp;


// Teste
document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll('.fJoin input:required');

  inputs.forEach(input => {
      input.addEventListener('input', function() {
          if (this.value.trim() !== "") {
              this.style.borderLeftColor = "var(--primary-color)";
          } else {
              this.style.borderLeftColor = "var(--secondary-color)";
          }
      });
  });
});

// Toggle between Grid and List
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

if(gridbutton){
  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList); // example using defined function
}

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// Cards directory Creation
const membersUrl = "https://luansud.github.io/wdd230/chamber/data/members.json";

async function getLinks(membersUrl){
    const response = await fetch(membersUrl)
    if (response.ok) {
        const data = await response.json()
        creatingSections(data);
        createSpotlights(data);
    }
}
function creatingSections(data){
    const article = document.querySelector(".grid");
    if(article){
      const companies = data.companies
      for (let c = 0; c < companies.length; c++) {
          const company = companies[c]
          const sectionContent = `            
              <section id="companySection">
                  <img src="${company.image}" alt="${company.name} Logo" />
                  <h3>${company.name}</h3>
                  <p>${company.phone.number}</p>
                  <p>${company.membershipLevel}</p>
                  <a href="${company.website}" target="_blank">Store Page</a>
              </section>`
          const section = document.createElement('section')
          section.innerHTML = sectionContent
          article.appendChild(section)
      }
    }
}
getLinks(membersUrl);

//SPOTLIGHT CREATION
function createSpotlights(data){
  const memberSpotlights = document.getElementById("memberSpotlights");
  if(memberSpotlights){
    let countDiv = 0
    const companies = data.companies
      for (let c = 0; c < companies.length && countDiv < 3; c++){
        console.log(countDiv)
        const company = companies[c]
        let membershipLevel = ""
        membershipLevel = company.membershipLevel
        console.log(membershipLevel)
        if(membershipLevel == "Gold" || membershipLevel == "Silver"){
          const div = document.createElement("div")
          const divContent = `
                          <img src="${company.image}" alt="${company.name}">
                          <p>${company.name}</p>
                          <div class="contact-info">
                              <div>${company.phone.number}</div>
                              <a href="${company.website}">Website</a>
                          </div>`
          div.className = "spotlight-box"
          div.innerHTML = divContent
          memberSpotlights.appendChild(div)
          countDiv++
          
        }
      }
  }
}









// Weather Box

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-10.90&lon=-37.02&units=metric&appid=932fce6cea8cb7e687cd724a73adbc12`;

const weatherIcon = document.getElementById("weatherIcon");
const weatherTemp = document.getElementById("weatherTemp");
const weatherDesc = document.getElementById("weatherDesc");
const weatherHum = document.getElementById("weatherHumidity");

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
    weatherHum.textContent = `Humidity: ${data.main.humidity}%`
}
getWeather();

// Weather ForeCast
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=-10.90&lon=-37.02&units=metric&appid=932fce6cea8cb7e687cd724a73adbc12`;
const forecastWeatherBox = document.getElementById("forecastWeatherBox");

async function getForecastWeather(urlForecast){
  const response = await fetch(urlForecast)
  const data = await response.json()
  displayForecastWeather(data)
}

function displayForecastWeather(data){
  const list = data.list

  for (let i = 7; i <= 23; i += 8) {
    const div = document.createElement('div')
    const weatherDate = list[i].dt_txt.split(" ")[0]
    const [year,month,day] = weatherDate.split("-")
    const divContent = `<div>
                            <p>${day}/${month}</p>
                            <img src="https://openweathermap.org/img/w/${list[i].weather[0].icon}.png" alt="weather Icon">
                            <h2>${Math.round(list[i].main.temp)}ºC</h2>
                            <span>${list[i].weather[0].main}</span>
                        </div>`
    div.innerHTML = divContent
    forecastWeatherBox.appendChild(div)
  }
}

getForecastWeather(urlForecast)