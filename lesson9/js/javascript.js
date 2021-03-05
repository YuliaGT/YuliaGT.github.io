function Menu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

/*----------- Wind chill --------------*/
/*let t = parseFloat(document.getElementById('temp').innerText); // get temp high from html
let sp = parseFloat(document.getElementById('speed').innerText); // get windspeed from html
var windChill;

if (t > 50 && sp < 3) {
 windChill = "N/A";
} 
  else {
 windChill = 35.74 + (0.6215 * t) - (35.75 * ((Math.pow(sp, 0.16)))) + 0.4275 * t * ((Math.pow(sp, 0.16)));
 windChill = Math.round(windChill * 10) / 10
}

document.getElementById("output").innerText = windChill + " \u00B0F";

function adjustSeverity(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}*/
/*----------- JSON --------------*/
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    /* console.log(towns); 
   console.log(typeof(towns)); */
    const maintowns = document.querySelector(".maintowns");

    const townsfilter = towns.filter(
      (town) =>
        town.name === "Preston" ||
        town.name === "Soda Springs" ||
        town.name === "Fish Haven"
    );


    //for (let i = 0; i < towns.length; i++ ) {
    townsfilter.forEach((town) => {
      let card = document.createElement("section");
      let info = document.createElement("div");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      let h5 = document.createElement("h5");
      let h52 = document.createElement("h5");
      let h53 = document.createElement("h5");
      let img = document.createElement("img");
      

      h3.innerHTML = `${town.name}`;
      h4.innerHTML = `${town.motto}`;
      h5.innerHTML = "Year Founded: " + `${town.yearFounded}`;
      h52.innerHTML = "Population: " + `${town.currentPopulation}`;
      h53.innerHTML = "Annual Rain Fall: " + `${town.averageRainfall}`;
      img.setAttribute("src", `images/${town.photo}`);
      img.setAttribute("alt", `${town.name}` + " photo");

      info.appendChild(h3);
      info.appendChild(h4);
      info.appendChild(h5);
      info.appendChild(h52);
      info.appendChild(h53);
      card.appendChild(info);
      card.appendChild(img);
      

      document.querySelector("div.maintowns").appendChild(card);
    });
  });
