const latLong = "49.74794010042696, 6.645149061595791";
const lat = "49.74";
const long = "6.64";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=932fce6cea8cb7e687cd724a73adbc12`;
console.log(url);

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

async function apiFetch(url){
    try{
        const response = await fetch(url)
        if(response.ok){
            const data = await response.json()
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error){
        console.error(error)
    }
}

function displayResults(data){
    const temp = Math.round(convertFahrenheitToCelsius(data.main.temp))
    currentTemp.textContent = `${temp}Cº`
    captionDesc.textContent = data.weather[0].description
    let  iconDesc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute("src",iconDesc)
    weatherIcon.setAttribute("alt","Weather Icon")
}

function convertFahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

apiFetch(url)


