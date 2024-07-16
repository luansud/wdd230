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

//Time Stamp
function setTimestamp() {
  var now = new Date();
  var formattedDateTime = now.toISOString(); 
  document.getElementById('timestamp').value = formattedDateTime;
}

window.onload = setTimestamp;