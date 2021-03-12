function Menu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}


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

