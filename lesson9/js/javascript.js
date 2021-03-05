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
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
  /* console.log(towns); 
   console.log(typeof(towns)); */
const maintowns= document.querySelector('.maintowns');
 

const townsfilter = towns.filter(town=> town.name == "Preston" ) 
//&& "Fish Haven" && "Soda Springs");


//for (let i = 0; i < towns.length; i++ ) {
  townsfilter.forEach(town=> {
  let card= document.createElement('section');
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let img = document.createElement('img');


  h2.innerHTML = `${towns.name}`;

  h3.innerHTML = `${towns.motto}`;
  p.innerHTML = 'Year Founded: ' + `${towns.yearFounded}`;
    p2.innerHTML = 'Population: ' + `${towns.currentPopulation}`;
    p3.innerHTML = 'Annual Rain Fall: ' + `${towns.averageRainfall}`;
    img.setAttribute('src', `${towns.photo}`);
    img.setAttribute('alt', `${towns.name}` + ' photo');

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(img);

    document.querySelector('div.maintowns').appendChild(card);
  }
);
  })

