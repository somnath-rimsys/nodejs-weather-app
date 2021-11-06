const request = require("request");
const constant = require("../constant");

const weather = (location, callback) => {
  location = encodeURIComponent(location);
  const url = `http://api.weatherstack.com/current?access_key=${constant.weather_api_key}&query=${location}`;
  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weatherstack.com", undefined);
    } else {
      if (res.body.error) {
        callback("Invalid location provided. Please check and try again.", undefined);
      } else {
        callback(undefined, res);
      }
    }
  });
};

module.exports = weather;
