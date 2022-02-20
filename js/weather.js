//https://openweathermap.org

const API_KEY = "a5377c4f0d915dbab478a05041a61377";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then((response)=>response.json()).then((data)=> {
        const city = document.querySelector(".city");
        const weather = document.querySelector(".weatherIcon");
        const degree = document.querySelector(".temp");
        city.innerText = data.name;
        const main = data.weather[0].main;
        const temp = Number(data.main.temp).toFixed(1);

        if (main === "Clouds")
        weather.innerText = "⛅";
        else if(main === "Rain")
        weather.innerText = "☔";
        else if(main === "Snow")
        weather.innerText = "❄";
        else if(main === "Clear")
        weather.innerText = "🌞";
        else if(main === "Drizzle")
        weather.innerText = "🌧";
        else{
            weather.innerText = main;
        }        

        degree.innerText = `${temp}°`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);