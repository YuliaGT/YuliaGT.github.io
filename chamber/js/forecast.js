const forecastapiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5779334&units=imperial&appid=c47e55d54eb3cb601a2de0b71c34823d";
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