
function showWeatherInfo(data){
    const weather = document.querySelector('.weather');
    let minTemp = (data.main.temp_min - 273.15 ).toFixed(0); 
    let maxTemp = (data.main.temp_max - 273.15 ).toFixed(0); 
    
    let weatherInfo = `<li>Temperature </br> ${minTemp}/${maxTemp}&#8451 </br>
                        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"></li> 
                        <li>Wind speed<br/>${data.wind.speed}</li>
                        <li>Cloudy <br/>${data.clouds.all} </li>`
    weather.innerHTML =weatherInfo ;
}

document.addEventListener('submit',(event) => {
    event.preventDefault();
    let city=document.querySelector(".input").value;
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c6a59d89e8a69d593a4a4c996cb6ec1`)
       .then(response => response.json())
       .then(showWeatherInfo);
})



