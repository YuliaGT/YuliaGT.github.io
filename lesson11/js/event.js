
 
/*----------- JSON event--------------*/

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const towns = jsonObject["events"];

    const maintowns = document.querySelector(".events");

    const townsfilter = towns.filter(
      (town) =>
        town.name === "Preston" ||
        town.name === "Soda Springs" ||
        town.name === "Fish Haven"
    );


  
    townsfilter.forEach((town) => {
      let card = document.createElement("section");
      let info = document.createElement("div");
      let h3 = document.createElement("h3");
      let h5 = document.createElement("h5");
      let h52 = document.createElement("h5");
      let h53 = document.createElement("h5");
 
      h3.textContent = 'Uncoming Events :'
      h5.textContent=  town.events[0]; 
      h52.textContent=  town.events[1]; 
      h53.textContent=  town.events[2]; 


      info.appendChild(h3);
      info.appendChild(h5);
      info.appendChild(h52);      
      info.appendChild(h53);
      card.appendChild(info);
 
      

      document.querySelector("div.events").appendChild(card);
    });
  });

