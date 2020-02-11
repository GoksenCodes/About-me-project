
function displayMeme(response) {
let el = document.querySelector(".container");
// <a href="/javascript/manipulation/creating-a-dom-element-51/">create a new element</a> that will take the place of "el"
let newEl = document.createElement('div');
newEl.innerHTML = `<img src="data:${response.headers['content-type']};base64,${btoa(String.fromCharCode(...new Uint8Array(response.data)))}" />`;
// replace el with newEL
el.parentNode.replaceChild(newEl, el);
}

function getMeme(name) {
const RAPIDAPI_API_URL = `https://ronreiter-meme-generator.p.rapidapi.com/meme?font=Impact&font_size=40&meme=Frowning-Nun&top=${name},%20my%20child&bottom=you%20shouldn't%20talk%20to%20strangers%20`
const RAPIDAPI_REQUEST_HEADERS = {
    "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
    "x-rapidapi-key": "21f018dfadmsh8349df3502dc2c3p12164djsn3a44e957406d" ,
    "Content-Type": "application/json" ,
} ;
axios.get(RAPIDAPI_API_URL, { 
    responseType: 'arraybuffer',
    headers: RAPIDAPI_REQUEST_HEADERS})
    .then(displayMeme)

}

function displayNoname(response) {
    let el = document.querySelector(".container");
    let newEl = document.createElement('div');
    newEl.innerHTML = `<img src="data:${response.headers['content-type']};base64,${btoa(String.fromCharCode(...new Uint8Array(response.data)))}" />`;
    el.parentNode.replaceChild(newEl, el);
}

function getNoname () {
    const RAPIDAPI_API_URL = "https://ronreiter-meme-generator.p.rapidapi.com/meme?font=Impact&font_size=30&meme=Confused-Gandalf&top=WTF&bottom=You%20don't%20have%20a%20name"
    const RAPIDAPI_REQUEST_HEADERS = {
    "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
    "x-rapidapi-key": "21f018dfadmsh8349df3502dc2c3p12164djsn3a44e957406d" ,
    "Content-Type": "application/json" ,
} ;
axios.get(RAPIDAPI_API_URL, { 
    responseType: 'arraybuffer',
    headers: RAPIDAPI_REQUEST_HEADERS})
    .then(displayNoname)

}

function Contact() {
    let name = prompt ("Name pls? We'll have some fun :)") ;

    if (name && name.length>1 ) {
        getMeme(name)
    }

    else {
        getNoname()
    }
}


let button = document.querySelector("#show");
button.addEventListener("click", Contact);



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
