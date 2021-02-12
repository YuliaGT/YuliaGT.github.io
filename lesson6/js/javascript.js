function Menu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}


let t = parseFloat(document.getElementById('temp').innerText); // get temp high from html
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

