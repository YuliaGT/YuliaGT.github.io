const forecastapiURL =

"https://api.openweathermap.org/data/2.5/onecall?lat=40.2969&lon=-111.6946&units=imperial&appid=c47e55d54eb3cb601a2de0b71c34823d";
  
fetch(forecastapiURL)
.then((response) => response.json())
.then((jsObject) => {
    if (jsObject.alert == true) {
        alert(jsObject.alerts[0].description)
    }
    console.log(jsObject);
   
  
        let dayCount = 0;

        for (x = 1; x < 6; x++) {
        const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.daily[x].weather[0].icon + '.png';




        document.getElementById(`temp${dayCount + 1}`).textContent = Math.round(jsObject.daily[x].temp.max);
        document.getElementById(`icon${dayCount + 1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${dayCount + 1}`).setAttribute('alt', jsObject.daily[x].description);
       
        let d = new Date((jsObject.daily[x].dt) * 1000);
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        document.getElementById(`forcastday${dayCount + 1}`).textContent = dayofWeek[d.getDay()];
        dayCount++;

      }}
      );
        

     

  
