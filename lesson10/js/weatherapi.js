'http://api.openweathermap.org/data/2.5/weather?id={5604473}&appid={c47e55d54eb3cb601a2de0b71c34823d}';
const apiURL = "...";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

  document.getElementById('current-temp').textContent = jsObject.main.temp;