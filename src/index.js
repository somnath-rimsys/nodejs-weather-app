const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const hbs = require("hbs");
const weather = require("../utils/weather");

// Setup for express config.
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup for handlebars engine and views location.
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup for public static directory.
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    author: "Somnath Sardar",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    author: "Somnath Sardar",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.location) {
    return res.send({
      message:
        "Location is missing from the query string. Add location as query param. Ex: /weather?location=Kolkata",
      status: "Error",
    });
  }
  const location = req.query.location;
  weather(location, (error, data) => {
    if (error) {
      return res.send({
        message: error,
        status: "Error",
      });
    }
    res.send({
      location: data.body.location,
      current: data.body.current,
      status: "Success",
    });
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    author: "Somnath Sardar",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404! Page Not found",
    author: "Somnath Sardar",
  });
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
