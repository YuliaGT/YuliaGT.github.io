const businessURL = 'https://yuliagt.github.io/chamber/businesses.json';

fetch(businessURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject); 
    const businesses = jsonObject['businesses']; 
    // temporary checking for valid response and data parsing
    for (let i = 0; i < businesses.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let img = document.createElement('img');
       
        
        
        h2.textContent = businesses[i].business;
        p.textContent = businesses[i].address;
        p2.textContent = businesses[i].phone;
        p3.textContent = businesses[i].website;
        img.setAttribute('src', businesses[i].logo);
        img.setAttribute('alt', businesses[i].name);
   
        
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(img);


        document.querySelector('div#cards2').appendChild(card); 
        
    }
    
        
  });


  
// Lazy load

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
