const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=c47e55d54eb3cb601a2de0b71c34823d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentlyvalue').textContent = jsObject.weather[0].main;
    document.getElementById('tempvalue').textContent = jsObject.main.temp;
    document.getElementById('speedvalue').textContent = jsObject.wind.speed;
    document.getElementById('humidityvalue').textContent = jsObject.main.humidity;

    if (jsObject.main.temp > 50 && jsObject.wind.speed < 3) {
        document.getElementById('chillvalue').textContent = "N/A";
       } 
         else {
            document.getElementById('chillvalue').textContent = 35.74 + (0.6215 * jsObject.main.temp) - (35.75 * ((Math.pow(jsObject.wind.speed, 0.16)))) + 0.4275 * jsObject.main.temp * ((Math.pow(jsObject.wind.speed, 0.16)));
            document.getElementById('chillvalue').textContent = Math.round(document.getElementById('chillvalue').textContent * 10) / 10
       }
       
  });

/*
        const htemp = parseFloat(jsObject.main.temp_max);
        const ltemp = parseFloat(jsObject.main.temp_min);
        const avtemp = htemp + ltemp / 2;
        const wspeed = parseFloat(jsObject.wind.speed);
        if (avtemp > 50 || wspeed < 3) {
            let f = "N/A";
            wchill = f;
        } else {
            let f = 35.74 + 0.6215 * avtemp - 35.75 * Math.pow(wspeed, 0.16) + 0.5275 * avtemp * Math.pow(wspeed, 0.16);
            wchill = f.toFixed(1) + "&#8457;";
        }
        document.getElementById('windchill').innerHTML = wchill;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        // document.getElementById('imagesrc').textContent = imagesrc;
        // document.getElementById('icon').setAttribute('src', imagesrc);
        // document.getElementById('icon').setAttribute('alt', desc);
    });
    */