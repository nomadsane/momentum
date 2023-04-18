const API_KEY = "98c90f71be1a005f5bb0580405e9233f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            const temperature = parseInt(data.main.temp)
            weather.innerText = `${data.weather[0].main} / ${temperature}ºC @ `;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);