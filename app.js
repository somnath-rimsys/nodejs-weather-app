const weather = require("./utils/weather");

weather("Kolkata", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    const data = res.body;
    const currentWeatherData = data.current;
    console.log(
      `${currentWeatherData.weather_descriptions[0]}. It is currently ${currentWeatherData.temperature} degrees out. But feels like ${currentWeatherData.feelslike} degrees out.`
    );
  }
});
