window.onload = () => {
  const searchInputBox = document.getElementById("search-box");
  const searchButton = document.getElementById("search-btn");
  const toast = new Toast({ timeout: 3000 });

  searchButton.addEventListener("click", (event) => {
    searchButton.setAttribute("disabled", true);
    const searchTearm = searchInputBox.value;
    if (searchTearm === "") {
      toast.show("error", "Please provide location.");
      searchInputBox.focus();
      searchButton.removeAttribute("disabled");
      return;
    }
    const url = `/weather?location=${searchTearm}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Error") {
          toast.show("error", data.message);
        } else if (data.status === "Success") {
          let weatherData = data;
          document.getElementById('temperature').innerHTML = data.current.temperature;
          document.getElementById('humidity').innerHTML = data.current.humidity;
          document.getElementById('wind_speed').innerHTML = data.current.wind_speed;
          document.getElementById('pressure').innerHTML = data.current.pressure;
          document.getElementById('wind_dir').innerHTML = data.current.wind_dir;
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      })
      .finally(() => {
        searchButton.removeAttribute("disabled");
      });
  });
};
