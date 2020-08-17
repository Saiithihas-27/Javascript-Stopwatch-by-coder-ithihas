//variables

var time = 0 ;

//start

function startwatch() {

   document.getElementById("button").style.display = "none" ;
   
   setInterval (function() {
   
     time = time + 1 ;
     
     document.getElementById("text").innerHTML = time ; 
   
   },1000)

}