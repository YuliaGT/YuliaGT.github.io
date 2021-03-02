const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets']; 
    // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');
       
        
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        p.textContent = 'Date of Birth: ' + prophets[i].birthdate;;
        p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        img.setAttribute('src', prophets[i].imageurl);
   
        
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(img);


        document.querySelector('div.cards').appendChild(card); 
        
    }
    
        
  });


  


  const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: .5,
    rootMargin: "0px 0px -50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver ((items, imgObserver) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

        imagesToLoad.forEach((img) => {
            imgObserver.observe(img);
        });
} else{
    imagesToLoad.forEach((img) => {
        loadImages(img);
});
}
