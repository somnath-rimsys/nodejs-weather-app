const request = require("request");
const constant = require("../constant");

const weather = (location, callback) => {
  location = encodeURIComponent(location);
  const url = `http://api.weatherstack.com/current?access_key=${constant.weather_api_key}&query=${location}`;
  request({ url, json: true }, (err, res) => {
    callback(err, res);
  });
};

module.exports = weather;
