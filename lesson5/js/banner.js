function banner(){

   let day = new Date().getDay();
   newFunction();  


   function newFunction() {
      if (day != 5) {
         document.getElementById("banner").style.display = "block";
      }
   }
}

