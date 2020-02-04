// function displayMeme(response) {
//     let meme = document.querySelector("img") ;
//     meme.innerHTML = response ; }

// function getMeme(response) {

// const RAPIDAPI_API_URL = "https://ronreiter-meme-generator.p.rapidapi.com/meme?font=Impact&font_size=50&meme=Frowning-Nun&top=You're%20a%20pervert&bottom=aren't%20you%253F"
// const RAPIDAPI_REQUEST_HEADERS = {
//     "x-rapidapi-host": "//ronreiter-meme-generator.p.rapidapi.com",
//     "x-rapidapi-key": "21f018dfadmsh8349df3502dc2c3p12164djsn3a44e957406d" ,
//     "Content-Type": "application/json" ,
// } ;
// axios.get(`${RAPIDAPI_API_URL}`, { headers: RAPIDAPI_REQUEST_HEADERS})
//     .then(ac => {
//         console.log(response);
//     })



var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://ronreiter-meme-generator.p.rapidapi.com/meme?font=Impact&font_size=50&meme=Condescending-Wonka&top=Youreapervert&bottom=arentyou" ,
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "//ronreiter-meme-generator.p.rapidapi.com",
        "x-rapidapi-key": "21f018dfadmsh8349df3502dc2c3p12164djsn3a44e957406d",
    } 
   
}
axios.get(settings).then(response => {
            console.log(response);
})


// let button = document.querySelector("#show");
// button.addEventListener("click", getMeme);



// function displayData(response) {
//     console.log(response)
// let city = response.data.name ;

// let temp = Math.round(response.data.main.temp) ;
// console.log(city , temp)
// alert (`It is ${temp}°C in ${city} 😉`)

// }


// function getPosition(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     let apiKey = "683dab27e61c352cc6f11bcf41592476";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
//     axios.get(apiUrl).then(displayData);
// }

// function getCoords() {
//     event.preventDefault();
//     navigator.geolocation.getCurrentPosition(getPosition);
// }

