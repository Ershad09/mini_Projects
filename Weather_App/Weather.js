

const apiKey = "6005d0df9bac698fcb24a00f0fc2e939";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");




async function checkWeather(city){

    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else

    var data = await response.json();

 


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure ;


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img_icon/cloud.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img_icon/sun.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img_icon/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img_icon/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img_icon/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
});



// -------- theme ------------------

const themeBtn = document.querySelector("#themeToggle");
const themeOptions = document.querySelector("#themeOptions");
const card = document.querySelector(".card");
const swatches = document.querySelectorAll(".swatch");


themeBtn.addEventListener("click", ()=>{
    themeOptions.classList.toggle("show");
});


swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    const themeNum = swatch.getAttribute("data-theme");
    const gradient = getComputedStyle(document.documentElement)
      .getPropertyValue(`--gradiant-color-${themeNum}`);

    card.style.background = gradient;
    themeOptions.classList.remove("show"); 
  });
});