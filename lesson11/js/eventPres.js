const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    const events = document.querySelector(".events");
 
 
     for (let i = 0; i < towns.length; i++) {
       if (towns[i].name == "Preston" ) {
         let card = document.createElement("section");
         let info = document.createElement("div");
         let h3 = document.createElement("h3");
         let h5 = document.createElement("h5");
         let h52 = document.createElement("h5");
         let h53 = document.createElement("h5");
 
         h3.textContent = towns[i].name + " Upcoming Events: ";
         h5.textContent = towns[i].events[0];
         h52.textContent = towns[i].events[1];
         h53.textContent = towns[i].events[2];
 
         info.appendChild(h3);
         info.appendChild(h5);
         info.appendChild(h52);      
         info.appendChild(h53);
         card.appendChild(info);
 
 
         document.querySelector("div.events").appendChild(card);
       }};
    });