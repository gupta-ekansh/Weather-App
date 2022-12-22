const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a05edc6167msh656b20a9e50778ep11113cjsn5cfaf55b4a14',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city;
    cityName3.innerHTML = city;
    cityName4.innerHTML = city;
    cityName2.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            // cloud_pct.innerHTML = response.cloud_pct
            // temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            // sunrise.innerHTML = response.sunrise
            // sunset.innerHTML = response.sunset
            console.log(response)

            var a = document.getElementById("tempButton");
            console.log(city.value);
            a.href = "https://www.google.com/search?q=" + cityName.innerHTML + "+temperature&rlz=1C1CHZN_enIN926IN926&oq=delhi+&aqs=chrome.0.69i59j69i57j35i39j46i131i175i199i433i512j46i131i199i433i465i512j0i512j0i131i433i512j0i512l2j0i433i512.1196j1j15&sourceid=chrome&ie=UTF-8"
            var b = document.getElementById("humidityButton");
            console.log(cityName.innerHTML);
            b.href = "https://www.google.com/search?q=" + cityName.innerHTML + "+humidity&rlz=1C1CHZN_enIN926IN926&oq=delhi+&aqs=chrome.0.69i59j69i57j35i39j46i131i175i199i433i512j46i131i199i433i465i512j0i512j0i131i433i512j0i512l2j0i433i512.1196j1j15&sourceid=chrome&ie=UTF-8"

            var c = document.getElementById("windButton");
            console.log(cityName.innerHTML);
            c.href = "https://www.google.com/search?q=" + cityName.innerHTML + "+wind+speed&rlz=1C1CHZN_enIN926IN926&oq=delhi+&aqs=chrome.0.69i59j69i57j35i39j46i131i175i199i433i512j46i131i199i433i465i512j0i512j0i131i433i512j0i512l2j0i433i512.1196j1j15&sourceid=chrome&ie=UTF-8"
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);

})
getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then(response => {
        // cloud_pct.innerHTML = response.cloud_pct
        london_temp.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        london_humidity.innerHTML = response.humidity
        london_min_temp.innerHTML = response.min_temp
        london_max_temp.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
        console.log(response)
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then(response => {
        // cloud_pct.innerHTML = response.cloud_pct
        newYork_temp.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        newYork_humidity.innerHTML = response.humidity
        newYork_min_temp.innerHTML = response.min_temp
        newYork_max_temp.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
        console.log(response)
    })
    .catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Australia', options)
    .then(response => response.json())
    .then(response => {
        // cloud_pct.innerHTML = response.cloud_pct
        australia_temp.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        australia_humidity.innerHTML = response.humidity
        australia_min_temp.innerHTML = response.min_temp
        australia_max_temp.innerHTML = response.max_temp
        // wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
        console.log(response)
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
    .then(response => response.json())
    .then(response => {
        dubai_temp.innerHTML = response.temp
        dubai_humidity.innerHTML = response.humidity
        dubai_min_temp.innerHTML = response.min_temp
        dubai_max_temp.innerHTML = response.max_temp
        console.log(response)
    })
    .catch(err => console.error(err));

function myFunction(){
    alert("Just search for the city and you are good to go");
}