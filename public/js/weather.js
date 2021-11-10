window.onload = () => {
  const searchInputBox = document.getElementById("search-box");
  const searchButton = document.getElementById("search-btn");
  const toast = new Toast({ timeout: 3000 });
  const loading = "Loading..."

  searchButton.addEventListener("click", (event) => {
    searchButton.setAttribute("disabled", true);
    const searchTearm = searchInputBox.value;
    if (searchTearm === "") {
      toast.show("error", "Please provide location.");
      searchInputBox.focus();
      searchButton.removeAttribute("disabled");
      return;
    }

    document.getElementById("temperature").innerHTML = loading;
    document.getElementById("humidity").innerHTML = loading;
    document.getElementById("wind_speed").innerHTML = loading;
    document.getElementById("pressure").innerHTML = loading;
    document.getElementById("wind_dir").innerHTML = loading;

    const url = `/weather?location=${searchTearm}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Error") {
          toast.show("error", data.message);
          document.getElementById("temperature").innerHTML = "";
          document.getElementById("humidity").innerHTML = "";
          document.getElementById("wind_speed").innerHTML = "";
          document.getElementById("pressure").innerHTML = "";
          document.getElementById("wind_dir").innerHTML = "";
        } else if (data.status === "Success") {
          document.getElementById("temperature").innerHTML = data.current.temperature;
          document.getElementById("humidity").innerHTML = data.current.humidity;
          document.getElementById("wind_speed").innerHTML = data.current.wind_speed;
          document.getElementById("pressure").innerHTML = data.current.pressure;
          document.getElementById("wind_dir").innerHTML = data.current.wind_dir;
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
