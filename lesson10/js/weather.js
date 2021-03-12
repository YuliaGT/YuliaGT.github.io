const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=c47e55d54eb3cb601a2de0b71c34823d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("currentlyvalue").textContent =
      jsObject.weather[0].main;
    document.getElementById("tempvalue").textContent = jsObject.main.temp;
    document.getElementById("speedvalue").textContent = jsObject.wind.speed;
    document.getElementById("humidityvalue").textContent =
      jsObject.main.humidity;

    if (jsObject.main.temp > 50 && jsObject.wind.speed < 3) {
      document.getElementById("chillvalue").textContent = "N/A";
    } else {
      document.getElementById("chillvalue").textContent =
        35.74 +
        0.6215 * jsObject.main.temp -
        35.75 * Math.pow(jsObject.wind.speed, 0.16) +
        0.4275 * jsObject.main.temp * Math.pow(jsObject.wind.speed, 0.16);
      document.getElementById("chillvalue").textContent =
        Math.round(document.getElementById("chillvalue").textContent * 10) / 10;
    }
  });

// 5 day forecast

const forecastapiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=c47e55d54eb3cb601a2de0b71c34823d";
fetch(forecastapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let dayCount = 0;
    const dayofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //filter
    const tempfilter = jsObject.list.filter((x) =>
      x.dt_txt.includes("18:00:00")
    );

    tempfilter.forEach((day) => {
      let d = new Date(day.dt_txt);
      document.getElementById(`forcastday${dayCount + 1}`).textContent =
        dayofWeek[d.getDay()];
      document.getElementById(`temp${dayCount + 1}`).textContent =
      Math.round(day.main.temp);
      let imagesrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
      document
        .getElementById(`icon${dayCount + 1}`)
        .setAttribute("src", imagesrc);
      document
        .getElementById(`icon${dayCount + 1}`)
        .setAttribute("alt", day.weather[0].description);
      dayCount++;
    });
  });
