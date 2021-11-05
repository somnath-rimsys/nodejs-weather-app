const request = require("request");
const settings = require('./constant');
const city = 'Kolkata'
const url =`http://api.weatherstack.com/current?access_key=${settings.api_key}&query=${city}`;

request({url, json: true}, (err, res) => {
  const data = res.body
  const currentWeatherData = data.current;
  console.log(`${currentWeatherData.weather_descriptions[0]}. It is currently ${currentWeatherData.temperature} degrees out. But feels like ${currentWeatherData.feelslike} degrees out.`);
});
