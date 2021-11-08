window.onload = () => {
  const searchInputBox = document.getElementById("search-box");
  const searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", (event) => {
    const searchTearm = searchInputBox.value;
    if (searchTearm === "") {
      alert("Please provide location.");
      return;
    }
    const url = `/weather?location=${searchTearm}`;
    fetch(url)
      .then((data) => {
        console.log("Data: ", data);
      })
      .catch((err) => {
        console.log("Error: ",err);
      });
  });
};
