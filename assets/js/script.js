// API key and url
const apiKey = 'd96876d02cf45f7fa9bfb328eb5b12f2';
const forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
const geoApiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=';

const searchBar = document.querySelector('.searchBar');
const forecastDays = document.querySelectorAll('.week');

async function getLatLong(city) {
    let query = geoApiUrl + city + '&limit=5' + `&appid=${apiKey}`;
    //fetch the latitude and longitude for the given city name
    const response = await fetch(geoApiUrl + city + '&limit=5' + `&appid=${apiKey}`);

    // display an error message if status is 404, else call getForecast with
    // fetched latitude and longitude
    if (response.status == 404) {

    } else {
        let data = await response.json();

        let lat = data[0].lat;
        let long = data[0].lon;
        document.querySelector('.city').innerHTML = city;
        getForecast(lat, long, city);
    }
}

async function getForecast(lat, long, city) {
    const response = await fetch(forecastApiUrl + 'lat=' + lat + '&lon=' + long + `&appid=${apiKey}` + '&units=imperial');

    if (response.status == 404) {

    } else {
        let data = await response.json();
        let days = [];
        // for (let i = 0; i < 6; i++) {
        //     days.push(data.list[i]);
        // }
        days.push(data.list[4]);
        days.push(data.list[12])
        days.push(data.list[20])
        days.push(data.list[28])
        days.push(data.list[36])
        console.log(days);

        // Set the data for the first day card
        document.querySelector('.today').style.display = "block";
        document.querySelector('.date').innerHTML = '(' + days[0].dt_txt + ')';
        document.querySelector('.temp').innerHTML = 'Temp: ' + days[0].main.temp + '°F';
        document.querySelector('.wind').innerHTML = 'Wind: ' + days[0].wind.speed + 'MPH';
        document.querySelector('.humidity').innerHTML = 'Humidity: ' + days[0].main.humidity + '%';

        // Set the data for each day in the forecast
        let k=0;
        for (let j = 1; j <= 4; j++) {
            const day = document.querySelector('.week').children[k];
            day.style.display = "block";
            day.querySelector('.date').innerHTML = '(' + days[j].dt_txt + ')';
            day.querySelector('.temp').innerHTML = 'Temp: ' + days[j].main.temp + '°F';
            day.querySelector('.wind').innerHTML = 'Wind: ' + days[j].wind.speed + 'MPH';
            day.querySelector('.humidity').innerHTML = 'Humidity: ' + days[j].main.humidity + '%';
            k += 1;
        }
    }
}

document.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('searchButton')) {
        getLatLong(searchBar.value);
    } else if (event.target.classList.contains('preset')) {
        getLatLong(event.target.innerText);
    }
})