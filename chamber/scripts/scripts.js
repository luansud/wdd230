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
  var now = new Date();
  var formattedDateTime = now.toISOString(); 
  document.getElementById('timestamp').value = formattedDateTime;
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
    }
}

function creatingSections(data){
    const article = document.querySelector(".grid");
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

getLinks(membersUrl);
