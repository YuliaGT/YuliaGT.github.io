/*function doInputOutput() {
    let temp = parseFloat(document.getElementById('temp').value);
    let sp = parseFloat(document.getElementById('speed').value);
    let wCh = windChill(temp, sp);

        // output
    document.getElementById('output').innerHTML = wCh + " \u00B0F";
   
  
}
    // calculate and return
function windChill(tempF, speed) {
 s = Math.pow (speed, 0.16);
 let f = 35.74 + 0.6215 * tempF - 35.75 * s + 0.4275 * tempF* s; 
 return f;
} */

function windChill () {
    let t = 30;
    let speed = 9;
    s = Math.pow (speed, 0.16);  
    let f = 35.74 + 0.6215 * tempF - 35.75 * s + 0.4275 * tempF* s; 
    document.getElementById('output').innerHTML = f + " \u00B0F";
}
windChill ();

