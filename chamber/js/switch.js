        function listView() {
            var element = document.getElementById("cards2");
            element.classList.remove("grid");
            element.classList.add("list");
          /*cards3*/
            } 
            function gridView() {
                var element = document.getElementById("cards2");
                element.classList.remove("list");
                element.classList.add("grid");
         /*cards2*/
                }
 /* Optional: Add active class to the current button (highlight it) */
 var container = document.getElementById("btnContainer");
 var btns = container.getElementsByClassName("btn");
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
   });
 }