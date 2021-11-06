const yargs = require("yargs");
const weather = require("./utils/weather");

yargs(process.argv.splice(2))
  .command({
    command: "weather",
    describe: "Get weather details",
    builder: {
      location: {
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      weather(argv.location, (err, res) => {
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
    },
  })
  .parse();
