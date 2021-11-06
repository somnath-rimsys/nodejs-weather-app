const weather = require("./utils/weather");

weather("Kolkata", (err, res) => {
  if (err) {
    console.log("Unable to connect to weatherstack.com");
  } else {
    if (res.body.error) {
      console.log("Invalid location provided. Please check and try again.");
    } else {
      const data = res.body;
      const currentWeatherData = data.current;
      console.log(
        `${currentWeatherData.weather_descriptions[0]}. It is currently ${currentWeatherData.temperature} degrees out. But feels like ${currentWeatherData.feelslike} degrees out.`
      );
    }
  }
});
