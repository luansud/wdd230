const showCurrentlyYear = document.getElementById('year');
const currentYear = new Date();
showCurrentlyYear.innerHTML = "<span>&copy </span>"+currentYear.getFullYear();


const lastModifiedString = document.lastModified;
const lastModifiedDate = new Date(lastModifiedString);
const formattedDate = lastModifiedDate.toLocaleDateString() + ' ' + lastModifiedDate.toLocaleTimeString();

const lastModifiedText = document.getElementById("lastModified");
lastModifiedText.textContent = " Last Modified:" + formattedDate;

