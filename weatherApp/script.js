/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '76ec22ba7cmsh5f4d7294c947a75p198d7bjsn8345a4148966',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    
    return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err));

}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
document.getElementById("city-name").innerText = weatherData.location.city
document.getElementById("weather-type").innerText = weatherData.current_observation.condition.text
document.getElementById("temp").innerText = weatherData.current_observation.condition.temperature
document.getElementById("min-temp").innerText = weatherData.current_observation.atmosphere.humidity
document.getElementById("max-temp").innerText = weatherData.current_observation.atmosphere.visibility
  
}




