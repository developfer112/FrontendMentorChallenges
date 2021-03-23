alert("Hello World!");

function menuResponsive() {
     var x = document.getElementById("topnav");
     if (x.className === "responsive") {
       x.className += " bolgr-dropdown-menu-responsive";
     } else {
       x.className = "responsive";
     }
   }

function liResponsive1(){
     var y = document.getElementById("liResponsive");
     
     if (y.className === "liHidden"){
          y.className += " blogr-dropdown-invisible-responsive"
     }else{
          y.className = "liHidden"
     }
}

function liResponsive2(){
     var z = document.getElementById("liResponsive2");

     if(z.className === "liHidden"){
          z.className += " blogr-dropdown-invisible-responsive"

     }else{
          z.className = "liHidden"
     }
}

function liResponsive3(){
     var w = document.getElementById("liResponsive3");

     if(w.className === "liHidden"){
          w.className += " blogr-dropdown-invisible-responsive"
     }else{
          w.className = "liHidden"
     }

}