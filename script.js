const apiKey = "3853f9ed3ed55775cea64730aa3c8694";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

    if (data.weather[0].main != null) {
    weatherIcon.src = "images/" + data.weather[0].main + ".png";
    
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  
  
    }
    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
