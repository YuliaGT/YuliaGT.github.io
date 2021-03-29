const requestURL = 'https://yuliagt.github.io/chamber/directors.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject); 
    const directors = jsonObject['directors']; 
    // temporary checking for valid response and data parsing
    for (let i = 0; i < directors.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
    
        h2.textContent = directors[i].name;
        p.textContent = directors[i].director;
        p2.textContent =directors[i].company;
       
        
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);



        document.querySelector('div.cards').appendChild(card); 
        
    }
    
        
  });


  
