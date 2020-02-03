
function displayData(response) {
let city = response.data.name ;
let temp = Math.round(response.data.main.temp) ;
alert `It is ${temp}°C in ${city} 😉 `

}


function getPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiKey = "683dab27e61c352cc6f11bcf41592476";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayData);
}

function getCoords() {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getPosition);
}

let button = document.querySelector("#show");
button.addEventListener("click", getCoords);