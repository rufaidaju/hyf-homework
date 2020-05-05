
function renderOutPut(data){
    const weather = document.querySelector('#weather');
    let outPut = `The main weather in ${city} is ${data.weather[0].main} and it's ${data.weather[0].description} </br>
                  The minimum tempreture is ${data.main.temp_min} and the maximum is ${data.main.temp_max}`;
    weather.innerHTML =outPut ;
}

document.addEventListener('submit',(event) => {
    event.preventDefault();
    city=document.querySelector("#input").value;
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c6a59d89e8a69d593a4a4c996cb6ec1`)
       .then(response => response.json())
       .then(renderOutPut);
})



